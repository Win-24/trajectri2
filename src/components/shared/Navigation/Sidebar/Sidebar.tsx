
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
  // subscribedChannels: Channel[];
}

const Sidebar: React.FC<SidebarProps> = ({  }) => {
  const sidebar = useContext(SidebarContext);

  const currentUser = useContext(CurrentUserContext);

  const router = useRouter();

  // ===================================== //

  const [interestsMenu, setInterestsMenu] = useState(false);
  const [usefulLinksMenu, setUsefulLinksMenu] = useState(false);
  const [policiesMenu, setPoliciesMenu] = useState(false);

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

          <MenuItem
            label="Trending"
            logo={<MdOutlineHandshake className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />

          <MenuItem
            label="Top Channels"
            logo={<MdOutlineHandshake className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />

          {/* ============= Interests Section Starts ============= */}
          <div>
            <MenuItem
              label="Interests ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setInterestsMenu(!interestsMenu)}
            />

            <div className={interestsMenu ? "block" : "hidden"}>
              <MenuItem
                label="Following"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Watch Later"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Liked Videos"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Interests Section Ends ============= */}

          <MenuItem
            label="Charity"
            logo={<MdOutlineHandshake className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />

          <MenuItem
            label="Useful Links"
            logo={<MdAddLink className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />

          <MenuItem
            label="Policies"
            logo={<MdOutlinePolicy className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />

          {/* ============= Useful Links Section Starts ============= */}
          <div>
            <MenuItem
              label="Useful Links ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setUsefulLinksMenu(!usefulLinksMenu)}
            />

            <div className={usefulLinksMenu ? "block" : "hidden"}>
              <MenuItem
                label="About"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Creators"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Advertise"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Site Guide"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Earn with Us"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Useful Links Section Ends ============= */}

          {/* ============= Policies Section Starts ============= */}
          <div>
            <MenuItem
              label="Policies ▾"
              logo={<MdOutlinePlaylistAddCircle className="h-6 w-6 mr-4" />}
              round
              onClick={() => setPoliciesMenu(!policiesMenu)}
            />

            <div className={policiesMenu ? "block" : "hidden"}>
              <MenuItem
                label="Terms"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Privacy"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Disclaimer"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Site Copyright"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />

              <MenuItem
                label="Use Policy"
                logo={<MdAddLink className="h-6 w-6 mr-2 ml-3" />}
                round
                onClick={() => handleItemClick(() => router.push("/"))}
              />
            </div>
          </div>
          {/* ============= Policies Section Ends ============= */}
          
          {/* {currentUser ? (
            <MenuItem
              label="Subscriptions"
              logo={<MdOutlineSubscriptions className="h-6 w-6 mr-4" />}
              round
              onClick={() =>
                handleItemClick(() => router.push("/subscriptions"))
              }
            />
          ) : null} */}
        </div>
        <div>
          <MenuItem
            label="Logout"
            logo={<MdLogout className="h-6 w-6 mr-4" />}
            round
            onClick={() => handleItemClick(() => router.push("/"))}
          />
        </div>
        {/* {currentUser ? (
          <div className="pt-3">
            <h2 className="font-medium mb-2">Subscriptions</h2>
            {subscribedChannels.map((subscribedChannel) => {
              return (
                <MenuItem
                  key={subscribedChannel.id}
                  label={subscribedChannel.name}
                  logo={
                    <Avatar
                      imageSrc={subscribedChannel.imageSrc}
                      size={AvatarSize.small}
                      className="mr-4"
                    />
                  }
                  round
                  onClick={() =>
                    handleItemClick(() =>
                      router.push(`/channel/${subscribedChannel.id}`)
                    )
                  }
                />
              );
            })}
          </div>
        ) : null} */}
      </div>
    </>
  );
};

export default Sidebar;