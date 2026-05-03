import './index.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import { Suspense } from 'react';



const fetchPlayers = async () => {
    const res = await fetch('/players.json')
    return res.json()
  };

function App() {
  
    const playersPromise = fetchPlayers();


  return (
    <>
         <Navbar />
         <Suspense fallback = {<span className="loading loading-spinner text-info"></span>}>
            <AvailablePlayers playersPromise = {playersPromise} />
         </Suspense>
         
    </>
    
  )
}

export default App
