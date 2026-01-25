import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ComicPlanes from "@/components/animations/ComicPlanes";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <ComicPlanes />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
