import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Punto from './types/punto';

interface MapComponentProps {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  puntos: Punto[]
}

const MapComponent = ({ region, puntos }: MapComponentProps) => {
  const [markerRegion, setMarkerRegion] = useState(region);

  return (
    <MapView
      style={{ width: 450, height: 300 }}
      initialRegion={region}
    >
       {puntos.map((punto) => (
          <Marker
            key={punto.id}
            coordinate={{ latitude: parseFloat(punto.cy), longitude: parseFloat(punto.cx) }}
            title={punto.nombre}
            description={punto.descripcion}
          />
        ))}
    </MapView>
  );
};

export default MapComponent;