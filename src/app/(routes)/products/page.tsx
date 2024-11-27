
"use client";

import SidebarStudio from "@/components/shared/Navigation/Sidebar/SidebarStudio";
import PageHeader from "../studio/_components/PageHeader";
import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";


const handleItemClick = (onClick: () => void) => {
    onClick(); 
};

const Products = () => {
    const router = useRouter();
    
  return (
    <div className="flex flex-col w-full h-full">
        <SidebarStudio />

        <div className="flex flex-row justify-between items-center p-5 border-b-[1px] border-zinc-700">
            <PageHeader>Products</PageHeader>

            <Button 
                type={"box"} 
                onClick={() => handleItemClick(() => router.push("/products/addproduct"))}
            >
                Add New
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 p-8">
            
        </div> 
    </div>
  )
}

export default Products
