import Logo from "../assets/SpaceX.svg"
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <div id="nav">
         <div className="navitems">
        <div className="navlogo">
            <img src={Logo} alt="" />
        </div>
        <div className="links">
            
            <a href="/">Falcon 9</a>
            <a href="/">Falcon Heavy</a>
            <a href="/">Dragon</a>
            <a href="/">Starship</a>
            <a href="/">StarLink</a>
            <a href="/">Starshield</a>
        </div>

        <div className="navright">
            <a href="/">Shop</a>
            <BiMenuAltRight />
        </div>
        </div>
    </div>
  )
}

export default Navbar