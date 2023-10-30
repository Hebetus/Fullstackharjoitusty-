import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import Post from './post/Post'
import Newpost from './newpost/Newpost'

import { ALL_POSTS } from '../../graphql/queries'

import {
    postsStyle, titleStyle, containerStyle,
    contentStyle, tabStyle, tabtitleStyle,
    linkStyle
} from './BoardStyles'

const Posts = ({ isLoggedIn }) => {
    const [posts, setPosts] = useState([])
    const result = useQuery(ALL_POSTS)

    useEffect(() => {
        if (result.data) {
            setPosts(result.data.allPosts)
        }
    }, [result.loading, result.data])

    const deletePost = () => {}

    const addNewPost = (post) => {
        setPosts(posts.concat(post))
    }

    return (
        <div style={containerStyle()}>
            <div style={tabStyle()}>
                <p style={tabtitleStyle()}>Kaikki langat</p>
                <Link to="/posts" style={linkStyle()}>Yleinen</Link>
                <Link to="/posts" style={linkStyle()}>Uutiset</Link>
                <Link to="/posts" style={linkStyle()}>Ilmoitukset</Link>
                <Link to="/posts" style={linkStyle()}>Myynti/osto</Link>
                <Link to="/posts" style={linkStyle()}>Työtarjoukset</Link>
            </div>
            <div style={contentStyle()}>
                <p style={titleStyle()}>LAUTA</p>
                <ul style={postsStyle()} id='postsList'>
                    {posts.map((post) => <Post post={post} deletePost={deletePost} key={Math.random()} isLoggedIn={isLoggedIn} />)}
                    <Newpost addPost={addNewPost} postsLength={posts.length} />
                </ul>
            </div>
        </div>
    )
}

export default Posts