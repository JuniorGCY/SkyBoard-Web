import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Link from '@mui/material/Link';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className='footer-logo'>
                <RocketLaunchIcon sx={{color: '#FFD700'}}/>
                <h2>Sky<b>Board</b></h2>
            </div>

            <div className='footer-links'>
                <Link href="#" underline="hover" sx={{color: '#ccc'}}>Termos de Uso</Link>
                <Link href="#" underline="hover" sx={{color: '#ccc'}}>Privacidade</Link>
                <Link href="mailto:ejunior.mobiledev@gmail.com?subject=Contato%20via%20SkyBoard%20Web" underline="hover" sx={{color: '#ccc'}}>Contato</Link>
            </div>

            <div className='footer-copyrights'>
                <h2>© 2025 CosmosApp. Todos os direitos reservados.</h2>
            </div>
        </div>
    )
}

export default Footer