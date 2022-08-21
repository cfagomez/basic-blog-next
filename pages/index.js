import Layout from '../components/Layout'
import {formatearFecha} from '../helpers/index'

export default function Home({entradas}) {

  return (
    <Layout>
      <main>
        <table>
          <tbody>
            {
              entradas.map((entrada) => (
                <tr key={entrada.id}>
                  <td>
                    <div className='bg-primary text-center'>
                      <hr />
                      <h3 className='text-light'>{entrada.titulo}</h3>
                      <p className='text-light'>{formatearFecha(entrada.published_at)}</p>
                      <hr />
                      <p className='text-primary'>{entrada.descripcion}</p>
                      <hr />
                      <button className='bg-dark text-primary w-100'>Leer Mas</button>
                      <hr />
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>     
        </table>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
}
}
