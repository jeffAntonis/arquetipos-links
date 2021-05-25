import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/hospital-marker";

import styles from './styles.module.scss'

export function Map({ location, zoomLevel }: any) {
  const LocationPin = ({ text }: any) => (
    <div className="pin">
      <Icon icon={locationIcon} width={30} color="#1f4708" />
      <p style={{ color: '#1f4708' }}>{text}</p>
    </div>
  );

  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}