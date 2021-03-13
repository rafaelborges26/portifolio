//parte onde colocar os componentes fixos, onde não mudam

import '../styles/global.css';
import { ChallengesContext, challengesProvider } from '../contexts/ChallengesContext'


function MyApp({ Component, pageProps }) {

  return (
    <challengesProvider>
  <Component {...pageProps} />
  </challengesProvider>
  )
}

export default MyApp
