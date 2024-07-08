"use client"
import React from 'react'

const button = ({text}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn text-white" onClick={()=>document.getElementById('click_x').showModal()}>{text}</button>
      <dialog id="click_x" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
          </div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
        </div>
      </dialog>

      <dialog id="click_outside" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
          </div>
        </div>
        <form method="dialog" className='modal-backdrop'>
          {/* if there is a button in form, it will close the modal */}
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default button