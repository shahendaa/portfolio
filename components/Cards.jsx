import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export  class Cards extends Component {
  render() {
    return (
      <div className='header1'>
        <header >
          <h1 className='word'>Simple and Elegant</h1>
          <span className='Myname'>Shahenda Mohammed</span>
      <h2 className='word2'>web developer</h2>
      
      <div id="wordContainer" className='initial_color'>FRONT END DEVELOPER</div> 
      <p className='p1'>Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Voluptas laboriosam, eius iure neque numquam corrupti ut amet possimus quas perferendis autem</p>
 
 <button className='btnlinkk'>
 <a class="icon-link icon-link-hover" className='a1'  href="#">
 Get started
 
</a>
 </button>
   
 <div>
      <h3>How to use font-awesome in react</h3>
      <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>

        </header>
      </div>
    )
  }
}

