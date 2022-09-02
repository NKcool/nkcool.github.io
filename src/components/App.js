
import React from 'react'
import videoBg from '../assets/vd.mp4'
const Main = () => {
  return (
    <div className='main'>

      <video src={videoBg} autoPlay loop muted />
      <div id="main-nav" className="nav" >
        <a class="custom-logo-link alt" rel="home">
          <img width="665" height="180"
            src="https://res.cloudinary.com/storemaven/image/upload/q_90/f_auto/v1588531996/Storemaven-full-logo-light.svg"
            className="img-fluid" alt="Storemaven Logo" />
        </a>
        <ul>
          <li>product</li>
          <li>services</li>
          <li>Sollutions</li>
          <li>ASO academy</li>
          <li>ISO 15hub</li>
          <li>Company</li>
          <li>Clients</li>
          <li>Careers</li>
        </ul>
        <div className="login">
          <div className="btn1 btn">LOG IN</div>
          <div className="btn2 btn">See it live</div>
          <div class="menu">
            </div>
        </div>
      </div>
      <div className="text">
        <h1>Get more installs with highly converting app store product pages</h1>
        <p id="stop">Stop losing traffic and show the right message to your audiences. A/B test icons, screenshots, and videos on the App Store and Google Play.</p>
        <div className="email">
            <p>Work email</p>
            <div className="btn3 btn">See it live</div>
        </div>
    </div>
    </div>
  )
}

export default Main