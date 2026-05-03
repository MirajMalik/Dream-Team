import logo from '/src/assets/logo.png'
import coinImage from '/src/assets/dollar.png'

function Navbar() {
return (
    <div className="navbar max-w-[1200px] mx-auto bg-base-400 shadow-sm">
        <div className="flex-1">
            <img className="w-[60px] h-[60px] ml-4" src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-1 mr-4 font-bold">
            <span>6000000</span>
            <span>Coin</span>
            <img className='w-[20px] h-[20px]' src={coinImage} alt="coin image" />
        </div>
    </div>
    )
}

export default Navbar










