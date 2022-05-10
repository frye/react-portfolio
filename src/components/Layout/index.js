import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";


const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <Footer />
    </div>
  )
}

export default Layout