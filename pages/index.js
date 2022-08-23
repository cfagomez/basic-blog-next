import Layout from '../components/Layout'
import ListadoEntradas from '../components/ListadoEntradas'

export default function Home({entradas}) {

  return (
    <Layout>
      <main>
        <table className='center'>
          <tbody>
            <ListadoEntradas 
              entradas={entradas}
            />
          </tbody> 
        </table>
      </main>
      <hr />
    </Layout>
  )
}

export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs?_limit=3`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
      props: {
          entradas
      }
  }

}
