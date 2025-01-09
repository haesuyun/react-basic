import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <style>
        {`.layout {
             border: 2px solid red;
        }`}
      </style>
    </div>
  );
};

export default Layout;
