import React from 'react'
import './home.css'

import Feed from '../../components/feed/feed'

const Home = ({ sidebarOpen, category }) => {

    return (
        <div className={sidebarOpen ? 'container' : 'container large-container'}>

            <Feed category={category} />

        </div>
    )
}

export default Home