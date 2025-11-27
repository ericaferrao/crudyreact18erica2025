import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPosts = () => api.get('/posts');
const deltePost = (id) => api.delete(`/posts/${id}`)

export { getPosts, deltePost }