import Image from 'next/image'
import Head from 'next/head';

import styles from './styles.module.scss'

function Social() {
  return (
    <>
      <Head>
        <title>Arquétipos</title>
      </Head>
      <div className={styles.navigationpage}>
        <div className={styles.navigationContainer}>
          <Image
            width={120}
            height={120}
            src="/logo-bottomless.png"
          />

          <span>@arquetiposclinicas</span>

          <div className={styles.groupContent}>
            <div className={styles.row}>
              <div
                className={styles.btn}
                onClick={() => window.open('https://www.instagram.com/arquetiposclinica/')}
              >
                <Image
                  width={80}
                  height={80}
                  src="/instagram.png"
                />
              </div>
              <div
                className={styles.btn}
                onClick={() => window.open('https://www.facebook.com/Arqu%C3%A9tipos-Cl%C3%ADnicas-Integrada-103994288402659/')}
              >
                <Image
                  width={80}
                  height={80}
                  src="/facebook.png"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.btn}>
                <Image
                  width={80}
                  height={80}
                  src="/pinterest.svg"
                />
              </div>
              <div className={styles.btn}>
                <Image
                  width={80}
                  height={80}
                  src="/spotify.png"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.btn}>
                <Image
                  width={80}
                  height={80}
                  src="/youtube.png"
                />
              </div>
              <div className={styles.btn}>
                <Image
                  width={80}
                  height={80}
                  src="/twitter.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Social;