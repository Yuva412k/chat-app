import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { AiOutlineMenu } from "react-icons/ai";

type LoginHeaderProps = {};

const LoginHeader: React.FC<LoginHeaderProps> = () => {
  return (
    <header className="bg-discord_blue flex items-center justify-between py-4 px-6">
      <Link href="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/421/963/original/vector-chat-icon.jpg"
          className="w-32 h-12 object-contain"
          alt=""
        />
      </Link>
      <div className="hidden lg:flex  space-x-6 ">
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
          onClick={() => signIn()}
        >
          Login
        </button>
        <AiOutlineMenu className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
};
export default LoginHeader;
