import "./Styles/Nav.css"
import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom"
import project from "./imgs/prj.png"

function Navbar() {
    return (
        <div>
            <nav id="navbar" className="mt-10">
                <ul>
                    <Link to={"/"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: 'black' }} > <button class="nav">home</button></Link>
                    <Link to={"/about"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' black' }} > <button class="nav">about</button></Link>
                    <Link to={"/skills"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' black' }} ><button class="nav">skills</button></Link>
                    <Link to={"/projects"} style={{ textDecoration: 'none', border: 'none', outline: 'none', backgroundColor: ' black' }} ><button class="nav">projects</button></Link>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar