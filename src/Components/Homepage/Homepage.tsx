import React from "react";
import Navbar from "../Navbar/Navbar";
import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import ContentCentral from "./ContentCentral/ContentCentral";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section
        style={{ height: "100vh", background: "#f2f4f7" }}
        className="d-flex w-100"
      >
        {" "}
        <ContentLeft />
        <ContentCentral />
        <ContentRight />
      </section>
    </>
  );
};

export default Homepage;
