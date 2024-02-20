import { Link, Route } from "react-router-dom"
import "./Styles/Projects.css"
import Navbar from "./Navbar"
import greeden from "./imgs/greeden.webp"
import udemy from "./imgs/udemy.png"
import reestar from "./imgs/reestar.png"
import todo from "./imgs/todo banner.avif"
import weather from "./imgs/weather.png"

function Projects() {
    return (
        <div>
            <Navbar />
           
            <center>
                <div id="prjts">
            <img  class="prj-img" src={todo} style={{ width: "50%", height: '300px',marginTop:"20px" }}></img>
                <Link to={"https://actodo-app.vercel.app/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' #0d0d0e' }} ><button>Tap to Visit <i class="fa-solid fa-hand-point-right fa-rotate-270"></i></button></Link>
                <img  class="prj-img" src={weather} style={{ width: "50%", height: '300px',marginTop:"20px" }}></img>
                <Link to={"https://weather-app-ruby-psi.vercel.app/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' #0d0d0e' }} ><button>Tap to Visit <i class="fa-solid fa-hand-point-right fa-rotate-270"></i></button></Link>
                <img  class="prj-img" src={reestar} style={{ width: "50%", height: '300px',marginTop:"20px" }}></img>
                <Link to={"https://reestar.vercel.app/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' #0d0d0e' }} ><button>Tap to Visit <i class="fa-solid fa-hand-point-right fa-rotate-270"></i></button></Link>
               
                <img class="prj-img" src={greeden} style={{ width: "50%", height: '300px' }}></img>
                <Link to={"https://greeden-react.vercel.app/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' #0d0d0e' }} ><button>Tap to Visit <i class="fa-solid fa-hand-point-right fa-rotate-270"></i></button></Link>
                <img  class="prj-img" src={udemy} style={{ width: "50%", height: '300px',marginTop:"20px" }}></img>
                <Link to={"https://udemy-clone-beige.vercel.app/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' #0d0d0e' }} ><button>Tap to Visit <i class="fa-solid fa-hand-point-right fa-rotate-270"></i></button></Link>
               </div>
                </center>
                
        </div>
    )
}
export default Projects