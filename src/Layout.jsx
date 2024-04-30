import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
