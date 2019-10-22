import React, {Fragment} from "react"

import '../styles/index.scss';

import Container from "../components/container/container";
import Header from "../components/header/header";
import Head from '../components/head/head'
import AboutSection from "../components/aboutSection/aboutSection";
import ResourcesSection from "../components/resourcesSection/resourcesSection";
import CommunitySection from "../components/communitySection/communitySection";
import BlogSection from "../components/blogSection/blogSection";
import SubscribeSection from "../components/subscribeSection/socialSection";
import Footer from "../components/footer/footer";

const IndexPage = () => (
  <Fragment>
    <Head />
    <Container>
      <Header />
      <AboutSection />
    </Container>

    <ResourcesSection />

    <Container>
      <CommunitySection />
      <BlogSection />
      <SubscribeSection />
    </Container>

    <Footer />
  </Fragment>
)

export default IndexPage
