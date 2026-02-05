import React from "react"
import { MapContainer, TileLayer, Marker, useMap} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

interface MapsProps {
    lat: number,
    lng: number
    visibility: string
}

const RecenterMap = ({lat, lng}: {lat: number, lng: number}) => {
    const map = useMap()
    map.setView([lat, lng], map.getZoom())
    return null
}

const Maps: React.FC<MapsProps> = ({lat, lng, visibility}) => {
    const position: L.LatLngExpression = [lat, lng];
    const mapURL = visibility === 'daylight'
       ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"

    return (
        <div style={{ height: '400px', width: '100%', border: '2px solid blue' }}>
            <MapContainer 
                center={position} 
                zoom={3} 
                style={{ height: '100%', width: '100%' }}
            >
               <TileLayer url={mapURL}/>
              <Marker position={position} />
              <RecenterMap lat={lat} lng={lng} />
            </MapContainer>
        </div>
    )
}

export default Maps