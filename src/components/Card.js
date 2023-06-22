import React from 'react'
import '../css/Card.css'
import vision from '../Assets/vision.png'
export default function Navbar() {
  return (
    <div>

        <div className='cards'>

            <div className='card'>
                <img src={vision}/>

                <h3 className='heading'>
                    DELIVER
                </h3>
                   <div className='border'></div>


                <p className='cardDescription'>We deliver exceptional branding and stay in touch with our customers with every order. If you have any inquiries regarding any of our products, get in touch with us. We eventually succeed when we correctly prioritize the needs and preferences of our clients.</p>
            </div>

            <div className='card'>
            <img src={vision}/>

                <h3 className='heading'>
                TEAM
                </h3>
                <div className='border'></div>

                <p className='cardDescription'>We deliver exceptional branding and stay in touch with our customers with every order. If you have any inquiries regarding any of our products, get in touch with us. We eventually succeed when we correctly prioritize the needs and preferences of our clients.</p>
            </div>


            <div className='card'>
            <img src={vision}/>

                <h3 className='heading'>
                    VALUE
                </h3>
                <div className='border'></div>


                <p className='cardDescription'>We deliver exceptional branding and stay in touch with our customers with every order. If you have any inquiries regarding any of our products, get in touch with us. We eventually succeed when we correctly prioritize the needs and preferences of our clients.</p>
            </div>
        </div>
      
    </div>
  )
}
