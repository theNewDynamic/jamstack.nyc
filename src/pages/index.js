import React from "react";
//import Link from "gatsby-link";
import Layout from "../components/layout"
import Logo from "../images/logo-jamstack-nyc.jpeg";

const IndexPage = () => (
  
  <Layout className="">    
    <h2 className="mb-8 text-4xl">
      Welcome to JAMstack.NYC
    </h2>
    <p className="leading-normal">
    JAMstack.NYC is a group for professional web developers and designers looking to explore the benefits of modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
      <br />
      Visit our  
      <a
        href="https://www.meetup.com/JAMstack-nyc/"
        className="pl-1 text-grey-darkestfont-bold no-underline text-grey-darkest"
      >
        Meetup Page
      </a>.
    </p>  
    <img src={Logo} className="block mx-auto w-full mt-8" alt="TK"/>
  </Layout>
);

export default IndexPage;


// export default () => (
//   <Layout>
//     <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//     <p>
//       What do I like to do? Lots of course but definitely enjoy building
//       websites.
//     </p>
//   </Layout>
// )
