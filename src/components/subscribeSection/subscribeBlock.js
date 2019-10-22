import React, { useState } from "react"

import Button from "../button/button.js"

const SubscribeBlock = ({ title }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const showThankyouNote = e => {
    e.preventDefault()
    setIsSubmitted(true)
  }
  return (
    <div className="text-block--justify-large">
      <h4 className="title_h4" dangerouslySetInnerHTML={{ __html: title }} />
      <input
        className={`input ${isSubmitted && "input--hidden"}`}
        placeholder="Enter E-mail address"
      />
      {isSubmitted && <div>Thank you! You've been subscribed </div>}
      <Button
        text="Subscribe"
        className={`button--sm--green ${isSubmitted && "button--hidden"}`}
        onClick={showThankyouNote}
      />
    </div>
  )
}

export default SubscribeBlock
