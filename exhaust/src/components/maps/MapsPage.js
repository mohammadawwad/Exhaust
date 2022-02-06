import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 102,
  lng: 49
};

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBiU1CmuHPMXUXvTpkP7wNs8WkVuu1yap8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>

      <div style={{marginBottom: "30px"}}></div>
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

      <div style={{marginTop: "25px"}}>
        <img src={require("./route.png")} style={{width: "45%", marginLeft: "2.5%", marginRight: "2.5%"}}  alt="Plant" class="plant"/>
        <img src={require("./markets.png")} style={{width: "45%", marginLeft: "2.5%", marginRight: "2.5%"}}  alt="Plant" class="plant"/>
      </div>
    </>
  ) : <></>
}

export default React.memo(MapPage)