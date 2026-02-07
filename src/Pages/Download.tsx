import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import StarIcon from '@mui/icons-material/Star';
import '../styles/Download.css'

function Download() {
    return (
        <div className="download-container">

            <div className="download-icon">
                <SmartphoneIcon sx={{fontSize: 60}}/>
            </div>

            <div className='download-text'>
               <h1>Baixe Agora</h1>
               <p>
                  Comece sua jornada pelo Universo. Disponivel gratuitamente para <br />Android e IOS.
               </p>
            </div>

            <div className='download-card-container'>
                <div className='download-cards'>
                    <AndroidIcon sx={{color: '#000', fontSize: 38}} />
                    
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h2>Em breve, na </h2>
                        <span>Google Play</span>
                    </div>
                </div>

                <div className='download-cards'>
                    <AppleIcon sx={{color: '#000', fontSize: 38}}/>

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h2>Em breve, na </h2>
                        <span>App Store</span>
                    </div>
                </div>
            </div>

            <div className='download-downloads-number'>
                <StarIcon sx={{fontSize: 20, color: '#FFD700'}}/>
                <h2>Mais de 10.000 downloads</h2>
            </div>
        </div>
    )
}

export default Download