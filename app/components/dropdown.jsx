import React from 'react'

const dropdown = ({defaultChecked, question, answer}) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default dropdown