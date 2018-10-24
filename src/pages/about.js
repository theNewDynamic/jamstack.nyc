import React from "react";
//import Link from "gatsby-link";
import Layout from "../components/layout"
import Logo from "../images/logo-jamstack-nyc.jpeg";

const AboutPage = () => (
  <Layout className="flex flex-col md:flex-row items-center">
    <div className="md:w-2/3 md:mr-8">
      <p className="text-xl font-sans leading-loose pl-4 text-justify">
      JAMstack.NYC is a group for professional web developers and designers looking to explore the benefits of modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
      </p>
      
    </div>

    <div className="w-full mt-16">
      <img src={Logo} alt="fun" />
    </div>
  </Layout>
);

export default AboutPage;
