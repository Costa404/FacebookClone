import { useState } from "react";
import { MdHomeFilled, MdOutlinePlayCircle } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { IoMdAppstore } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";

const NavCentral = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [
    <MdHomeFilled />,
    <CiFlag1 />,
    <MdOutlinePlayCircle />,
    <IoMdAppstore />,
    <FaUserGroup />,
  ];

  return (
    <div className="d-flex gap-5  bg-danger w-100">
      {icons.map((icon, index) => (
        <span
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`fs-1 d-flex justify-content-center align-items-center ${
            activeIndex === index
              ? "border-bottom border-3 border-primary text-primary"
              : "text-dark"
          }`}
          style={{ paddingBottom: "4px" }}
        >
          {icon}
        </span>
      ))}
    </div>
  );
};

export default NavCentral;
