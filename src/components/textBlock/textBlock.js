import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

const TextBlock = ({ title, desc }) => (
  <div className="text-block">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
      <h3 className="title_h3" dangerouslySetInnerHTML={{ __html: title }} />
    </ScrollAnimation>
    <span className="green-line" />
    <ScrollAnimation animateIn="fadeIn" duration={2}>
      <p
        className="text-block_text"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </ScrollAnimation>
  </div>
)

export default TextBlock
