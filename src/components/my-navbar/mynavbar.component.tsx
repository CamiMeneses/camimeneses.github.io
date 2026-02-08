import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./mynavbar.style.scss";

import { useTranslation } from "i18n";

const MyNavbar = () => {
  const { t } = useTranslation();

  return (
    <div className="cursive">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#welcome">{t.nav.home}</Nav.Link>
            <Nav.Link href="#about">{t.nav.about}</Nav.Link>
            <Nav.Link href="#skills">{t.nav.skills}</Nav.Link>
            <Nav.Link href="#education">{t.nav.education}</Nav.Link>
            <Nav.Link href="#experience">{t.nav.experience}</Nav.Link>
            <Nav.Link href="#contact">{t.nav.contact}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
