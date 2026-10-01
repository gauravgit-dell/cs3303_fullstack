import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'

import Home from './pages/Home/home'
import Video from './pages/Video/video'

const App = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true)

    const [category, setCategory] = useState(0)

    return (
        <>
            <Navbar setSidebarOpen={setSidebarOpen} />

            <Sidebar
                sidebarOpen={sidebarOpen}
                category={category}
                setCategory={setCategory}
            />

            <Routes>

                <Route
                    path="/"
                    element={
                        <Home
                            sidebarOpen={sidebarOpen}
                            category={category}
                        />
                    }
                />

                <Route
                    path="/video/:categoryId/:videoId"
                    element={
                        <Video
                            sidebarOpen={sidebarOpen}
                            category={category}
                            setCategory={setCategory}
                        />
                    }
                />

            </Routes>
        </>
    )
}

export default App