import Image from 'next/image'
import Head from 'next/head';
import { useRouter } from 'next/router'

import { Button } from '../components/Button'

import styles from './home.module.scss'

function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Arquétipos</title>
      </Head>
      <div className={styles.homepage}>
        <div className={styles.homeContainer}>
          <Image
            width={120}
            height={120}
            src="/logo-bottomless.png"
          />

          <span>@arquetiposclinicas</span>

          <div className={styles.groupContent}>
            {/* <Button 
            text="- INSTAGRAM - Clínica Arquétipos"
            onClick={() => window.open('https://www.instagram.com/arquetiposclinica/')}
          />
          <Button 
            text="- FACEBOOK - Clínica Arquétipos" 
            onClick={() => window.open('https://www.facebook.com/Arqu%C3%A9tipos-Cl%C3%ADnicas-Integrada-103994288402659/')}
          /> */}
            <Button
              text="- Redes Sociais"
              onClick={() => router.push('/social')}
            />
            <Button
              text="- SITE - Clínica Arquétipos"
            />
            <Button
              text="- Agendamento de Consulta"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5561985456045&text=Ol%C3%A1,%20gostaria%20de%20marcar%20uma%20consulta')}
            />
            <Button
              text="- Localização"
              onClick={() => router.push('/localization')}
            />
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

export default Home;