import React from "react"

const Button = ({ text, className, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {text}
  </button>
)

export default Button
