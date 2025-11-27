import { useState } from "react";
import { createPost } from "../services/postService";
export default function PostForm({ posts, setPosts }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();// prevent page reload
        const newPost = { title, body };

        createPost(newPost)
            .then((response) => {
                console.log(response);
                response.data.id = posts.length + 1; // fake id for demo purpose
                setPosts([response.data, ...posts]);
                setTitle('');
                setBody('');

            })
            .catch((error) => {
                console.error(error);
            })


    }

    return (<>
        <h2>Post Form </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <div>
                <button type="submit" >Add Post</button>
            </div>
        </form>

    </>)
}