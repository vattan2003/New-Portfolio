import Navbar from "./Navbar"
import "./Styles/About.css"
import prof from "./imgs/profile-img.png"
import banner from "./imgs/banner.png"
import { Link, Route } from "react-router-dom"

function About() {
    return (
        <div>
            <Navbar />
            <div class="about" >
                <div class="about-content">
                    <img class="about-content-img" src={banner} alt="profile-img"></img><br></br>
                </div>
                <div class="about-content-para">
                    <h1>Hi ,<br></br></h1>
                    <p>I'm Vattan</p><h6><i class="fa-solid fa-location-dot"></i> Chennai,TamilNadu</h6><br></br>
                    <p style={{paddingBottom:"30px"}}> <i class="fa-solid fa-user-graduate"></i> Equipped with a comprehensive MERN full-stack web development training<br></br>
                        from Error Makes Clever Academy, I've completed an intensive 3-month<br></br>
                        program, building numerous projects that solidified my skills. With<br></br>
                        a passion for crafting dynamic web solutions, I am eager to apply<br></br>
                        my expertise to real-world challenges and collaborate with<br></br>
                        industry professionals to create impactful digital experiences. </p>
                </div>
                {/* code for media */}
                <div style={{ display: "flex", gap: "70px", marginLeft: "40px", marginTop: "30px" ,paddingBottom:"50px"}}>
                    <Link to={"https://www.linkedin.com/in/vattan-web-dev/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: 'black' }}><button><i class="fa-brands fa-linkedin"></i></button></Link>
                    <Link to={"https://github.com/vattan2003"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: 'black' }}><button><i class="fa-brands fa-github"></i></button></Link>
                    <Link to={"https://mail.google.com/mail/u/0/#sent"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' black' }}><button><i class="fa-solid fa-envelope"></i></button></Link>
                </div>
            </div>
        </div>
    )
}
export default About