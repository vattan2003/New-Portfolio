import "./Styles/Home.css"
import Navbar from "./Navbar"
import prof from "./imgs/profile-img.png"
import mern from "./imgs/mern.jpg"

function Home() {
    return (
        <div id="total-home">
            <Navbar />
            <div class="home">
                <div class="home-content">
                    <img class="home-content-img" src={prof} alt="profil-pic"></img>
                </div>
                <div class="home-content-para" >
                    <h1>Welcome ,<br></br></h1>
                    <br></br>
                    <h2 id="h2">VATTAN K </h2>
                 <div className="flex"style={{alignItems:"center"}}><img src={mern} style={{width:"80px",marginBottom:"",height:"70px"}}></img><p> Developer</p></div> 
                </div>
            </div>
        </div>
    )
}
export default Home