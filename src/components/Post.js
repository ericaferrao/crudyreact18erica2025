import { useState, useEffect } from "react";
import { getPosts } from "../services/postService";

export default function Post() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        getPosts()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);// If you dont catch error 
                // it will throw an unhandled promise rejection error
                //and the screen gos black and red 
            })

    }, [])// load post comestwice only decause strict mode is on
    return (<></>)
}