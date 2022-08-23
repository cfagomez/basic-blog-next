import { formatearFecha } from "../helpers"

const Entrada = ({entrada}) => {

    const {titulo, published_at, url, resumen} = entrada

  return (
    <tr>
      <td>
          <div className='bg-primary text-center'>
          <hr />
          <h3 className='text-light'>{titulo}</h3>
          <p className='text-light'>{formatearFecha(published_at)}</p>
          <hr />
          <p className='text-primary'>{resumen}</p>
          <hr />
          <a href={`/blog/${url}`} className='bg-dark text-primary none-decoration p-link b-link cursor-pointer'>Leer Mas</a>
          <hr />
          </div>
      </td>
    </tr>
  )
}

export default Entrada
