import "./index.scss"
import LogoF from "../../../assets/images/logo1-no-background.png"
import {useRef} from 'react';

const Logo = () => {
    const bgRef = useRef();
    const solidLogo = useRef()

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogo} className="solid-logo" src={LogoF} alt="f"></img>
        </div>
    )
}

export default Logo