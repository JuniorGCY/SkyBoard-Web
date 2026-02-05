import './App.css'
import Hero from "./Pages/Hero"
import Features from './Pages/Features'
import Community from './Pages/Community'
import Download from './Pages/Download'
import Footer from './Pages/Footer'

function App() {
  return (
    <div>
      <div className='stars'></div>
      <div className='stars2'></div>
      <Hero />
      <Features />
      <Community />
      <Download />
      <Footer />

      
    </div>
  )
}

export default App