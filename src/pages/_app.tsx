import '../styles/global.css';
import { RepositoryProvider } from '../contexts/RepositoryContext'


function MyApp({ Component, pageProps }) {

  return ( 
        <RepositoryProvider>
        <Component {...pageProps} />
        </RepositoryProvider>
  )
}

export default MyApp
