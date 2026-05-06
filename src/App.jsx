import './index.css'
import { ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react';



const fetchPlayers = async () => {
    const res = await fetch('/players.json')
    return res.json()
  };

const playersPromise = fetchPlayers();

function App() {
    const [toggle, setToggle] = useState(true);
    const [availableBalance, setAvailableBalance] = useState(60000000);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [searchPlayer, setSearchPlayer] = useState('');

    const handleButtons = (type) => {
      if(type === "available"){
        setToggle(true)
      }
      else {
        setToggle(false)
      }
    }

    const removePlayer = (playerData) => {
      // console.log(playerData);
      const filteredPlayers = selectedPlayers.filter(p => p.name !== playerData.name);
      setSelectedPlayers(filteredPlayers);
      setAvailableBalance(prev => prev + playerData.priceInTaka)
    }
    

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900'>
      <Navbar availableBalance = {availableBalance} />

      <div className='mt-6 mb-8 max-w-[1200px] mx-auto px-4'>
        <div className='flex items-center justify-between mb-6'>
          <h1 className='font-bold text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>{
              toggle ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`
              }
          </h1>
          <div>
            <button 
              onClick={() => handleButtons("available")} 
              className={`py-2 px-6 font-semibold rounded-l-xl transition-all duration-300 ${toggle === true ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Available
            </button>
            <button 
              onClick={() => handleButtons("selected")} 
              className={`py-2 px-6 font-semibold rounded-r-xl transition-all duration-300 ${toggle === false ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                Selected <span>({selectedPlayers.length})</span>
            </button>
          </div>

        </div>

        {toggle && (
          <div className='mb-6'>
            <input
              type='text'
              placeholder='🔍 Search players by name or country...'
              value={searchPlayer}
              onChange={(e) => setSearchPlayer(e.target.value)}
              className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-800 bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 shadow-sm'
            />
          </div>
        )}
      </div>

      {
        toggle === true ? 
          <Suspense fallback = {<span className="loading loading-spinner text-info flex items-center justify-center mx-auto"></span>}>
            <AvailablePlayers playersPromise = {playersPromise} availableBalance = {availableBalance} setAvailableBalance = {setAvailableBalance} setSelectedPlayers = {setSelectedPlayers} selectedPlayers= {selectedPlayers} searchPlayer={searchPlayer} />
          </Suspense>
         : 
        <SelectedPlayers  
          selectedPlayers={selectedPlayers}
          removePlayer = {removePlayer}
        />
      }


      <ToastContainer />
    </div>
  )
}

export default App
