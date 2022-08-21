import { formatearFecha } from "../../helpers"
import Layout from "../../components/Layout"

const EntradaBlog = ({entrada}) => {

    const {titulo, descripcion, published_at} = entrada

  return (
    <Layout>
        <main>
            <div className='bg-primary text-center'>
                <hr />
                <h3 className='text-light'>{titulo}</h3>
                <p className='text-light'>{formatearFecha(published_at)}</p>
                <hr />
                <p className='text-primary'>{descripcion}</p>
                <hr />
            </div>
        </main>
    </Layout>
  )
}

export async function getStaticPaths() {

    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
        params: {
            url: entrada.url
        }
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({params: {url}}) {

    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada: entrada[0]
        }
    }

}

export default EntradaBlog
