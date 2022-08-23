import React from 'react'
import Layout from '../components/Layout'
import ListadoEntradas from '../components/ListadoEntradas'

const blog = ({entradas}) => {

  console.log(entradas)

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
    </Layout>
  )
}

export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs/`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }

}

export default blog
