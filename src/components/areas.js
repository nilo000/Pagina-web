import React from 'react'

const areas = () => {
    return (
      <div className='area'>
        <h1 className='display-5 ml-5 mt-4 pb-4 tit2'>Nuestras áreas especializadas</h1>
    <p className="ml-5">Nos especializamos en accidentes de leves y graves lesiones<br/>
    tales como :</p>
<div className="area2 ">
    <i className="fas fa-car-crash mr-5  mt-5">Accidentes automovilisticos</i>
  
    <i className="fas fa-ambulance mr-5">Amputados</i>
  
    <i className="fab fa-accessible-icon mr-5">Sillas de ruedas</i>
    <br/><br/><br/>
    <i className="fas fa-blind mr-5 ml-4">Discapacitados</i>
    
    <i className="fas fa-people-carry mr-5">Accidentes laborales</i>

    <i className="fas fa-bone ml-4">Fracturados</i>
</div>
</div>
    )
}

export default areas
