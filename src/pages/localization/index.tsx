import Image from 'next/image'

import { Map } from '../../components/Map'

import styles from './styles.module.scss'

export default function Localization() {

  const location = {
    address: 'Centro Clinico Sudoeste',
    lat: -15.80212130262634,
    lng: -47.93234511420409,
  }

  return (
    <div className={styles.navigationpage}>
      <div className={styles.navigationContainer}>
        <Image
          width={120}
          height={120}
          src="https://d1fdloi71mui9q.cloudfront.net/4fKS7RMcSeSvWujD4Ctl_cZViHheoEdw2lH9e" 
        />
    
        <span>@arquetiposclinicas</span>

        <div className={styles.groupContainer}>
          <Map location={location} zoomLevel={17} />
          <div className={styles.groupContent}>
            <span>
              Lembrando que nossos atendimentos são somente por horário pré agendado / vagas são limitadas.
            </span>
            
            <span><strong>Telefone:</strong> (61) 3548-4881</span>
            <span><strong>WhatsApp:</strong> (61) 98545-6045</span>
            <span>Centro Clinico Sudoeste, Sala 251, Ao lado do HFA</span>

            <div className={styles.iconsContent}>
              <div 
                className={styles.btnIcon}
                onClick={() => window.open('https://waze.com/ul/h6vjyj726v')}
              >
                <Image src="/waze.png" width={40} height={40} />
                <span>Waze</span>
              </div>

              <div 
                className={styles.btnIcon}
                onClick={() => window.open('https://maps.google.com/maps/search/Centro%20Cl%C3%ADnico%20Sudoeste/@-15.80212130262634,-47.93234511420409,17z?hl=en')}
              >
                <Image src="/maps-icon.svg" width={40} height={40} />
                <span>Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {  
  return {
    props: {},
  }
}