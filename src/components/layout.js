import React from "react";
//import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Gatsby Starter Tailwind"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div className="flex flex-col mt-16 flex-1 TKmd:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
      {children}
    </div>
    <Footer />
  </div>
);

// TemplateWrapper.propTypes = {
//   children: PropTypes.func
// };

export default TemplateWrapper;


// export default ({ children }) => (
//   <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
//     {children}
//   </div>
// )