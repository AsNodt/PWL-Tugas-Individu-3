import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="pp">
          <span>Beranda</span>
        </NavLink>
        <NavLink to="/about" className="pp">
          <span>Tentang</span>
        </NavLink>
        <NavLink to="/contact" className="pp">
          <span>Kontak</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
