import React from 'react';
import { useState } from 'react';
import '../styles/Features.css'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import PublicIcon from '@mui/icons-material/Public';
import GroupIcon from '@mui/icons-material/Group'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IssTracker from '../components/IssTracker';

const featuresList = [
    {
        id: 1,
        title: "Rastreamento ISS",
        description: "Acompanhe a Estação Espacial Internacional em tempo real e receba alertas.",
        icon: <SatelliteAltIcon />
    },
    {
        id: 2,
        title: "Guia de Planetas",
        description: "Informações detalhadas sobre todos os planetas do Sistema Solar e luas.",
        icon: <PublicIcon />
    },
    {
        id: 3,
        title: "Comunidade",
        description: "Conecte-se com outros astrônomos amadores e compartilhe descobertas.",
        icon: <GroupIcon />
    },
    {
        id: 4,
        title: "Galeria de Fotos",
        description: "Compartilhe suas astrofotografias e veja capturas incríveis.",
        icon: <PhotoCameraIcon/>
    },
    {
        id: 5,
        title: "Dicas & Tutoriais",
        description: "Aprenda técnicas de observação e configuração de telescópios.",
        icon: <LocationSearchingIcon />
    },
    {
        id: 6,
        title: "Calendário Celestial",
        description: "Nunca perca um evento astronômico, eclipses e chuvas de meteoros.",
        icon: <DarkModeIcon />
    }
]

const Features: React.FC = () => {
    const [visible,setVisible] = useState<boolean>(false)

    return (
        <div id="feature-section" className="feature-container">
            <div className='feature-header-content'>
                <h1> Tudo que voce precisa para <br></br> <b>explorar o cosmos</b> </h1>
                <p>
                    Ferramentas poderosas para observação astronomica, aprendizado e conexão <br></br>
                    com outros entusiastas do universo
                </p>
            </div>
            
            <div className='feature-card-container'>
              {featuresList.map((item) => (
                <div key={item.id} className='feature-card'>
                    <div className='feature-icon-box'>{item.icon}</div>
                    <h1>{item.title}</h1>
                    <p>
                        {item.description}
                    </p>
                </div>
              ))}
            </div>

            <div className='feature-example-feature'>
                <div>
                    <h1>Um exemplo?</h1>
                    <h1>veja onde está a <span> ISS </span> nesse momento</h1>
                    <button onClick={() => setVisible(!visible)}>
                        {visible ? "Ocultar" : "Mostrar"}
                    </button>
                    {visible && <IssTracker />}
                </div>
            </div>
        </div>
    )
}

export default Features