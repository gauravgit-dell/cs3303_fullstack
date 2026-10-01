import React from 'react'
import './recommended.css'

import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Recommended = () => {
  return (
    <div className="recommended">

      <div className="side-video-list">
        <img src={thumbnail1} alt="lake" />

        <div className="vid-info">
          <h4>Exploring the Beautiful Mountains and Lake</h4>
          <p>Travel Vibes</p>
          <p>100k views • 2 days ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail2} alt="beach cycling" />

        <div className="vid-info">
          <h4>Beautiful Beach Ride Along the Coast</h4>
          <p>Travel Vibes</p>
          <p>85k views • 3 days ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail3} alt="shopping mall" />

        <div className="vid-info">
          <h4>Exploring One of the Biggest Shopping Malls</h4>
          <p>Travel Explorer</p>
          <p>120k views • 5 days ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail4} alt="mountain lake" />

        <div className="vid-info">
          <h4>Hidden Mountain Lake You Must Visit</h4>
          <p>Nature World</p>
          <p>200k views • 1 week ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail5} alt="friends walking" />

        <div className="vid-info">
          <h4>A Perfect Day Out With Friends</h4>
          <p>Travel With Us</p>
          <p>75k views • 1 week ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail6} alt="orange sports car" />

        <div className="vid-info">
          <h4>Dream Supercar: Lamborghini Aventador</h4>
          <p>Auto World</p>
          <p>150k views • 2 weeks ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail7} alt="university campus" />

        <div className="vid-info">
          <h4>Inside DCU University Campus</h4>
          <p>Campus Tours</p>
          <p>95k views • 2 weeks ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail8} alt="yellow sports car" />

        <div className="vid-info">
          <h4>Yellow Lamborghini: A Stunning Supercar</h4>
          <p>Auto World</p>
          <p>60k views • 3 weeks ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail1} alt="mountain lake" />

        <div className="vid-info">
          <h4>Top Mountain Destinations You Should Visit</h4>
          <p>Travel Vibes</p>
          <p>110k views • 3 weeks ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail2} alt="beach cycling" />

        <div className="vid-info">
          <h4>Best Coastal Cycling Routes</h4>
          <p>Adventure Life</p>
          <p>90k views • 1 month ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail6} alt="orange sports car" />

        <div className="vid-info">
          <h4>Top 10 Luxury Cars You Need to See</h4>
          <p>Auto World</p>
          <p>130k views • 1 month ago</p>
        </div>
      </div>


      <div className="side-video-list">
        <img src={thumbnail8} alt="yellow sports car" />

        <div className="vid-info">
          <h4>Lamborghini Huracan: Ultimate Driving Experience</h4>
          <p>Supercar Central</p>
          <p>180k views • 1 month ago</p>
        </div>
      </div>

    </div>
  )
}

export default Recommended