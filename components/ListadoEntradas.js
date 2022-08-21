import React from 'react'
import Entrada from './Entrada'

const ListadoEntradas = ({entradas}) => {
  return (
    <>
      {
        entradas.map((entrada) => (
            <Entrada 
                entrada={entrada}
                key={entrada.id}
            />
        ))
      }
    </>
  )
}

export default ListadoEntradas
