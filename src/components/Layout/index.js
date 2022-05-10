import './index.scss';
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";


const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout