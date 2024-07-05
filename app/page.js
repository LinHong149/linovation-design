import Image from "next/image";
import logo from "../public/logo.png"
import profile from "../public/Hong_Lin.png"
import "./globals.css";

import Button from "./components/button"

export default function Home() {
  return (
    <main className="flex flex-col px-24 py-10">
      <div id="NAVBAR" className="w-full h-fit flex justify-between">
        <Image className="w-[8rem] object-contain" src={logo}></Image>
        <Button text="Let's Talk"></Button>
      </div>

      <div id="HERO" className="flex flex-col w-full gap-8 items-center [&>*]:text-center py-48">
        <h1 className="w-fit text-8xl leading-[8rem]">Hi, My name's Lin. <br/> A freelance designer.</h1>
        <h2 className="w-fit text-2xl">Let's transform your visions into a reality.</h2>
        <Button text="Let's Talk"></Button>
      </div>

      <div className="flex justify-between gap-12 align-start px-20 pb-20">
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

      <div id="ABOUT" className="flex max-h-[70vh]">
        <div className="relative">
          <div className="bg w-full h-full"></div>
          <Image className="" src={profile}></Image>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl">About me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas nostrum voluptas temporibus repellat eligendi tempora consectetur veritatis ea unde.</p>
          <div>social media</div>
        </div>
      </div>
    </main>
  );
}
