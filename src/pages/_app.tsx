//parte onde colocar os componentes fixos, onde não mudam

import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
  <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
