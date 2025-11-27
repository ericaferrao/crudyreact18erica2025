import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";

export default function Post() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        getPosts()
            .then((response) => {
                console.log(response);
                setPosts(response.data)
            })
            .catch((error) => {
                console.error(error);// If you dont catch error 
                // it will throw an unhandled promise rejection error
                //and the screen gos black and red 
            })

    }, [])// load post comestwice only decause strict mode is on
    return (<>
        <h1>Posts</h1>
        {!posts && <h2>Loading...</h2>}
        {posts && posts.map((post) => (
            <div key={post.id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </>)
}