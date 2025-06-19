import React from "react";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { MdEmojiEmotions, MdOutlineEmojiEmotions } from "react-icons/md";

const CreatePostSection = () => {
  return (
    <div
      className="w-100 bg-white mt-3 p-3 rounded "
      style={{ height: "10rem" }}
    >
      <div className="d-flex gap-2 pb-3 border-bottom ">
        {" "}
        <div
          className=" bg-danger"
          style={{ borderRadius: "100%", height: "3rem", width: "3rem" }}
        ></div>
        <input type="text" className="bg-secondary border-0" />
      </div>
      <ul className="d-flex gap-4 list-unstyled mb-0">
        <li className="text-center d-flex">
          <FaVideo className="fs-1 text-danger" />
          <div>Vídeo</div>
        </li>
        <li className="text-center d-flex">
          <FaPhotoVideo className="fs-1 text-success" />
          <div>Foto</div>
        </li>
        <li className="text-center d-flex justify-content-center align-items-center">
          <MdOutlineEmojiEmotions className="fs-1 text-warning" />
          <div className="fs-3">Feeling</div>
        </li>
      </ul>
    </div>
  );
};

export default CreatePostSection;
