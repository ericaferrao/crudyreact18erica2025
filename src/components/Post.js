import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";

export default function Post() {
    const [posts, setPosts] = useState();
    useEffect(() => { console.log("Load Post") }, [])// load post comestwice only decause strict mode is on
    return (<></>)
}