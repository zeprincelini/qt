import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="max-w-[1300px] mx-auto py-4 px-[10px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
