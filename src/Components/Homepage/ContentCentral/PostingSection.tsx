import React from "react";

const PostingSection = () => {
  return (
    <div className="w-100 bg-white mt-3 rounded " style={{ height: "10rem" }}>
      <div>
        {" "}
        <div
          className=" bg-danger"
          style={{ borderRadius: "100%", height: "3rem", width: "3rem" }}
        ></div>
        <input type="text" className="bg-secondary" />
      </div>
    </div>
  );
};

export default PostingSection;
