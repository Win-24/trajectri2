
"use client";

import { SidebarContext } from "@/context/SidebarContext";
import { useContext, useState } from "react";
import NavigationHeader from "../NavigationHeader";
import MenuItem from "../Navbar/UserOptions/MenuItem";
import { MdOutlineHome, 
         MdOutlineSubscriptions,
         MdOutlineHandshake,
         MdOutlinePlaylistAddCircle,
         MdAddLink,
         MdOutlinePolicy,
         MdLogout         
          } from "react-icons/md";
import { useRouter } from "next/navigation";
import { CurrentUserContext } from "@/context/CurrentUserContext";
import Avatar, { AvatarSize } from "../../Avatar";
import { Channel } from "@prisma/client";


interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = ({  }) => {
  const sidebar = useContext(SidebarContext);

  const currentUser = useContext(CurrentUserContext);

  const router = useRouter();

  // ===================================== //

  const [dashMenu, setDashMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [uploadMenu, setUploadMenu] = useState(false);
  const [adsMenu, setAdsMenu] = useState(false);
  const [storeMenu, setStoreMenu] = useState(false);
  const [walletMenu, setWalletMenu] = useState(false);

  // ===================================== //

  const handleItemClick = (onClick: () => void) => {
    onClick();
    sidebar?.onClose();
  };
  return (
    <>
      {sidebar?.isOpen && (
        <div
          className={`bg-black bg-opacity-50 h-screen w-screen fixed z-30`}
          onClick={() => sidebar.onClose()}
        />
      )}
      <div
        className={`fixed w-64 bg-slate-200 z-40 mt-2 px-6 flex flex-col h-screen no-scrollbar dark:bg-gray-800 ${
          sidebar?.isOpen ? "translate-x-0" : "-translate-x-full" 
        } ease-in-out duration-300`} 
      >
        <NavigationHeader />
        <div className="pt-6 pb- border-b border-b-neutral-700"> 
          <MenuItem
            label="Home"
            logo={<MdOutlineHome className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />

          {/* ============= Dashboard Section Starts ============= */}
          <div>
            <MenuItem
              label="Dashboard ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setDashMenu(!dashMenu)}
            />

            <div className={dashMenu ? "block" : "hidden"}>
              <MenuItem
                label="Dashboard"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/studio"))}
              />

              <MenuItem
                label="Analytics"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Content"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Dashboard Section Ends ============= */}

          {/* ============= Account Section Starts ============= */}
          <div>
            <MenuItem
              label="Account ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setAccountMenu(!accountMenu)}
            />

            <div className={accountMenu ? "block" : "hidden"}>
              <MenuItem
                label="Details"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Channel"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Security"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Account Section Ends ============= */}

          {/* ============= Uploads Section Starts ============= */}
          <div>
            <MenuItem
              label="Upload ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setUploadMenu(!uploadMenu)}
            />

            <div className={uploadMenu ? "block" : "hidden"}>
              <MenuItem
                label="Videos"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Posts"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Uploads Section Ends ============= */}

          {/* ============= Ads Section Starts ============= */}
          <div>
            <MenuItem
              label="Ads ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setAdsMenu(!adsMenu)}
            />

            <div className={adsMenu ? "block" : "hidden"}>
              <MenuItem
                label="Campaign"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="History"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Ads Section Ends ============= */}

          {/* ============= Store Section Starts ============= */}
          <div>
            <MenuItem
              label="Store ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setStoreMenu(!storeMenu)}
            />

            <div className={storeMenu ? "block" : "hidden"}>
              <MenuItem
                label="Product Stats"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/productstats"))}
              />

              <MenuItem
                label="Products"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/studio/upload/ProductUploadForm"))}
              />

              <MenuItem
                label="Customers"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/customers"))}
              />

              <MenuItem
                label="Sales"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/sales"))}
              />
            </div>
          </div>
          {/* ============= Store Section Ends ============= */}

          {/* ============= Wallet Section Starts ============= */}
          <div>
            <MenuItem
              label="Wallet ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setWalletMenu(!walletMenu)}
            />

            <div className={walletMenu ? "block" : "hidden"}>
              <MenuItem
                label="Balance"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Pay"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Request"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Transactions"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Subscriptions"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Wallet Section Ends ============= */}
          
        </div>

        <div>
          <MenuItem
            label="Logout"
            logo={<MdLogout className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;