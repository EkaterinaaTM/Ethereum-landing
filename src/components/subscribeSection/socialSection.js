import React, { useState } from "react"
import ScrollAnimation from "react-animate-on-scroll"

import SectionTitle from "../sectionTitle/sectionTitle"
import SubscribeBlock from "./subscribeBlock"
import Button from "../button/button.js"
import discordLogo from "../../images/DiscordLogo.svg"

const SubscribeSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const showThankyouNote = e => {
    e.preventDefault()
    setIsSubmitted(true)
  }
  return (
    <section className="wrapper" id="subscribe">
      <SectionTitle
        title="Stay up to date"
        subtitle="Get the most up-to-date newsletters delivered straight to your email. Whether you’re looking for general information, hard fork/network upgrades, or live chat the choice is yours."
        subtitleClass="subtitle_text--short"
      />

      <div className="flex-row--between">
        <SubscribeBlock title="<span>ETC</span> Newsletter" />
        <SubscribeBlock title="Hard Fork / Network Updates" />

        <div className="text-block--justify-large">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <img src={discordLogo} alt="discordLogo" className="m32" />
            <input
              className={`input--purple ${isSubmitted && "input--hidden"}`}
              placeholder="ETC - Ethereum Classic"
            />
            {isSubmitted && <div>Thank you! You've been subscribed </div>}
            <div className="flex-row">
              <p>590 user(s) online</p>
              <Button
                text="Subscribe"
                className={`button--sm--purple ${isSubmitted &&
                  "button--hidden"}`}
                onClick={showThankyouNote}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
