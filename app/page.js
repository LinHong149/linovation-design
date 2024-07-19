"use client";

import { Link as ScrollLink, Element } from "react-scroll";
import Image from "next/image";
import { useState } from 'react';

import logo from "../public/logo.png";
import logo_white from "../public/logo_white.png";
import profile from "../public/Hong_Lin.png";
import website_design from "../public/website_design.png";
import graphic_design from "../public/graphic_design.png";
import seo from "../public/seo.png";
import development from "../public/development.png";
import canva from "../public/canva.png";
import photoshop from "../public/photoshop.png";
import figma from "../public/figma.png";
import "./globals.css";

import Button from "./components/button";
import Dropdown from "./components/dropdown";
import Socials from "./components/socials";

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email }));

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    console.log("after api call");

    const data = await res.json();
    if (res.status === 200) {
      setMessage('Subscription successful!');
    } else {
      setMessage(`Subscription failed: ${data.message}`);
    }
  };

  return (
    <main className="flex flex-col px-4 sm:px-24 pt-2 sm:pt-10 overflow-hidden bg-white">
      <div id="NAVBAR" className="navbar w-full h-fit flex justify-between w-screen -mx-4 sm:-mx-24 sm:px-24">
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 aspect-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
              <li>
                <ScrollLink to="website-design" smooth={true} duration={500}>Services</ScrollLink>
                <ul className="p-2">
                  <li><ScrollLink to="website-design" smooth={true} duration={500}>Website Design</ScrollLink></li>
                  <li><ScrollLink to="graphic-design" smooth={true} duration={500}>Graphic Design</ScrollLink></li>
                  <li><ScrollLink to="seo-optimization" smooth={true} duration={500}>SEO Optimization</ScrollLink></li>
                  <li><ScrollLink to="development" smooth={true} duration={500}>Development</ScrollLink></li>
                </ul>
              </li>
              <li><ScrollLink to="faq" smooth={true} duration={500}>FAQ</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
          </div>
          <Image className="w-[8rem] object-contain" src={logo}></Image>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-white">
                  <li><ScrollLink to="website-design" smooth={true} duration={500}>Website Design</ScrollLink></li>
                  <li><ScrollLink to="graphic-design" smooth={true} duration={500}>Graphic Design</ScrollLink></li>
                  <li><ScrollLink to="seo-optimization" smooth={true} duration={500}>SEO Optimization</ScrollLink></li>
                  <li><ScrollLink to="development" smooth={true} duration={500}>Development</ScrollLink></li>
                </ul>
              </details>
            </li>
            <li><ScrollLink to="faq" smooth={true} duration={500}>FAQ</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          </ul>
        </div>
        <div className="navbar-end lg:pr-0 pr-3">
          <Button text="Let's Talk"></Button>
        </div>
      </div>
        

      <div id="home" className="flex flex-col w-full gap-8 items-center [&>*]:text-center py-48">
        <h1 className="w-full sm:w-fit text-4xl sm:text-8xl sm:leading-[8rem] ">Hi, My name's Lin. <br/> A freelance designer.</h1>
        <h2 className="w-fit text-lg sm:text-2xl">I'm dedicated to transforming your visions into reality.</h2>
        <Button text="Let's Talk"></Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-12 align-start sm:px-20 pb-48">
        <div className="flex flex-col w-full sm:w-[28%] items-center gap-4 [&>*]:text-center">
          <h3 className="text-3xl">Share your vision</h3>
          <p>Meet with me and tell me about your business goals.</p>
        </div>
        <div className="flex flex-col w-full sm:w-[28%] items-center gap-4 [&>*]:text-center">
          <h3 className="text-3xl">Value your time</h3>
          <p>I'll work on your brand so you can do your business.</p>
        </div>
        <div className="flex flex-col w-full sm:w-[28%] items-center gap-4 [&>*]:text-center">
          <h3 className="text-3xl">Delivered on time</h3>
          <p>I work to your deadline and deliver only what you approve of.</p>
        </div>
      </div>


      <div id="about" className="py-20 my-16 flex ">
        <div className="flex h-fit sm:h-[70vh] sm:flex-row flex-col gap-10 sm:gap-0 sm:w-full">
          <div className="relative sm:w-3/5 h-80 sm:h-full flex justify-center">
            <div className="bg-warning opacity-50 absolute -top-5 sm:top-0 left-2 sm:-left-48 z-0 w-[80%] sm:w-[75%] h-80 sm:h-full rounded-3xl"></div>
            <Image className="z-2 absolute sm:top-20 sm:left-48 rounded-3xl w-[80%] h-80 sm:h-auto object-cover sm:w-[60%] shadow-xl" src={profile}></Image>
          </div>
          <div className="flex flex-col sm:w-2/5 h-full justify-center gap-4 pr-[8%]">
            <h3 className="text-3xl sm:text-6xl">About me</h3>
            <p className="text-sm sm:text-md">Hi, I’m Lin, a dedicated freelance designer focused on helping you create a unique and compelling brand. <br /> <br /> I transform your visions into reality with stunning websites, eye-catching graphics, and robust development solutions. <br /> <br />Let’s collaborate to bring your brand to life.</p>
            <Socials size={24}/>
          </div>
        </div>
      </div>

    
      <div id="website-design" className="relative p-0 sm:py-20 sm:w-screen sm:-mx-24 sm:px-24 my-16 h-auto border-gray-200 rounded-3xl ">
        <div className="relative flex flex-col-reverse sm:flex-row sm:h-[70vh]">
          <div className="flex flex-col w-full sm:w-2/5 h-full justify-center gap-0 sm:gap-6 px-4 py-8 sm:py-0 bg-white">
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-3xl sm:text-6xl font-semibold text-gray-800 mb-4 sm:mb-6">Website Design Services</h3>
              <p className="hidden sm:block text-gray-600 mb-6">Transform your online presence with a custom, responsive website that captures your brand’s essence and engages your audience.</p>
            </div>
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-800">From CA$499.99</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">Negotiable Prices</p>
              <Button text={"Let's Talk"}></Button>
            </div>
          </div>
          <div className="relative sm:w-3/5 h-52 sm:h-full sm:mt-0">
            <div className="hidden sm:block bg-secondary opacity-50 absolute inset-0 transform translate-x-48 rounded-3xl z-0"></div>
            <Image className="absolute sm:inset-32 sm:top-6 sm:right-20 h-full sm:h-auto w-full sm:w-[80%] rounded-3xl shadow-lg object-cover z-10" src={website_design} alt="Website Design" />
            <div className="hidden sm:block bg-[#1E232A] absolute top-[95%] transform -translate-y-1/2 right-[20rem] max-w-[30rem] rounded-3xl p-8 shadow-lg z-20">
                <ul className="text-white list-none space-y-4">
                  {[
                    "Free, no-commitment consultation.",
                    "Responsive design for desktop, laptop, and mobile.",
                    "Up to 8 website pages.",
                    "Standard SEO set up.",
                    "Attractive designs tailored to your business.",
                    "Flexible prices.",
                    "Iterative design process valuing your feedback.",
                    "Advanced features such as video headers, image sliders, and galleries."
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <input type="checkbox" id={item.replace(/\s+/g, '-').toLowerCase()} name={item.replace(/\s+/g, '-').toLowerCase()} checked className="checkbox checkbox-sm text-blue-600 focus:ring-blue-500" />
                      <label htmlFor={item.replace(/\s+/g, '-').toLowerCase()} className="ml-2">{item}</label>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </div>


      <div id="graphic-design" className="relative p-0 sm:py-20 sm:w-screen sm:-mx-24 sm:px-24 my-16 h-auto border-gray-200 rounded-3xl">
        <div className="relative flex flex-col sm:flex-row sm:h-[70vh]">
          <div className="relative sm:w-3/5 h-52 sm:h-full">
            <div className="hidden sm:block bg-info opacity-75 absolute top-0 -left-48 z-0 w-[75%] h-full rounded-3xl"></div>
            <Image className="absolute sm:top-20 sm:left-20 sm:w-[75%] rounded-3xl w-full h-full sm:h-auto object-cover shadow-xl z-1" src={graphic_design} alt="Graphic Design" />
            <div className="hidden sm:flex bg-white absolute top-[30rem] left-52 z-2 w-fit h-fit rounded-3xl shadow-xl p-8 gap-8">
              <Image className="w-24 aspect-square rounded-3xl shadow-xl" src={photoshop} />
              <Image className="w-24 aspect-square rounded-3xl shadow-xl" src={figma} />
              <Image className="w-24 aspect-square rounded-3xl shadow-xl" src={canva} />
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-2/5 h-full justify-center gap-0 sm:gap-6 px-4 py-8 sm:py-0 bg-white">
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-3xl sm:text-6xl font-semibold text-gray-800 mb-4 sm:mb-2">Graphic Design Services</h3>
              <p className="hidden sm:block text-gray-600 mb-6">Elevate your brand’s visual identity with stunning graphics that communicate your message and leave a lasting impression.</p>
            </div>
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-800">From CA$299.99</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-2">Negotiable Prices</p>
              <Button text={"Let's Talk"} />
            </div>
          </div>
        </div>
      </div>


      <div id="seo-optimization" className="relative p-0 sm:py-20 sm:w-screen sm:-mx-24 sm:px-24 my-16 h-auto border-gray-200 rounded-3xl">
        <div className="relative flex flex-col-reverse sm:flex-row sm:h-[70vh]">
          <div className="flex flex-col w-full sm:w-2/5 h-full justify-center gap-0 sm:gap-6 px-4 py-8 sm:py-0 sm:px-16 bg-white">
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">SEO Optimization Services</h3>
              <p className="hidden sm:block text-gray-600 mb-6">Boost your website’s visibility and attract more traffic with tailored SEO strategies that drive results.</p>
            </div>
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-800">From CA$399.99</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">Negotiable Prices</p>
              <Button text={"Let's Talk"} />
            </div>
          </div>
          <div className="relative sm:w-3/5 h-52 sm:h-full">
            <div className="hidden sm:block bg-success opacity-50 absolute top-0 -right-48 z-0 w-[75%] h-full rounded-3xl"></div>
            <Image className="absolute sm:top-32 sm:right-12 sm:w-[75%] rounded-3xl w-full h-full sm:aspect-[5/4] sm:h-auto object-cover shadow-xl z-1" src={seo} alt="SEO Optimization" />
          </div>
        </div>
      </div>

      <div id="development" className="relative p-0 sm:py-20 sm:w-screen sm:-mx-24 sm:px-24 my-16 h-auto border-gray-200 rounded-3xl">
        <div className="relative flex flex-col sm:flex-row sm:h-[70vh]">
          <div className="relative sm:w-3/5 h-52 sm:h-full">
            <div className="hidden sm:block bg-error opacity-75 absolute top-0 -left-48 z-0 w-[75%] h-full rounded-3xl"></div>
            <Image className="absolute sm:top-20 sm:left-20 sm:w-[75%] rounded-3xl w-full h-full sm:aspect-[5/4] sm:h-auto object-cover object-center sm:object-bottom  shadow-xl z-1" src={development} alt="Development Services" />
          </div>
          <div className="flex flex-col w-full sm:w-2/5 h-full justify-center gap-0 sm:gap-6 px-4 py-8 sm:py-0 sm:px-16 bg-white">
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Development Services</h3>
              <p className="hidden sm:block text-gray-600 mb-6">Bring your ideas to life with robust, scalable development solutions that meet your business needs and exceed expectations.</p>
            </div>
            <div className="flex flex-col gap-0 sm:gap-4">
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-800">From CA$799.99</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">Negotiable Prices</p>
              <Button text={"Let's Talk"} />
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="w-screen bg-[#1E232A] text-[#111418] -mx-4 sm:-mx-24 my-48 sm:px-32 sm:py-48 px-4 py-24 flex flex-col gap-14 min-h-screen items-center justify-center">
        <div className="flex flex-col sm:flex-row w-full gap-10">
          <div className="flex-1 flex sm:flex-[5] flex-col gap-4 rounded-3xl shadow-xl bg-[#FEDF80] p-8 sm:p-12">
            <h3 className="text-3xl sm:text-7xl">Transforming your ideas into stunning visuals.</h3>
          </div>
          <div className="flex-1 flex flex-col sm:flex-[3] gap-4 rounded-3xl shadow-xl bg-[#FF9EEC] p-8 sm:p-12">
            <h3 className="text-2xl sm:text-5xl">Timely delivery</h3>
            <p>Ensuring your projects are completed on time, every time.</p>
            <Button text={"Chat Anytime"} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full gap-10">
          <div className="flex-1 flex flex-col gap-4 rounded-3xl shadow-xl bg-[#3EC7FF] p-8 sm:p-12">
            <h3 className="text-2xl sm:text-5xl">Affordable Rates</h3>
            <p>Premium design services that won't break the bank.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 rounded-3xl shadow-xl bg-[#8ED6B7] p-8 sm:p-12">
            <h3 className="text-2xl sm:text-5xl">Versatile Expertise</h3>
            <p>Expertise across various design disciplines to meet your unique needs.</p>
          </div>
          <div className="flex-1 flex flex-col gap-4 rounded-3xl shadow-xl bg-[#FF7B8A] p-8 sm:p-12">
            <h3 className="text-2xl sm:text-5xl">Feedback Process</h3>
            <p>An iterative process that values your input at every stage.</p>
          </div>
        </div>
      </div>

      <div id="faq" className="w-full flex flex-col items-center py-24 m-10 gap-16">
        <h2 className="text-4xl w-fit">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-6 w-[50%] min-w-[50rem]">
          <Dropdown defaultChecked={false} 
            question={"What is the process for starting a project with you?"} 
            answer={"We begin with a free consultation to discuss your needs and goals. Once we agree on the project scope and terms, I’ll provide a detailed proposal and timeline. After approval, we kick off the design and development phases, with regular updates and feedback sessions."}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} 
            question={"How long does it take to design and develop a website?"} 
            answer={"The timeline depends on the complexity and features of the website. Typically, a simple 1 page website takes about 2 week from initial consultation to launch, including design, development, and revisions. More complicated websites including photography appointments and multiple pages may take 3-6 weeks."}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} 
            question={"Can you help with branding and logo design?"} 
            answer={"Absolutely! In addition to website design, I offer comprehensive graphic design services, including branding, logo design, and other visual elements to create a cohesive brand identity."}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} 
            question={"What are your rates for freelance design services?"} 
            answer={"My rates vary depending on the project scope and complexity. I offer competitive, negotiable pricing with a focus on providing value. For example, website design services start at CA$499.99, and graphic design services start at CA$299.99."}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} 
            question={"What if I need changes to the website after it’s completed?"} 
            answer={"I understand that needs may evolve, so I offer post-launch support and revisions. We can discuss any changes you need, and I’ll provide a quote and timeline for the updates."}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} 
            question={"Do you design websites for mobile devices?"} 
            answer={"Yes, all my website designs are fully responsive, ensuring they look and perform well on desktops, laptops, tablets, and mobile devices."}></Dropdown>
          <hr className="w-full border-neutral" />
          <Dropdown defaultChecked={false} 
            question={"What platforms do you use for website development?"} 
            answer={"I specialize in several platforms, including Wix, WordPress, GoDaddy, and custom coded websites."}></Dropdown>
        </div>
      </div>

      {/* <div id="contact" className="w-full p-20 h-screen justify-center flex flex-col items-center gap-16">
        <h3 className="text-4xl">Ready to get started?</h3>
        <div className="flex gap-10">

          <div className="card bg-info bg-opacity-50 w-[24rem] shadow-xl px-6 py-6">
            <div className="card-body items-center text-center">
              <h2 className="text-2xl">Call me</h2>
              <p className="text-lg">Give me a call if you're interested or have questions.</p>
              <a href="Tel:14374235052" className="flex gap-2 p-4">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" api="[object Object]" class="sm-mr--quarter icon--phone-icon-24x24"><path d="M16.91,22h-.15a10.32,10.32,0,0,1-4.44-1.26,20.25,20.25,0,0,1-9-9A9.73,9.73,0,0,1,2,7,3.73,3.73,0,0,1,3,4.53c.65-.69,1.17-1.22,1.7-1.71a2.73,2.73,0,0,1,3.81-.08,34.86,34.86,0,0,1,2.66,2.65,2.74,2.74,0,0,1,0,3.72c-.33.36-.64.68-.95,1a10.64,10.64,0,0,0,2.07,2.4,14.41,14.41,0,0,0,1.43,1.08l.27.2c.25-.26.5-.49.74-.72A2.85,2.85,0,0,1,18.75,13c.73.67,1.52,1.45,2.39,2.38a2.78,2.78,0,0,1,0,4h0C20.57,20,20,20.52,19.48,21A3.82,3.82,0,0,1,16.91,22ZM6.64,4A.92.92,0,0,0,6,4.3c-.47.44-1,.94-1.59,1.6A1.73,1.73,0,0,0,4,7.09a8,8,0,0,0,1,3.77A18.36,18.36,0,0,0,13.23,19a8.3,8.3,0,0,0,3.53,1h.11a1.8,1.8,0,0,0,1.27-.46c.49-.46,1-1,1.54-1.54a.81.81,0,0,0,0-1.29c-.83-.88-1.59-1.63-2.29-2.27a.86.86,0,0,0-.63-.31,1,1,0,0,0-.7.36,12.67,12.67,0,0,0-1,1,1.38,1.38,0,0,1-1.88.23l-.68-.48A18.84,18.84,0,0,1,10.92,14a13,13,0,0,1-2.68-3.23,1.43,1.43,0,0,1,.29-1.89A13.75,13.75,0,0,0,9.61,7.79a.72.72,0,0,0,0-1.07,30.8,30.8,0,0,0-2.5-2.49A.72.72,0,0,0,6.64,4Z"></path></svg>
                437-423-5052
              </a>
            </div>
          </div>

          <div className="card bg-warning bg-opacity-50 w-[24rem] shadow-xl px-6 py-6">
            <div className="card-body items-center text-center">
              <h2 className="text-2xl">Email me</h2>
              <p className="text-lg">Feel free to email me for inquiries or more information.</p>
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=lin@linovationdesign.com&su=&body=&bcc=&tf=cm" className="flex gap-2 p-4 link link-hover">
                <svg width="22" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" focusable="false"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                lin@linovationdesign.com
              </a>
            </div>
          </div>
        </div>
      </div> */}

<footer id="footer" className="bg-[#1E232A] text-white px-14 pt-20 pb-10 flex flex-col justify-between gap-12 w-screen -mx-24 mt-16">
      <div className="footer">
        <aside className="flex flex-col gap-4">
          <Image className="w-[12rem] object-contain" src={logo_white}></Image>
          <Socials size={24} />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Website Design</a>
          <a className="link link-hover">Graphic Design</a>
          <a className="link link-hover">SEO Optimization</a>
          <a className="link link-hover">Development</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <form onSubmit={handleSubmit}>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text text-[#9DA3AF]">Interested in my services? <br /> Enter your email address and I'll get back to you!</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered join-item bg-transparent border-[#9DA3AF] border-opacity-25"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn bg-white text-black hover:bg-[#ebf0f0] join-item">Subscribe</button>
            </div>
            {message && <p>{message}</p>}
          </fieldset>
        </form>
      </div>
      <div className="footer">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>


      


    </main>
  );
}
