import {Link} from 'react-scroll';
import React from 'react'

const home = () => {
    return (
       <>
<div className="jumbotron inicio card-header " id='home'>
   <h1 className="text-white  tit">Conoce tus derechos si sufriste un accidente</h1>
   <p className="text-white  lead">Tu consulta no molesta</p>
  <p className="lead">
     <Link
    activeClass="active"
    to="contactos"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
    <a class="btn btn-dark btn-lg btn-outline-white mt-4" id="boton" href="#" role="button">Hace tu consulta</a>
     </Link>
  </p>
</div>
     </>
    )
}

export default home
