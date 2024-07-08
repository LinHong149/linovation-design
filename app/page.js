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
        <div className="relative w-3/5 h-full">
          <div className="bg-secondary opacity-50 absolute top-0 -right-48 z-0 w-[75%] h-full rounded-3xl"></div>
          <Image className="z-1 absolute top-20 right-12 rounded-3xl w-[70%] shadow-xl" src={website_design}></Image>
          <div className="bg-neutral absolute top-96 right-[20rem] z-2 w-fit h-fit rounded-3xl p-12  shadow-xl">
            <p>h</p>
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
          <div className="bg-white absolute top-[30rem] left-52 z-2 w-fit h-fit rounded-3xl shadow-xl flex p-8 gap-8">
            asd
          </div>
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
        <h2 className="text-5xl w-fit">Frequently Asked Questions</h2>

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

      <div className="w-full my-48 flex flex-col items-center gap-10">
        <h3 className="text-4xl">Ready to get started?</h3>
        <div className="flex gap-10">
          <div className="card bg-white w-96 shadow-xl">
            {/* <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="card-title">Call me</h2>
              <p>Give me a call if you're interested or have questions.</p>
              <a href="Tel:14374235052" className="flex gap-2 p-4">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" api="[object Object]" class="sm-mr--quarter icon--phone-icon-24x24"><path d="M16.91,22h-.15a10.32,10.32,0,0,1-4.44-1.26,20.25,20.25,0,0,1-9-9A9.73,9.73,0,0,1,2,7,3.73,3.73,0,0,1,3,4.53c.65-.69,1.17-1.22,1.7-1.71a2.73,2.73,0,0,1,3.81-.08,34.86,34.86,0,0,1,2.66,2.65,2.74,2.74,0,0,1,0,3.72c-.33.36-.64.68-.95,1a10.64,10.64,0,0,0,2.07,2.4,14.41,14.41,0,0,0,1.43,1.08l.27.2c.25-.26.5-.49.74-.72A2.85,2.85,0,0,1,18.75,13c.73.67,1.52,1.45,2.39,2.38a2.78,2.78,0,0,1,0,4h0C20.57,20,20,20.52,19.48,21A3.82,3.82,0,0,1,16.91,22ZM6.64,4A.92.92,0,0,0,6,4.3c-.47.44-1,.94-1.59,1.6A1.73,1.73,0,0,0,4,7.09a8,8,0,0,0,1,3.77A18.36,18.36,0,0,0,13.23,19a8.3,8.3,0,0,0,3.53,1h.11a1.8,1.8,0,0,0,1.27-.46c.49-.46,1-1,1.54-1.54a.81.81,0,0,0,0-1.29c-.83-.88-1.59-1.63-2.29-2.27a.86.86,0,0,0-.63-.31,1,1,0,0,0-.7.36,12.67,12.67,0,0,0-1,1,1.38,1.38,0,0,1-1.88.23l-.68-.48A18.84,18.84,0,0,1,10.92,14a13,13,0,0,1-2.68-3.23,1.43,1.43,0,0,1,.29-1.89A13.75,13.75,0,0,0,9.61,7.79a.72.72,0,0,0,0-1.07,30.8,30.8,0,0,0-2.5-2.49A.72.72,0,0,0,6.64,4Z" fill="#0075be"></path></svg>
                437-423-5052
              </a>
            </div>
          </div>

          <div className="card bg-white w-96 shadow-xl">
            {/* <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="card-title">Email me</h2>
              <p>Feel free to email me for inquiries or more information.</p>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=lin@linovationdesign.com&su=&body=&bcc=&tf=cm" className="flex gap-2 p-4">
                linlin.hong1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-center bg-primary text-primary-content p-10 w-screen -mx-24">
        <aside>
          <Image className="w-[8rem] object-contain" src={logo}></Image>
        </aside>
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Website Design</a>
          <a className="link link-hover">Graphic Design</a>
          <a className="link link-hover">SEO Optimization</a>
          <a className="link link-hover">Development</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <p>lin@linovationdesign.com</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </footer>


      


    </main>
  );
}
