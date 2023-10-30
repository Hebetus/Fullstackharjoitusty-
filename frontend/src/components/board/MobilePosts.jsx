import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import Post from './post/Post'
import Newpost from './newpost/Newpost'

import { ALL_POSTS } from '../../graphql/queries'

import { listStyle } from './BoardStyles'

const MobilePosts = () => {
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
        <div>
            <ul style={listStyle()} id='postsList'>
                {posts.map((post) => <Post post={post} deletePost={deletePost} key={Math.random()} />)}
                <Newpost addPost={addNewPost} postsLength={posts.length} />
            </ul>
        </div>
    )
}

export default MobilePosts