import React, { useState } from 'react'
import './playvideo.css'

import video from '../../assets/video.mp4'

import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'

import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = ({
    title,
    channel,
    subscribers,
    comments
}) => {

    // ==========================================
    // MAIN VIDEO LIKE / DISLIKE
    // ==========================================

    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const [likeCount, setLikeCount] = useState(125)
    const [dislikeCount, setDislikeCount] = useState(2)

    const [subscribed, setSubscribed] = useState(false)


    const handleLike = () => {

        if (liked) {

            setLiked(false)
            setLikeCount(prev => prev - 1)

        } else {

            setLiked(true)
            setLikeCount(prev => prev + 1)

            if (disliked) {
                setDisliked(false)
                setDislikeCount(prev => prev - 1)
            }

        }

    }


    const handleDislike = () => {

        if (disliked) {

            setDisliked(false)
            setDislikeCount(prev => prev - 1)

        } else {

            setDisliked(true)
            setDislikeCount(prev => prev + 1)

            if (liked) {
                setLiked(false)
                setLikeCount(prev => prev - 1)
            }

        }

    }


    const handleSubscribe = () => {
        setSubscribed(prev => !prev)
    }


    // ==========================================
    // COMMENTS
    // ==========================================

    const initialComments = comments.map((comment, index) => ({
        id: index + 1,
        username:
            index === 0
                ? 'Jack Nicholson'
                : index === 1
                    ? 'Sarah Wilson'
                    : 'Michael Scott',

        text: comment,

        likes: 244 - index * 31,
        dislikes: 0,

        liked: false,
        disliked: false,

        own: false
    }))


    const [commentList, setCommentList] = useState(initialComments)


    // ==========================================
    // NEW COMMENT
    // ==========================================

    const [newComment, setNewComment] = useState('')


    // ==========================================
    // EDIT COMMENT
    // ==========================================

    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')


    // ==========================================
    // POST COMMENT
    // ==========================================

    const handlePostComment = () => {

        const text = newComment.trim()

        // Don't post empty comments
        if (text === '') {
            return
        }


        const newCommentObject = {

            id: Date.now(),

            username: 'Gaurav',

            text: text,

            likes: 0,

            dislikes: 0,

            liked: false,

            disliked: false,

            own: true

        }


        setCommentList(prev => [
            newCommentObject,
            ...prev
        ])


        // Clear input after posting
        setNewComment('')

    }


    // ==========================================
    // LIKE COMMENT
    // ==========================================

    const handleCommentLike = (id) => {

        setCommentList(prev => {

            return prev.map(comment => {

                if (comment.id !== id) {
                    return comment
                }


                // Already liked
                // Remove like

                if (comment.liked) {

                    return {
                        ...comment,
                        liked: false,
                        likes: comment.likes - 1
                    }

                }


                // Add like

                return {
                    ...comment,

                    liked: true,

                    disliked: false,

                    likes: comment.likes + 1,

                    dislikes: comment.disliked
                        ? comment.dislikes - 1
                        : comment.dislikes
                }

            })

        })

    }


    // ==========================================
    // DISLIKE COMMENT
    // ==========================================

    const handleCommentDislike = (id) => {

        setCommentList(prev => {

            return prev.map(comment => {

                if (comment.id !== id) {
                    return comment
                }


                // Already disliked
                // Remove dislike

                if (comment.disliked) {

                    return {
                        ...comment,
                        disliked: false,
                        dislikes: comment.dislikes - 1
                    }

                }


                // Add dislike

                return {
                    ...comment,

                    disliked: true,

                    liked: false,

                    dislikes: comment.dislikes + 1,

                    likes: comment.liked
                        ? comment.likes - 1
                        : comment.likes
                }

            })

        })

    }


    // ==========================================
    // START EDIT
    // ==========================================

    const handleEdit = (comment) => {

        setEditingId(comment.id)

        setEditText(comment.text)

    }


    // ==========================================
    // SAVE EDIT
    // ==========================================

    const handleSaveEdit = (id) => {

        const text = editText.trim()

        if (text === '') {
            return
        }


        setCommentList(prev => {

            return prev.map(comment => {

                if (comment.id !== id) {
                    return comment
                }

                return {
                    ...comment,
                    text: text
                }

            })

        })


        setEditingId(null)

        setEditText('')

    }


    // ==========================================
    // CANCEL EDIT
    // ==========================================

    const handleCancelEdit = () => {

        setEditingId(null)

        setEditText('')

    }


    // ==========================================
    // DELETE COMMENT
    // ==========================================

    const handleDelete = (id) => {

        setCommentList(prev =>
            prev.filter(comment => comment.id !== id)
        )

    }


    return (

        <div className="play-video">

            {/* ==========================================
                VIDEO
            ========================================== */}

            <video
                src={video}
                controls
                className="video-player"
            />


            {/* ==========================================
                TITLE
            ========================================== */}

            <h1>
                {title}
            </h1>


            {/* ==========================================
                VIDEO INFO
            ========================================== */}

            <div className="video-info">

                <p>
                    1525 Views • 2 days ago
                </p>


                <div className="video-actions">

                    {/* LIKE */}

                    <span
                        onClick={handleLike}
                        className={liked ? 'active-action' : ''}
                    >

                        <img
                            src={like}
                            alt="like"
                        />

                        {likeCount}

                    </span>


                    {/* DISLIKE */}

                    <span
                        onClick={handleDislike}
                        className={disliked ? 'active-action' : ''}
                    >

                        <img
                            src={dislike}
                            alt="dislike"
                        />

                        {dislikeCount}

                    </span>


                    {/* SHARE */}

                    <span>

                        <img
                            src={share}
                            alt="share"
                        />

                        Share

                    </span>


                    {/* SAVE */}

                    <span>

                        <img
                            src={save}
                            alt="save"
                        />

                        Save

                    </span>

                </div>

            </div>


            <hr />


            {/* ==========================================
                CHANNEL
            ========================================== */}

            <div className="publisher">

                <img
                    src={jack}
                    alt="channel"
                />


                <div>

                    <p>
                        {channel}
                    </p>

                    <span>
                        {subscribers}
                    </span>

                </div>


                <button onClick={handleSubscribe}>

                    {subscribed
                        ? 'Subscribed'
                        : 'Subscribe'
                    }

                </button>

            </div>


            {/* ==========================================
                DESCRIPTION
            ========================================== */}

            <div className="video-description">

                <p>
                    Channel that makes learning Easy
                </p>

                <p>
                    Subscribe {channel} to watch More Tutorials and Videos
                </p>

            </div>


            <hr />


            {/* ==========================================
                COMMENTS
            ========================================== */}

            <div className="comments">

                <h3>
                    {commentList.length} Comments
                </h3>


                {/* ======================================
                    ADD COMMENT
                ====================================== */}

                <div className="add-comment">

                    <img
                        src={user_profile}
                        alt="your profile"
                    />


                    <div className="comment-input-area">

                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) =>
                                setNewComment(e.target.value)
                            }
                            onKeyDown={(e) => {

                                if (e.key === 'Enter') {
                                    handlePostComment()
                                }

                            }}
                        />


                        <button
                            onClick={handlePostComment}
                        >
                            Post
                        </button>

                    </div>

                </div>


                {/* ======================================
                    COMMENT LIST
                ====================================== */}

                {commentList.map(comment => (

                    <div
                        className="comment"
                        key={comment.id}
                    >

                        {/* PROFILE */}

                        <img
                            src={
                                comment.own
                                    ? user_profile
                                    : user_profile
                            }
                            alt="user"
                        />


                        <div className="comment-content">

                            {/* USERNAME */}

                            <h4>

                                {comment.username}

                                <span>
                                    {comment.own
                                        ? 'Just now'
                                        : '1 day ago'
                                    }
                                </span>

                            </h4>


                            {/* ==================================
                                NORMAL COMMENT
                            ================================== */}

                            {editingId !== comment.id && (

                                <p>
                                    {comment.text}
                                </p>

                            )}


                            {/* ==================================
                                EDIT MODE
                            ================================== */}

                            {editingId === comment.id && (

                                <div className="edit-comment">

                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) =>
                                            setEditText(e.target.value)
                                        }
                                    />


                                    <button
                                        onClick={() =>
                                            handleSaveEdit(comment.id)
                                        }
                                    >
                                        Save
                                    </button>


                                    <button
                                        onClick={handleCancelEdit}
                                        className="cancel-button"
                                    >
                                        Cancel
                                    </button>

                                </div>

                            )}


                            {/* ==================================
                                COMMENT ACTIONS
                            ================================== */}

                            <div className="comment-actions">

                                {/* LIKE */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleCommentLike(comment.id)
                                    }
                                    className={
                                        comment.liked
                                            ? 'comment-action active-comment-action'
                                            : 'comment-action'
                                    }
                                >

                                    <img
                                        src={like}
                                        alt="like"
                                    />

                                    <span>
                                        {comment.likes}
                                    </span>

                                </button>


                                {/* DISLIKE */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleCommentDislike(comment.id)
                                    }
                                    className={
                                        comment.disliked
                                            ? 'comment-action active-comment-action'
                                            : 'comment-action'
                                    }
                                >

                                    <img
                                        src={dislike}
                                        alt="dislike"
                                    />

                                    <span>
                                        {comment.dislikes}
                                    </span>

                                </button>


                                {/* EDIT */}

                                {comment.own && (

                                    <button
                                        type="button"
                                        className="text-action"
                                        onClick={() =>
                                            handleEdit(comment)
                                        }
                                    >
                                        Edit
                                    </button>

                                )}


                                {/* DELETE */}

                                {comment.own && (

                                    <button
                                        type="button"
                                        className="text-action delete-action"
                                        onClick={() =>
                                            handleDelete(comment.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )
}

export default PlayVideo