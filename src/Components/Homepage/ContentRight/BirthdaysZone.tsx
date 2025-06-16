import React from "react";
import { FaGift } from "react-icons/fa";

const BirthdaysZone = () => {
  return (
    <section
      className="w-50  d-flex flex-column    text-white gap-2 p-3 border-bottom border-secondary"
      style={{ height: "15rem" }}
    >
      <span className="fs-2">Birthdays</span>
      <div className="d-flex gap-4">
        <FaGift className="fs-1 text-primary" />{" "}
        <p className="text-dark">
          Nuno Costa and 3 others have birthdays tody.
        </p>{" "}
      </div>
    </section>
  );
};

export default BirthdaysZone;
