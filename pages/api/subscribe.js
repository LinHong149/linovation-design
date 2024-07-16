import axios from 'axios';

const API_USER_ID = process.env.SENDPULSE_ID;
const API_SECRET = process.env.SENDPULSE_SECRET;
let accessToken = null;
let tokenExpirationTime = null;

// Function to get access token
const getAccessToken = async () => {
  if (!accessToken || new Date() > tokenExpirationTime) {
    const response = await axios.post('https://api.sendpulse.com/oauth/access_token', {
      grant_type: 'client_credentials',
      client_id: API_USER_ID,
      client_secret: API_SECRET,
    });

    accessToken = response.data.access_token;
    tokenExpirationTime = new Date(new Date().getTime() + response.data.expires_in * 1000);
  }
  return accessToken;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const token = await getAccessToken();

    // Step 2: Create a mailing list if it doesn't exist
    const mailingListName = 'Website List';
    let mailingListId;

    // Check if the mailing list already exists
    const listsResponse = await axios.get('https://api.sendpulse.com/addressbooks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const existingList = listsResponse.data.find((list) => list.name === mailingListName);

    if (existingList) {
      mailingListId = existingList.id;
    } else {
      const createListResponse = await axios.post(
        'https://api.sendpulse.com/addressbooks',
        {
          bookName: mailingListName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      mailingListId = createListResponse.data.id;
    }

    // Step 3: Add email to the mailing list
    await axios.post(
      `https://api.sendpulse.com/addressbooks/${mailingListId}/emails`,
      {
        emails: [email],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data) {
      res.status(500).json({ message: 'Subscription failed', error: error.response.data });
    } else {
      res.status(500).json({ message: 'Subscription failed', error: error.message });
    }
  }
}