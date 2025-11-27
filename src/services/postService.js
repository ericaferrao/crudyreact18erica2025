import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPosts = () => api.get('/posts');
const deltePost = (id) => api.delete(`/posts/${id}`)
const createPost = (post) => api.post('posts', post)
const updatePost = (id, post) => api.put(`/posts/${id}`, post)

export { getPosts, deltePost, createPost, updatePost };