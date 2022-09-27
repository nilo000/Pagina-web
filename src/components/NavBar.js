import {Link} from 'react-scroll';
import React from 'react';

const NavBar = () => {
    return (
<nav className="pb-3 pt-3 navbar nav navbar-expand-lg navbar-dark bg-primary position-fixed">
<Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}>
  <a className="navbar-brand" href="#">Consejeros Juridicos </a>
  </Link>
  <div class="collapse navbar-collapse nitems" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}>
      <li class="nav-item active">
        <a className="nav-link" href="#">Inicio
          <span className="sr-only">(current)</span>
        </a>
      </li>
    </Link>
     <Link
    activeClass="active"
    to="nosotros"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}>
      <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
    </Link>
     <Link
    activeClass="active"
    to="area"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}>
      <li class="nav-item mr-">
        <a class="nav-link" href="#">Nuestas Areas</a>
      </li>
    </Link>
     <Link
    activeClass="active"
    to="contactos"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}>
      <li class="nav-item">
        <a class="nav-link" href="#">Contactanos</a>
      </li>
      </Link>
      <Link
    activeClass="active"
    to="encuentro"
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}>
      <li class="nav-item">
        <a class="nav-link" href="#">Encuentranos</a>
      </li>
      </Link>
    </ul>
  </div>
</nav>
    )
}
export default NavBar
