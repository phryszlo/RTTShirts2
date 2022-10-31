import React from 'react'

import { useCallback, useState } from 'react'
import { Autocomplete, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './Map.css';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

const containerStyle = {
  width: '800px',
  height: '400px',
  margin: '1em auto'
};

const center = {
  lat: 42.34734595935452,
  lng: -71.0606037
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
}



export default Map // React.memo(Map)