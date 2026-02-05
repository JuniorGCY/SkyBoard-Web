import axios from "axios";
import React, { useState, useEffect } from "react";
import '../styles/IssTracker.css'
import Maps from "./Maps";

interface IssData {
    name: string,
    latitude: number,
    longitude: number,
    altitude: number,
    velocity: number,
    visibility: string
}

const IssTracker: React.FC = () => {
    const [data,setData] = useState <IssData | null> (null)
    const [loading, setLoading] = useState<boolean> (true)

    const IssLocation = async () => {
        try {
            const response = await axios.get<IssData>('https://api.wheretheiss.at/v1/satellites/25544')
            setData(response.data)
            setLoading(false)
        } catch (erro) {
            console.log('Deu erro ai chefe', erro)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        IssLocation()
    
        const interval = setInterval(IssLocation, 5000)
        return () => clearInterval(interval)
    }, [])

    if (loading && !data) return <p>Rastreando ISS....</p>

    return (
        <div className="IssTracker-container">
            {data && (
              <>
                <Maps lat={data.latitude} lng={data.longitude} visibility={data.visibility} />
                <div className="IssTracker-informations">
                    <p>Latitude: {data.latitude.toFixed(4)}</p>
                    <p>Longitude: {data.longitude.toFixed(4)}</p>
                    <p>Velocidade: {Math.round(data.velocity)} km/h</p>
                    <p>Altitude: {data.altitude.toFixed(1)} km</p>
                    <p>Visibilidade: {data.visibility === 'daylight' ? 'Dia' : 'Noite'}</p>
                </div>
              </>
            )}
        </div>
    )
}

export default IssTracker