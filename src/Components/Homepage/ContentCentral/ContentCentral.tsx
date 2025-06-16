import React from "react";
import PostingSection from "./PostingSection";

const ContentCentral = () => {
  return (
    <div
      style={{ width: "calc(100% / 3)" }}
      className="
    bg-danger"
    >
      <PostingSection />
      ContentCentral
    </div>
  );
};

export default ContentCentral;
