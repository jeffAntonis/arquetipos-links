import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { loadEnvConfig } from '@next/env'

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
  
  return (
    <div className={styles.wrapper}>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
export default MyApp
