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
                  onClick={() => window.open('https://br.pinterest.com/aclinicasintegradas/_saved/')}
                />
              </div>
              <div className={styles.btn}>
                <Image
                  width={80}
                  height={80}
                  src="/spotify.png"
                  onClick={() => window.open('https://open.spotify.com/playlist/73a4jtzUiHVosKVlmh1gB7?si=MbNRvzB3SkSmrZCJEOol3w&utm_source=whatsapp')}
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
                  onClick={() => window.open('https://mobile.twitter.com/arqutipos')}
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