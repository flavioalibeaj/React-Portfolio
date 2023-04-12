import "./index.scss"
import LogoTitle from "../../assets/images/logo1-no-background.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = ["l", "a", "v", "i", "o"]
    const jobArray = ["W", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass("text-animate-hover")
    //     }, 4000)
    // }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 4000);
        return () => clearTimeout(timeoutId);
      }, []);
      

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I,</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArr={nameArray} index={15}></AnimatedLetters>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArr={jobArray} index={20}></AnimatedLetters>
                </h1>
                <h2>Frontend Developer / Javascript</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home