import React from 'react'
import './feed.css'
import { Link } from 'react-router-dom'

import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Feed = () => {
  return (
    <div className="feed">

      <Link to="/video/1/4521" className="card">
        <img src={thumbnail1} alt="Mountain lake" />
        <h2>Exploring the Beautiful Mountains and Lake</h2>
        <h3>Travel Vibes</h3>
        <p>100k views • 2 days ago</p>
      </Link>

      <Link to="/video/2/4521" className="card">
        <img src={thumbnail2} alt="Beach cycling" />
        <h2>Beautiful Beach Ride Along the Coast</h2>
        <h3>Travel Vibes</h3>
        <p>85k views • 3 days ago</p>
      </Link>

      <Link to="/video/3/4521" className="card">
        <img src={thumbnail3} alt="Shopping mall" />
        <h2>Exploring One of the Biggest Shopping Malls</h2>
        <h3>Travel Explorer</h3>
        <p>120k views • 5 days ago</p>
      </Link>

      <Link to="/video/4/4521" className="card">
        <img src={thumbnail4} alt="Mountain lake" />
        <h2>Hidden Mountain Lake You Must Visit</h2>
        <h3>Nature World</h3>
        <p>200k views • 1 week ago</p>
      </Link>

      <Link to="/video/5/4521" className="card">
        <img src={thumbnail5} alt="Friends walking" />
        <h2>A Perfect Day Out With Friends</h2>
        <h3>Travel With Us</h3>
        <p>75k views • 1 week ago</p>
      </Link>

      <Link to="/video/6/4521" className="card">
        <img src={thumbnail6} alt="Orange Lamborghini" />
        <h2>Dream Supercar: Lamborghini Aventador</h2>
        <h3>Auto World</h3>
        <p>150k views • 2 weeks ago</p>
      </Link>

      <Link to="/video/7/4521" className="card">
        <img src={thumbnail7} alt="DCU University" />
        <h2>Inside DCU University Campus</h2>
        <h3>Campus Tours</h3>
        <p>95k views • 2 weeks ago</p>
      </Link>

      <Link to="/video/8/4521" className="card">
        <img src={thumbnail8} alt="Yellow Lamborghini" />
        <h2>Yellow Lamborghini: A Stunning Supercar</h2>
        <h3>Auto World</h3>
        <p>60k views • 3 weeks ago</p>
      </Link>

      <Link to="/video/9/4521" className="card">
        <img src={thumbnail1} alt="Mountain lake" />
        <h2>Top Mountain Destinations You Should Visit</h2>
        <h3>Travel Vibes</h3>
        <p>110k views • 3 weeks ago</p>
      </Link>

      <Link to="/video/10/4521" className="card">
        <img src={thumbnail2} alt="Beach cycling" />
        <h2>Best Coastal Cycling Routes</h2>
        <h3>Adventure Life</h3>
        <p>90k views • 1 month ago</p>
      </Link>

      <Link to="/video/11/4521" className="card">
        <img src={thumbnail3} alt="Shopping mall" />
        <h2>A Day of Shopping and Exploring</h2>
        <h3>Travel Explorer</h3>
        <p>130k views • 1 month ago</p>
      </Link>

      <Link to="/video/12/4521" className="card">
        <img src={thumbnail4} alt="Mountain lake" />
        <h2>Beautiful Places Around the Mountains</h2>
        <h3>Nature World</h3>
        <p>180k views • 1 month ago</p>
      </Link>

      <Link to="/video/13/4521" className="card">
        <img src={thumbnail5} alt="Friends walking" />
        <h2>Walking Around the City With Friends</h2>
        <h3>Travel With Us</h3>
        <p>105k views • 1 month ago</p>
      </Link>

      <Link to="/video/14/4521" className="card">
        <img src={thumbnail6} alt="Orange Lamborghini" />
        <h2>Top Luxury Sports Cars</h2>
        <h3>Auto World</h3>
        <p>160k views • 1 month ago</p>
      </Link>

      <Link to="/video/15/4521" className="card">
        <img src={thumbnail7} alt="DCU University" />
        <h2>Exploring the DCU Campus</h2>
        <h3>Campus Tours</h3>
        <p>80k views • 2 months ago</p>
      </Link>

      <Link to="/video/16/4521" className="card">
        <img src={thumbnail8} alt="Yellow Lamborghini" />
        <h2>Lamborghini Huracan: Ultimate Driving Experience</h2>
        <h3>Supercar Central</h3>
        <p>180k views • 2 months ago</p>
      </Link>

    </div>
  )
}

export default Feed