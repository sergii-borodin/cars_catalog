"use client";
import Image from "next/image";

const CustomButton = () => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn`}
      onClick={() => {}}
    >
      <span className={`custom-btn`}></span>
      CustomButton
    </button>
  );
};

export default CustomButton;
