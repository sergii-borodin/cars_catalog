import Link from "next/link";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <span className="text-2xl">CarTale</span>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
        />
      </nav>
    </header>
  );
};

export default Navbar;
