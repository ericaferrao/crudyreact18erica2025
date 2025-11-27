import { useEffect, useState } from "react";
import { createPost, updatePost } from "../services/postService";
export default function PostForm({ posts, setPosts, editingPost, setEditingPost }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        } else {
            setTitle('');
            setBody('');
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();// prevent page reload
        const newPost = { title, body };

        if (editingPost) {
            // Update existing post
            updatePost(editingPost.id, newPost)
                .then((response) => {
                    console.log(response);
                    setPosts(posts.map((post) => (post.id === editingPost.id ? response.data : post)));
                    setEditingPost(null);
                    setTitle('');
                    setBody('');
                })
                .catch((error) => {
                    console.error(error);
                });
            return;
        } else {
            // Create new post       

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
                <button type="submit" >{editingPost ? "Edit Post" : "Add Post"}</button>
            </div>
        </form>

    </>)
}