import React from "react";

import service from "../appwrite/config.js"
// we use different name for get service because it is export as default from service class 

import { Link } from "react-router-dom"


function PostCard($id, title, featuredImage) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img className="rounded-xl" src={service.getFilePriview(featuredImage)} alt={title} />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard