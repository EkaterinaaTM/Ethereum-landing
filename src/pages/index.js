import React, {Fragment} from "react"

import '../styles/index.scss';

import Container from "../components/container/container";
import Header from "../components/header/header";
import AboutSection from "../components/aboutSection/aboutSection";
import ResourcesSection from "../components/resourcesSection/resourcesSection";
import CommunitySection from "../components/communitySection/communitySection";
import BlogSection from "../components/blogSection/blogSection";
import SocialSection from "../components/socialSection/socialSection";
import Footer from "../components/footer/footer";

const IndexPage = () => (
  <Fragment>
    <Container>
      <Header />
      <AboutSection />
    </Container>

    <ResourcesSection />

    <Container>
      <CommunitySection />
      <BlogSection />
      <SocialSection />
    </Container>

    <Footer />
  </Fragment>
)

export default IndexPage
