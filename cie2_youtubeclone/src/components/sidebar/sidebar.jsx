import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

import home from '../../assets/home.png'
import sports from '../../assets/sports.png'
import automobiles from '../../assets/automobiles.png'
import technology from '../../assets/tech.png'
import entertainment from '../../assets/entertainment.png'
import music from '../../assets/music.png'
import news from '../../assets/news.png'
import blogs from '../../assets/blogs.png'

import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({ sidebarOpen, category, setCategory }) => {

    return (
        <div className={sidebarOpen ? 'sidebar' : 'small-sidebar'}>

            <div className="shortcut-links">

                <Link
                    to="/"
                    className={`side-link ${category === 0 ? 'active' : ''}`}
                    onClick={() => setCategory(0)}
                >
                    <img src={home} alt="Home" />
                    <p>Home</p>
                </Link>


                <div
                    className={`side-link ${category === 1 ? 'active' : ''}`}
                    onClick={() => setCategory(1)}
                >
                    <img src={sports} alt="Sports" />
                    <p>Sports</p>
                </div>


                <div
                    className={`side-link ${category === 2 ? 'active' : ''}`}
                    onClick={() => setCategory(2)}
                >
                    <img src={automobiles} alt="Automobiles" />
                    <p>Automobiles</p>
                </div>


                <div
                    className={`side-link ${category === 3 ? 'active' : ''}`}
                    onClick={() => setCategory(3)}
                >
                    <img src={technology} alt="Technology" />
                    <p>Technology</p>
                </div>


                <div
                    className={`side-link ${category === 4 ? 'active' : ''}`}
                    onClick={() => setCategory(4)}
                >
                    <img src={entertainment} alt="Entertainment" />
                    <p>Entertainment</p>
                </div>


                <div
                    className={`side-link ${category === 5 ? 'active' : ''}`}
                    onClick={() => setCategory(5)}
                >
                    <img src={music} alt="Music" />
                    <p>Music</p>
                </div>


                <div
                    className={`side-link ${category === 6 ? 'active' : ''}`}
                    onClick={() => setCategory(6)}
                >
                    <img src={news} alt="News" />
                    <p>News</p>
                </div>


                <div
                    className={`side-link ${category === 7 ? 'active' : ''}`}
                    onClick={() => setCategory(7)}
                >
                    <img src={blogs} alt="Blogs" />
                    <p>Blogs</p>
                </div>

            </div>


            <hr />


            <div className="subscribed-list">

                <h3>Subscribed</h3>


                <div className="side-link">
                    <img src={jack} alt="Jack" />
                    <p>Jack</p>
                </div>


                <div className="side-link">
                    <img src={simon} alt="Simon" />
                    <p>Simon</p>
                </div>


                <div className="side-link">
                    <img src={tom} alt="Tom" />
                    <p>Tom</p>
                </div>


                <div className="side-link">
                    <img src={megan} alt="Megan" />
                    <p>Megan</p>
                </div>


                <div className="side-link">
                    <img src={cameron} alt="Cameron" />
                    <p>Cameron</p>
                </div>

            </div>

        </div>
    )
}

export default Sidebar