import "./Styles/Skills.css"
import Navbar from "./Navbar"
import html from "./imgs/html.jpg"
import css from "./imgs/css.jpg"
import js from "./imgs/js.webp"
import react from "./imgs/react.jpg"
import tailwind from "./imgs/tail.webp"
import github from "./imgs/git.jpg"
import node from "./imgs/node.webp"
import mongo from "./imgs/mongo.webp"
import nextjs from "./imgs/nextjs.png"

function Skills() {
    return (
        <sec>
            <Navbar/>
            <section id="sec1" className=" flex">
                <skill class="row1">
                    <img class="img" src={html}
                        alt=""></img>
                </skill>
                <skill class="row1">
                    <img class="img" src={css}
                        alt=""></img>
                </skill>
                <skill class="row1">
                    <img class="img" src={js}
                        alt=""></img>
                </skill>
            </section>
            <section id="sec2" className=" flex">
                <skill class="row1">
                    <img class="img" src={react}
                        alt=""></img>
                </skill>
                <skill class="row1">
                    <img class="img" src={tailwind}
                        alt=""></img>
                </skill>
                <skill class="row1">
                    <img class="img" src={github}
                        alt=""></img>
                </skill>
            </section>
            <section id="sec3" className=" flex">
                <skill class="row1">
                    <img class="img" src={node}
                        alt=""></img>
                </skill>
                <skill class="row1">
                    <img class="img" src={mongo}
                        alt=""></img>
                </skill>
                <skill class="row1">
                    <img  style={{height:"150px",width:"400px"}} class="img" src={nextjs}
                        alt=""></img>
                </skill>
            </section>
        </sec>
    )
}
export default Skills