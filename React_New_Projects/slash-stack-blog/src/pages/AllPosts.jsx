import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config.js'
import { Container, PostCard } from '../components/index.js'


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {

    }, [])

    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })


    return (
        <div className='w-ful; py-8'>
            <Container>
                <div className='flex flex-wrap'>

                    {posts.map((post) => (
                        <PostCard
                            key={post.$id}
                            $id={post.$id}
                            title={post.title}
                            featuredImage={post.featuredImage}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts