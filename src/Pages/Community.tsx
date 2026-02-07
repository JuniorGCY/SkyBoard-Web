import '../styles/Community.css'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const feedbackList = [
    {
        id: 1,
        icon: <SatelliteAltIcon />,
        feedback: "Finalmente um app para fazer varias coisas em um só lugar.",
        userName: "Ana",
        userCategory: 'Astronomo Amador'
    },
    {
        id: 2,
        icon: <SatelliteAltIcon />,
        feedback: "Precisa de algumas melhorias, mas já está ótimo!",
        userName: "Andressa",
        userCategory: 'Astrofotógrafo'
    },
    {
        id: 3,
        icon: <SatelliteAltIcon />,
        feedback: "Uma comunidade bem unida e que ajuda iniciantes, muito necessario!",
        userName: "Pedro",
        userCategory: 'Astrofotógrafo'
    },
    {
        id: 4,
        icon: <SatelliteAltIcon />,
        feedback: "Eu simplesmente nao perdi mais nenhum evento da Astronomia, perfeito!",
        userName: "SabeTudo",
        userCategory: 'Astrofisico'
    },
    {
        id: 5,
        icon: <SatelliteAltIcon />,
        feedback: "As vezes nao é tao preciso, mas, ainda sim é um app que ajuda muito",
        userName: "Gabriel",
        userCategory: 'Astrofisico'
    },
    {
        id: 6,
        icon: <SatelliteAltIcon />,
        feedback: "Meu filho simplesmente amou! ele ama astronomia e viciou nesse app",
        userName: "Joel",
        userCategory: 'Fotografo perdido'
    },

]

const analitcsList = [
    {
        id: 1,
        icon2: <SentimentSatisfiedAltIcon />,
        resultNumber: 10,
        resultCategory: "Usuarios Ativos"
    },
    {
        id: 2,
        icon2: <FavoriteBorderIcon />,
        resultNumber: 50,
        resultCategory: "Fotos Compartilhadas"
    },
    {
        id: 3,
        icon2: <ChatBubbleOutlineIcon />,
        resultNumber: 25,
        resultCategory: "Discussões"
    },
    {
        id: 4,
        icon2: <StarBorderIcon />,
        resultNumber: 4.9,
        resultCategory: "Avaliação Média"
    }
]

function Community()  {
    return (
        <div className="community-container">

            <div className='community-header'>
               <h1 style={{color: ' #FFD700'}}>Comunidade</h1>
               <h2>Junte-se a milhares de <br /></h2>
               <h2>exploradores de cosmos</h2>
            </div>

            <div className='community-container-card'>
                {feedbackList.map((item) => (
                    <div key={item.id} className='community-cards'>
                        <div className='community-icon-box'>{item.icon}</div>
                        <p>{item.feedback}</p>
                        <h2>{item.userName}</h2>
                        <p>{item.userCategory}</p>
                    </div>
                ))}
            </div>

            <div className='community-analitcs-card'>
                {analitcsList.map((item) => (
                    <div key={item.id} className='community-result-card'>
                        <div className='community-icon-box-2'>{item.icon2}</div>
                        <h1>{item.resultNumber}K+</h1>
                        <p>{item.resultCategory}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Community