import React from "react"
import { MapContainer, TileLayer, Marker, useMap} from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
        <div style={{ height: '400px', width: '100%', border: '1px solid #ccc' }}>
            <MapContainer 
                center={position} 
                zoom={3} 
                style={{ height: '100%', width: '100%' }}
            >
               <TileLayer 
                  key={mapURL}
                  url={mapURL}/>
              <Marker position={position} />
              <RecenterMap lat={lat} lng={lng} />
            </MapContainer>
        </div>
    )
}

export default Maps