import React from "react";
import Layout from "../components/layout"
import Taken from "../images/taken.svg";

const NotFoundPage = () => (
  <Layout>
    <img src={Taken} className="block mx-auto w-1/2" alt="fun" />
    <h2 className="bg-yellow inline-block my-8 p-3">
      Looks like this page is a ghost that got abducted by aliens...
    </h2>
    </Layout>
);

export default NotFoundPage;
