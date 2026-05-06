import logo from '/src/assets/logo.png'
import coinImage from '/src/assets/dollar.png'

function Navbar({ availableBalance }) {
return (
    <div className="navbar max-w-[1200px] mx-auto bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg rounded-b-2xl border-b-2 border-indigo-500/20">
        <div className="flex-1">
            <img className="w-[60px] h-[60px] ml-4" src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-2 mr-4 font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2 rounded-xl shadow-md">
            <span>{availableBalance.toLocaleString()}</span>
            <span>Coin</span>
            <img className='w-[20px] h-[20px]' src={coinImage} alt="coin image" />
        </div>
    </div>
    )
}

export default Navbar










