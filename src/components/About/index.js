import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Eos earum harum et esse voluptatum sit
          voluptatem ipsum qui sunt officia aut sint voluptas et reiciendis
          quas. Ad voluptatibus enim qui excepturi molestiae qui quia assumenda.
        </p>
        <p>
          Aut consequatur praesentium ut ipsum laboriosam et galisum eligendi
          eos repudiandae recusandae quo libero iste non cumque laborum 33
          obcaecati error. Et doloremque labore cum quod officia non odit quis
          eum modi eligendi qui rerum quae cum accusantium odio.
        </p>
        <p>
          Aut aspernatur quam quo repellat itaque vel earum voluptatibus rem
          laudantium dolor quo magnam recusandae. Eos esse nostrum et vitae
          repellendus id explicabo ratione aut amet neque sit amet maiores? Eos
          amet voluptas 33 odit cumque nam modi quia aut molestiae dolor et
          harum enim!
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031'></FontAwesomeIcon>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529'></FontAwesomeIcon>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'></FontAwesomeIcon>
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'></FontAwesomeIcon>
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'></FontAwesomeIcon>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'></FontAwesomeIcon>
            </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"></Loader>
    </>
  )
}

export default About