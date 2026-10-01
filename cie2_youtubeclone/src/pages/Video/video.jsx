import React from 'react'
import './video.css'
import { useParams } from 'react-router-dom'

import PlayVideo from '../../components/playvideo/playvideo'
import Recommended from '../../components/recommended/recommended'

const Video = ({ sidebarOpen }) => {

    const { categoryId } = useParams()

    const videoData = {

        1: {
            title: 'Exploring the Beautiful Mountains and Lake',
            channel: 'Travel Vibes',
            subscribers: '850K Subscribers',
            comments: [
                'This place looks absolutely beautiful!',
                'The lake and mountains are amazing.',
                'Adding this place to my travel list!'
            ]
        },

        2: {
            title: 'Beautiful Beach Ride Along the Coast',
            channel: 'Coastal Adventures',
            subscribers: '620K Subscribers',
            comments: [
                'What an amazing beach!',
                'The cycling route looks incredible.',
                'This is such a peaceful place.'
            ]
        },

        3: {
            title: 'Exploring One of the Biggest Shopping Malls',
            channel: 'Travel Explorer',
            subscribers: '540K Subscribers',
            comments: [
                'This mall looks huge!',
                'So many stores in one place.',
                'Would love to visit this place.'
            ]
        },

        4: {
            title: 'Hidden Mountain Lake You Must Visit',
            channel: 'Nature World',
            subscribers: '1.2M Subscribers',
            comments: [
                'The scenery is breathtaking.',
                'I love discovering places like this.',
                'This looks like a perfect vacation spot.'
            ]
        },

        5: {
            title: 'A Perfect Day Out With Friends',
            channel: 'Travel With Us',
            subscribers: '430K Subscribers',
            comments: [
                'Looks like you guys had so much fun!',
                'This is what a perfect day looks like.',
                'Great video with an amazing group.'
            ]
        },

        6: {
            title: 'Dream Supercar: Lamborghini Aventador',
            channel: 'Auto World',
            subscribers: '2.1M Subscribers',
            comments: [
                'That Lamborghini looks insane!',
                'One of my dream cars.',
                'The design of this car is incredible.'
            ]
        },

        7: {
            title: 'Inside DCU University Campus',
            channel: 'Campus Tours',
            subscribers: '380K Subscribers',
            comments: [
                'The campus looks amazing.',
                'Would love to study here.',
                'Thanks for showing us around the campus.'
            ]
        },

        8: {
            title: 'Yellow Lamborghini: A Stunning Supercar',
            channel: 'Supercar Central',
            subscribers: '1.8M Subscribers',
            comments: [
                'That yellow color looks fantastic!',
                'Such a beautiful Lamborghini.',
                'The car looks even better in this color.'
            ]
        },

        9: {
            title: 'Top Mountain Destinations You Should Visit',
            channel: 'Travel Vibes',
            subscribers: '850K Subscribers',
            comments: [
                'All these places look incredible.',
                'Which mountain would you recommend visiting first?',
                'I definitely need to travel more.'
            ]
        },

        10: {
            title: 'Best Coastal Cycling Routes',
            channel: 'Adventure Life',
            subscribers: '710K Subscribers',
            comments: [
                'This cycling route looks amazing.',
                'Perfect weather for a bike ride.',
                'I would love to try this route.'
            ]
        },

        11: {
            title: 'A Day of Shopping and Exploring',
            channel: 'Travel Explorer',
            subscribers: '540K Subscribers',
            comments: [
                'Looks like such a fun day.',
                'That shopping mall is huge!',
                'Great video and beautiful footage.'
            ]
        },

        12: {
            title: 'Beautiful Places Around the Mountains',
            channel: 'Nature World',
            subscribers: '1.2M Subscribers',
            comments: [
                'Nature is absolutely incredible.',
                'The mountains look beautiful.',
                'I could watch this scenery all day.'
            ]
        },

        13: {
            title: 'Walking Around the City With Friends',
            channel: 'Travel With Us',
            subscribers: '430K Subscribers',
            comments: [
                'This looks like such a fun city.',
                'Great memories with friends!',
                'Loved the relaxed atmosphere of this video.'
            ]
        },

        14: {
            title: 'Top Luxury Sports Cars',
            channel: 'Auto World',
            subscribers: '2.1M Subscribers',
            comments: [
                'These cars are absolutely beautiful.',
                'Which one would you choose?',
                'The orange Lamborghini looks incredible.'
            ]
        },

        15: {
            title: 'Exploring the DCU Campus',
            channel: 'Campus Tours',
            subscribers: '380K Subscribers',
            comments: [
                'The architecture looks amazing.',
                'This campus looks like a great place to study.',
                'Really useful campus tour.'
            ]
        },

        16: {
            title: 'Lamborghini Huracan: Ultimate Driving Experience',
            channel: 'Supercar Central',
            subscribers: '1.8M Subscribers',
            comments: [
                'The Huracan is such a beautiful car.',
                'That driving experience must be incredible!',
                'One of my favorite supercars.'
            ]
        }

    }

    const selectedVideo = videoData[categoryId]

    return (
        <div className={sidebarOpen ? 'video-page' : 'video-page large-video-page'}>

            <div className="video-main">

                <PlayVideo
                    title={selectedVideo.title}
                    channel={selectedVideo.channel}
                    subscribers={selectedVideo.subscribers}
                    comments={selectedVideo.comments}
                />

            </div>

            <Recommended />

        </div>
    )
}

export default Video