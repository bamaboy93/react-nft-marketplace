import { Outlet } from "react-router-dom";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
