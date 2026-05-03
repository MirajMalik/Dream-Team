import './index.css'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react';



const fetchPlayers = async () => {
    const res = await fetch('/players.json')
    return res.json()
  };

function App() {
    const [toggle, setToggle] = useState(true);

    const handleButtons = (type) => {
      if(type === "available"){
        setToggle(true)
      }
      else {
        setToggle(false)
      }
    }
    const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar />

      <div className='flex items-center justify-between mt-3 mb-5 max-w-[1200px] mx-auto'>
        <h1 className='font bold text-2xl'>Available Players</h1>
        <div>
          <button 
            onClick={() => handleButtons("available")} 
            className={`py-2 px-5  border-2 rounded-l-2xl border-r-0 ${toggle === true ? "bg-slate-900" : ""}`}>
              Available
          </button>
          <button 
            onClick={() => handleButtons("selected")} 
            className={`py-2 px-5  border-2 rounded-r-2xl border-l-0 ${toggle === false ? "bg-slate-900" : ""}`}>
              Selected <span>(0)</span>
          </button>
        </div>

      </div>

      {
        toggle === true ? 
          <Suspense fallback = {<span className="loading loading-spinner text-info flex items-center justify-center mx-auto"></span>}>
            <AvailablePlayers playersPromise = {playersPromise} />
          </Suspense>
         : 
         <SelectedPlayers />
      }

      
         
    </>
    
  )
}

export default App
