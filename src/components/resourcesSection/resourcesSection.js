import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import Button from "../button/button"
import Container from "../container/container"
import rocket from "../../images/rocket.png"
import data from "../../data.js"

const ResourcesSection = () => (
  <section className="resources" id="resources">
    <Container>
      <div className="resources_wrapper">
        <ScrollAnimation animateIn="fadeIn" duration={2}>
          <img src={rocket} className="resources_img" />
        </ScrollAnimation>
        <div className="resources_info">
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <h2 className="title_h3">
              Get started with <span>Ethereum</span> Classic
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <p className="resources_text">{data.resources.desc}</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <a
              href="https://www.youtube.com/watch?v=Gviuasjb-bQ&t=8s"
              target="_blank"
            >
              <Button text="Resources" className="button--md--green" />
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  </section>
)

export default ResourcesSection
