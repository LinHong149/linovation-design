import Image from "next/image";
import logo from "../public/logo.png"
import profile from "../public/Hong_Lin.png"
import website_design from "../public/website_design.png"
import graphic_design from "../public/graphic_design.png"
import canva from "../public/canva.png"
import photoshop from "../public/photoshop.png"
import figma from "../public/figma.png"
import "./globals.css";

import Button from "./components/button"

export default function Home() {
  return (
    <main className="flex flex-col px-24 py-10 overflow-hidden">
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
          <div className="bg-success opacity-75 absolute top-0 -left-48 z-0 w-[75%] h-full rounded-3xl"></div>
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


      


    </main>
  );
}
