
"use client";

import Link from "next/link";
import { MdOutlineAccountCircle } from "react-icons/md";

const SignInButton = () => {
  return (
    <Link href="/sign-in">
      <button
        className="flex flex-row gap-1 items-center border-[1px] border-slate-50 bg-slate-200 rounded-full overflow-hidden px-3 py-1.5 text-blue-400 cursor-pointer"
      >
        <MdOutlineAccountCircle className="h-6 w-6" />
        Sign In
      </button>
    </Link>
    
  );
};

export default SignInButton;
