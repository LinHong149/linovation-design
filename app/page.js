import Image from "next/image";

import logo from "../public/logo.png"
import profile from "../public/Hong_Lin.png"
import website_design from "../public/website_design.png"
import graphic_design from "../public/graphic_design.png"
import seo from "../public/seo.png"
import development from "../public/development.png"
import canva from "../public/canva.png"
import photoshop from "../public/photoshop.png"
import figma from "../public/figma.png"
import "./globals.css";

import Button from "./components/button"
import Dropdown from "./components/dropdown"

export default function Home() {
  return (
    <main className="flex flex-col px-24 pt-10 overflow-hidden">
      <div id="NAVBAR" className="w-full h-fit flex justify-between">
        <Image className="w-[8rem] object-contain" src={logo}></Image>
        <Button text="Let's Talk"></Button>
      </div>

      <div id="HERO" className="flex flex-col w-full gap-8 items-center [&>*]:text-center py-48">
        <h1 className="w-fit text-8xl leading-[8rem]">Hi, My name's Lin. <br/> A freelance designer.</h1>
        <h2 className="w-fit text-2xl">Let's transform your visions into a reality.</h2>
        <Button text="Let's Talk"></Button>
      </div>

      <div className="flex justify-between gap-12 align-start px-20 pb-48">
        <div className="flex flex-col w-[28%] items-center gap-4 [&>*]:text-center">
          <h3 className="text-3xl">Share your vision</h3>
          <p>Meet with me and tell me about your business goals.</p>
        </div>
        <div className="flex flex-col w-[28%] items-center gap-4 [&>*]:text-center">
          <h3 className="text-3xl">Value your time</h3>
          <p>I'll work on your brand so you can do your business.</p>
        </div>
        <div className="flex flex-col w-[28%] items-center gap-4 [&>*]:text-center">
          <h3 className="text-3xl">Delivered on time</h3>
          <p>I work to your deadline and deliver only what you approve of.</p>
        </div>
      </div>

      <div id="ABOUT" className="flex h-[70vh] my-36">
        <div className="relative w-3/5 h-full">
          <div className="bg-warning opacity-50 absolute top-0 -left-48 z-0 w-[75%] h-full rounded-3xl"></div>
          <Image className="z-2 absolute top-20 left-48 rounded-3xl w-[60%]  shadow-xl" src={profile}></Image>
        </div>
        <div className="flex flex-col w-2/5 h-full justify-center gap-4 pr-[8%]">
          <h3 className="text-6xl">About me</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas nostrum voluptas temporibus repellat eligendi tempora consectetur veritatis ea unde.</p>
          <div>social media</div>
        </div>
      </div>


      <div id="WEBSITE DESIGN" className="flex h-[70vh] my-36">
        <div className="flex flex-col w-2/5 h-full justify-center gap-8 pl-[8%]">
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl">Website Design Services</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas nostrum voluptas temporibus repellat eligendi tempora consectetur veritatis ea unde.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl">From CA$499.99</h3>
            <p className="text-sm">Negotiable, one-time payment</p>
            <Button text={"Let's Talk"}></Button>
          </div>
        </div>
        <div className="relative w-3/5 h-full mt-12">
        <div className="bg-secondary opacity-50 absolute top-0 -right-48 z-0 w-[75%] h-full rounded-3xl"></div>
        <Image className="z-1 absolute top-20 right-12 rounded-3xl w-[70%] shadow-xl" src={website_design} alt="Website Design"></Image>
        <div className="bg-neutral absolute top-96 right-[20rem] z-2 max-w-[30rem] rounded-3xl p-12 shadow-xl">
          <ul className="text-white list-none">
            <li className="flex mb-2 ">
              <input type="checkbox" id="consultation" name="consultation" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="consultation" className="ml-2">Free, no-commitment consultation.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="responsive" name="responsive" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="responsive" className="ml-2">Responsive design for desktop, laptop, and mobile.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="pages" name="pages" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="pages" className="ml-2">Up to 8 website pages.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="seo" name="seo" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="seo" className="ml-2">Standard SEO set up.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="designs" name="designs" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="designs" className="ml-2">Attractive designs tailored to your business.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="prices" name="prices" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="prices" className="ml-2">Flexible prices.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="iterative" name="iterative" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="iterative" className="ml-2">Iterative design process valuing your feedback.</label>
            </li>
            <li className="flex mb-2 ">
              <input type="checkbox" id="features" name="features" checked className="checkbox checkbox-sm mt-[0.1rem] mr-[0.2rem]" />
              <label htmlFor="features" className="ml-2">Advanced features such as video headers, image sliders, and galleries.</label>
            </li>
          </ul>
        </div>
      </div>
      </div>


      <div id="GRAPHIC DESIGN" className="flex h-[70vh] my-36">
        <div className="relative w-3/5 h-full">
          <div className="bg-info opacity-75 absolute top-0 -left-48 z-0 w-[75%] h-full rounded-3xl"></div>
          <Image className="z-1 absolute top-20 left-20 rounded-3xl w-[75%]  shadow-xl" src={graphic_design}></Image>
          <div className="bg-white absolute top-[30rem] left-52 z-2 w-fit h-fit rounded-3xl shadow-xl flex p-8 gap-8">
            <Image className="w-24 aspect-square rounded-3xl shadow-xl" src={photoshop}/>
            <Image className="w-24 aspect-square rounded-3xl shadow-xl" src={figma}/>
            <Image className="w-24 aspect-square rounded-3xl shadow-xl" src={canva}/>
          </div>
        </div>
        <div className="flex flex-col w-2/5 h-full justify-center gap-8 pr-[8%]">
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl">Graphic Design Services</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas nostrum voluptas temporibus repellat eligendi tempora consectetur veritatis ea unde.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl">From CA$299.99</h3>
            <p className="text-sm">Negotiable, one-time payment</p>
            <Button text={"Let's Talk"}></Button>
          </div>
        </div>
      </div>


      <div id="SEO OPTIMIZATION" className="flex h-[70vh] my-36">
        <div className="flex flex-col w-2/5 h-full justify-center gap-8 pl-[8%]">
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl">SEO Optimization Services</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas nostrum voluptas temporibus repellat eligendi tempora consectetur veritatis ea unde.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl">From CA$399.99</h3>
            <p className="text-sm">Negotiable, one-time payment</p>
            <Button text={"Let's Talk"}></Button>
          </div>
        </div>
        <div className="relative w-3/5 h-full">
          <div className="bg-success opacity-50 absolute top-0 -right-48 z-0 w-[75%] h-full rounded-3xl"></div>
          <Image className="z-1 absolute top-32 right-12 rounded-3xl w-[75%] aspect-[5/4] object-cover shadow-xl" src={seo}></Image>
        </div>
      </div>


      <div id="DEVELOPMENT SERVICE" className="flex h-[70vh] my-36">
        <div className="relative w-3/5 h-full">
          <div className="bg-error opacity-75 absolute top-0 -left-48 z-0 w-[75%] h-full rounded-3xl"></div>
          <Image className="z-1 absolute top-20 left-20 rounded-3xl w-[75%] aspect-[5/4] object-cover object-bottom shadow-xl" src={development}></Image>
        </div>
        <div className="flex flex-col w-2/5 h-full justify-center gap-8 pr-[8%]">
          <div className="flex flex-col gap-4">
            <h3 className="text-6xl">Development Services</h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas nostrum voluptas temporibus repellat eligendi tempora consectetur veritatis ea unde.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl">From CA$799.99</h3>
            <p className="text-sm">Negotiable, one-time payment</p>
            <Button text={"Let's Talk"}></Button>
          </div>
        </div>
      </div>

      <div id="FEATURES" className="w-screen bg-neutral [&>*]:text-[#111418] -mx-24 my-48 px-32 py-48 flex flex-col gap-14 min-h-screen flex flex-col items-center justify-center">
        <div className="flex w-full gap-10">
          <div className="flex-[5] flex flex-col gap-4 rounded-3xl shadow-xl bg-[#FEDF80] p-12">
            <h3 className="text-7xl">Transforming your ideas into stunning visuals.</h3>
          </div>
          <div className="flex-[3] flex flex-col gap-4 rounded-3xl shadow-xl bg-[#FF9EEC] p-12">
            <h3 className="text-5xl">Timely delivery</h3>
            <p>Ensuring your projects are completed on time, every time.</p>
            <Button text={"Chat Anytime"}></Button>
          </div>
        </div>

        <div className="flex w-full gap-10">
          <div className="flex-1 flex flex-col gap-4 rounded-3xl shadow-xl bg-[#3EC7FF] p-12">
            <h3 className="text-5xl">Affordable Rates</h3>
            <p>Premium design services that won't break the bank.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 rounded-3xl shadow-xl bg-[#8ED6B7] p-12">
            <h3 className="text-5xl">Versatile Expertise</h3>
            <p>Expertise across various design disciplines to meet your unique needs.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 rounded-3xl shadow-xl bg-[#FF7B8A] p-12">
            <h3 className="text-5xl">Feedback Process</h3>
            <p>An iterative process that values your input at every stage.</p>
          </div>
        </div>
      </div>

      <div id="FAQ" className="w-full flex flex-col items-center py-48 gap-16">
        <h2 className="text-4xl w-fit">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-6 w-[50%] min-w-[50rem]">
          <Dropdown defaultChecked={false} question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias? Ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias?"}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias? Ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias?"}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias? Ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias?"}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} question={"Lorem ipsum dolor sit amet consectetur?"} answer={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias? Ipsum dolor sit amet consectetur adipisicing elit. Dolorum, numquam in expedita doloremque exercitationem alias?"}></Dropdown>
        </div>
      </div>

      <div className="w-full my-48 flex flex-col items-center gap-16">
        <h3 className="text-4xl">Ready to get started?</h3>
        <div className="flex gap-10">

          <div className="card bg-info bg-opacity-50 w-96 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Call me</h2>
              <p>Give me a call if you're interested or have questions.</p>
              <a href="Tel:14374235052" className="flex gap-2 p-4">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" api="[object Object]" class="sm-mr--quarter icon--phone-icon-24x24"><path d="M16.91,22h-.15a10.32,10.32,0,0,1-4.44-1.26,20.25,20.25,0,0,1-9-9A9.73,9.73,0,0,1,2,7,3.73,3.73,0,0,1,3,4.53c.65-.69,1.17-1.22,1.7-1.71a2.73,2.73,0,0,1,3.81-.08,34.86,34.86,0,0,1,2.66,2.65,2.74,2.74,0,0,1,0,3.72c-.33.36-.64.68-.95,1a10.64,10.64,0,0,0,2.07,2.4,14.41,14.41,0,0,0,1.43,1.08l.27.2c.25-.26.5-.49.74-.72A2.85,2.85,0,0,1,18.75,13c.73.67,1.52,1.45,2.39,2.38a2.78,2.78,0,0,1,0,4h0C20.57,20,20,20.52,19.48,21A3.82,3.82,0,0,1,16.91,22ZM6.64,4A.92.92,0,0,0,6,4.3c-.47.44-1,.94-1.59,1.6A1.73,1.73,0,0,0,4,7.09a8,8,0,0,0,1,3.77A18.36,18.36,0,0,0,13.23,19a8.3,8.3,0,0,0,3.53,1h.11a1.8,1.8,0,0,0,1.27-.46c.49-.46,1-1,1.54-1.54a.81.81,0,0,0,0-1.29c-.83-.88-1.59-1.63-2.29-2.27a.86.86,0,0,0-.63-.31,1,1,0,0,0-.7.36,12.67,12.67,0,0,0-1,1,1.38,1.38,0,0,1-1.88.23l-.68-.48A18.84,18.84,0,0,1,10.92,14a13,13,0,0,1-2.68-3.23,1.43,1.43,0,0,1,.29-1.89A13.75,13.75,0,0,0,9.61,7.79a.72.72,0,0,0,0-1.07,30.8,30.8,0,0,0-2.5-2.49A.72.72,0,0,0,6.64,4Z"></path></svg>
                437-423-5052
              </a>
            </div>
          </div>

          <div className="card bg-warning bg-opacity-50 w-96 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Email me</h2>
              <p>Feel free to email me for inquiries or more information.</p>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=lin@linovationdesign.com&su=&body=&bcc=&tf=cm" className="flex gap-2 p-4 link link-hover">
                <svg width="22" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" focusable="false"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                linlin.hong1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer id="FOOTER" className="footer footer-center bg-primary bg-opacity-50 text-primary-content p-14 pt-20 flex flex-col items-center gap-12 w-screen -mx-24 mt-16">
        <aside>
          <Image className="w-[14rem] object-contain" src={logo}></Image>
        </aside>
        <nav className="grid grid-flow-col gap-4 [&>*]:text-lg">
          <a className="link link-hover">Website Design</a>
          <a className="link link-hover">Graphic Design</a>
          <a className="link link-hover">SEO Optimization</a>
          <a className="link link-hover">Development</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/linovation_design/" target="_blank">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="30"
                height="30"
                viewBox="0 0 448 512"
                className="fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
            </a>
            <a target="_blank">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30"
              height="30"
              viewBox="0 0 512 512"
              className="fill-current">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
            </svg>
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=lin@linovationdesign.com&su=&body=&bcc=&tf=cm" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              width="30"
              height="30"
              viewBox="0 0 512 512"
              className="fill-current">
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
            </svg>
            </a>
          </div>
        </nav>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </footer>


      


    </main>
  );
}
