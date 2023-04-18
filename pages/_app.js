import Layout from '@/components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component{...pageProps}/>)
  }
  return (
  <>
  <Layout>
      <Component {...pageProps} />
  </Layout>
  </>
  )
}
