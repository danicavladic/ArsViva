import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import LocationPin from './LocationPin'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Studio: <h3 className="map-h3">Pete Poljanice 10, 10 040 Zagreb</h3></h2>
      <div className="map-container">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
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
      </div>
    </div>
  )
  export default Map;