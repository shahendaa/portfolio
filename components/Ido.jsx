import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptop } from '@fortawesome/free-solid-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons'
export class Ido extends Component {
  render() {
    return (
      <div className='cardss' >
        <div className='div11'><h1>WHAT I DO</h1></div>
      <div className='main'>

      <div>
       <FontAwesomeIcon className='i1' icon={faLaptop} />
       <h3 >Responsive Mobile</h3>
       <p>Shahenda CSS Template is designed by templatemo. Download, edit and use this layout</p>
        </div>
      
       <div>
       <FontAwesomeIcon className='i1' icon={faLink} />
        <h3>	
        CSS Templates</h3>
        <p>We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.</p>
       </div>

       <div>
       <FontAwesomeIcon  className='i1'  icon={faLocationArrow} />
        <h3>	
        UI & UX Design</h3>
        <p>	

Credits go to Pixabay and Unsplash for images used in this free CSS website template.</p>
       </div>





      </div>
      
      </div>
    )
  }
}
