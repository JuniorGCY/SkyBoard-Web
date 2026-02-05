import '../styles/Hero.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Hero() {
    return (
        <div className='hero-container'>
            <h2><RocketLaunchIcon />  Explore o Universo</h2>
            <h1>Sky<b>Board</b></h1>
            
            <p>
                Seu portal para o cosmos. Monitore a ISS em tempo real,<br></br>
                explore planetas e conecte-se com a comunidade de<br></br>
                astronomos amadores.
            </p>

            <a href='#feature-section'>
                <button >
                    Descobrir Mais
                </button>
            </a>

        </div>
    )
}

export default Hero