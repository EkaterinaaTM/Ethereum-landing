import React from "react"

import Button from "../button/button"
import Container from "../container/container"
import rocket from "../../images/rocket.png"
import data from "../../data.js"

const ResourcesSection = () => (
  <section className="resources" id="resources">
    <Container>
      <div className="resources_wrapper">
        <img src={rocket} className="resources_img" />

        <div className="resources_info">
          <h2 className="title_h3">
            Get started with <span>Ethereum</span> Classic
          </h2>
          <p className="resources_text">{data.resources.desc}</p>
          <a
            href="https://www.youtube.com/watch?v=Gviuasjb-bQ&t=8s"
            target="_blank"
          >
            <Button text="Resources" className="button--md--green" />
          </a>
        </div>
      </div>
    </Container>
  </section>
)

export default ResourcesSection
