import React from 'react'

function contactos() {
    return (
        <div className='container contactos'>
        <h2 className='mt-5 mb-5'>Envíanos tu consulta</h2>
        <form action="correo.php" method="POST">
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="lead form-label">Ingrese su e-mail</label>
  <input type="email" name="email" className=" form-control" required id="exampleFormControlInput1" placeholder="name@hotmail.com"/>
    </div>
<div className="mb-3 mt-5">
  <label for="exampleFormControlTextarea1" className="lead form-label">Escribe tu consulta</label>
  <textarea className="form-control" name="mensaje" id="" rows="3" required></textarea>
</div>
<button type="submit" to="area" className="btn btn-primary" required>Enviar</button>
     </form>  
      </div>
    )
}
export default contactos
