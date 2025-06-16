import { CiFlag1 } from "react-icons/ci";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications, IoMdAppstore, IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdHomeFilled, MdOutlinePlayCircle } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import NavCentral from "./NavCentral";

const Navbar = () => {
  return (
    <section className="d-flex justify-content-between p-3 bg-white shadow-sm">
      <div className="d-flex gap-3">
        <FaFacebook className="fs-1 text-primary" />
        <IoSearchSharp className="fs-1 text-primary" />
      </div>
      <NavCentral />

      <div className="d-flex gap-3">
        <IoMdMenu className="fs-1 " />
        <FaFacebookMessenger className="fs-1" />
        <IoIosNotifications className="fs-1" />
        <FaFacebookMessenger className="fs-1" />
      </div>
    </section>
  );
};

export default Navbar;
