
"use client";

import React from 'react'
import { logout } from '@/actions/auth';


const Logout = () => {
  return (
    <div onClick={() => logout()}>
        <div className='flex flex-row gap-1 items-center border-[1px] border-slate-50 bg-slate-200 rounded-full overflow-hidden px-3 py-1.5 text-blue-400 cursor-pointer dark:bg-gray-700'>
            Logout
        </div>
        
    </div>
  );
};

export default Logout;
