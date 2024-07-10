"use client"
import React from 'react'

const button = ({text}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-neutral text-white" onClick={()=>document.getElementById('click_x').showModal()}>{text}</button>
      <dialog id="click_x" className="modal">
        <div className="modal-box bg-white flex flex-col items-center gap-10 w-fit max-w-5xl px-16 pt-16 pb-10 h-fit">
          <h3 className="font-bold text-4xl">Hello, reach out to me!</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-center px-12 py-16 shadow-xl rounded-3xl gap-6 w-full border-[1px] ">
              <svg 
                width="36" 
                height="36" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                focusable="false">
                  <path d="M16.91,22h-.15a10.32,10.32,0,0,1-4.44-1.26,20.25,20.25,0,0,1-9-9A9.73,9.73,0,0,1,2,7,3.73,3.73,0,0,1,3,4.53c.65-.69,1.17-1.22,1.7-1.71a2.73,2.73,0,0,1,3.81-.08,34.86,34.86,0,0,1,2.66,2.65,2.74,2.74,0,0,1,0,3.72c-.33.36-.64.68-.95,1a10.64,10.64,0,0,0,2.07,2.4,14.41,14.41,0,0,0,1.43,1.08l.27.2c.25-.26.5-.49.74-.72A2.85,2.85,0,0,1,18.75,13c.73.67,1.52,1.45,2.39,2.38a2.78,2.78,0,0,1,0,4h0C20.57,20,20,20.52,19.48,21A3.82,3.82,0,0,1,16.91,22ZM6.64,4A.92.92,0,0,0,6,4.3c-.47.44-1,.94-1.59,1.6A1.73,1.73,0,0,0,4,7.09a8,8,0,0,0,1,3.77A18.36,18.36,0,0,0,13.23,19a8.3,8.3,0,0,0,3.53,1h.11a1.8,1.8,0,0,0,1.27-.46c.49-.46,1-1,1.54-1.54a.81.81,0,0,0,0-1.29c-.83-.88-1.59-1.63-2.29-2.27a.86.86,0,0,0-.63-.31,1,1,0,0,0-.7.36,12.67,12.67,0,0,0-1,1,1.38,1.38,0,0,1-1.88.23l-.68-.48A18.84,18.84,0,0,1,10.92,14a13,13,0,0,1-2.68-3.23,1.43,1.43,0,0,1,.29-1.89A13.75,13.75,0,0,0,9.61,7.79a.72.72,0,0,0,0-1.07,30.8,30.8,0,0,0-2.5-2.49A.72.72,0,0,0,6.64,4Z" ></path>
              </svg>
              <h3 className="text-2xl">437-423-5052</h3>
            </div>
            <div className="flex  flex-col items-center px-12 py-16 shadow-xl rounded-3xl gap-6 w-full border-[1px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="36"
                height="36"
                viewBox="0 0 512 512"
                className="fill-current">
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
              </svg>
              <h3 className="text-2xl">lin@linovationdesign.com</h3>
            </div>
            <div className="flex flex-col items-center px-12 py-16 shadow-xl rounded-3xl gap-6 w-full border-[1px] ">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="36"
                    height="36"
                    viewBox="0 0 448 512"
                    className="fill-current">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              <h3 className="text-2xl">@linovation_design</h3>
            </div>
            <div className="flex flex-col items-center px-12 py-16 shadow-xl rounded-3xl gap-6 w-full border-[1px] "> 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="36"
                height="36"
                viewBox="0 0 512 512"
                className="fill-current">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
              </svg>
              <h3 className="text-2xl">@linovation_design</h3>
            </div>
          </div>
            <form method="dialog">
              <button className=" btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
        </div>
      </dialog>

    </div>
  )
}

export default button