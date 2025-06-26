import React from "react";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const CreatePostSection = () => {
  return (
    <div
      className="w-100 bg-white mt-3 p-3  "
      style={{ height: "10rem", borderRadius: "1rem" }}
    >
      <div className="d-flex gap-3 pb-3 border-bottom ">
        {" "}
        <div
          className=" bg-danger"
          style={{ borderRadius: "100%", height: "3.5rem", width: "3.5rem" }}
        ></div>
        <input
          placeholder="What's on your mind?"
          type="text"
          className=" border-0 w-100 ps-3 fs-4"
          style={{
            borderRadius: "3rem",
            background: "#f0f2f5",
            height: "3.5rem",
          }}
        />
      </div>
      <ul className="d-flex gap-4 list-unstyled mb-0 justify-content-around mt-3">
        {/* ============================

        new

        ============================ */}
        <li className="text-center d-flex justify-content-center align-items-center gap-3">
          <FaVideo className="fs-1 text-danger" />
          <div className="fs-3">Vídeo</div>
        </li>
        {/* ============================

        new

        ============================ */}
        <li className="text-center d-flex justify-content-center align-items-center gap-3">
          <FaPhotoVideo className="fs-1 text-success" />
          <div className="fs-3">Photo</div>
        </li>
        {/* ============================

        new

        ============================ */}
        <li className="text-center d-flex justify-content-center align-items-center gap-3">
          <MdOutlineEmojiEmotions className="fs-1 text-warning" />
          <div className="fs-3 d-flex align-items-center justify-content-center text-center">
            Feeling
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CreatePostSection;
