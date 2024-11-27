
import Navigation from "@/components/shared/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import SidebarProvider from "@/context/SidebarContext";
import CurrentUserProvider from "@/context/CurrentUserContext";
import getCurrentUser from "@/actions/getCurrentUser";
import CreateChannelModalProvider from "@/context/CreateChannelModalContext";
import getCurrentChannel from "@/actions/getCurrentChannel";
import CurrentChannelProvider from "@/context/CurrentChannelContext";
import UploadVideoModalProvider from "@/context/UploadVideoModalContext";
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal";
import { Toaster } from "react-hot-toast";



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Trajectri",
  description: "Aim Higher",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  const currentChannel = await getCurrentChannel();

  return (
    <html lang="en">
      <body className={`${roboto.className} dark:bg-dark dark:text-white`}>
        <CreateChannelModalProvider>
          <Toaster toastOptions={{ position: "bottom-left" }} />
          <CreateChannelModal />
          <CurrentUserProvider user={currentUser}>
            <CurrentChannelProvider channel={currentChannel}>
              <UploadVideoModalProvider>
                <SidebarProvider> 
                  <Navigation />
                  <div className="pt-16">{children}</div>
                </SidebarProvider>
              </UploadVideoModalProvider>
            </CurrentChannelProvider>
          </CurrentUserProvider>
        </CreateChannelModalProvider>
      </body>
    </html>
  );
}