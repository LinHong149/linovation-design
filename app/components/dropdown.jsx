import React from 'react'

const dropdown = ({defaultChecked, question, answer}) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <div className="collapse-title text-lg sm:text-xl font-medium">{question}</div>
      <div className="collapse-content text-sm sm:text-md">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default dropdown