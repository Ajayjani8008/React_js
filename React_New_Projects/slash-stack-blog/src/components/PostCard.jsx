import React from "react";

import appwirteService from "../appwrite/config.js"
// we use different name for get service because it is export as default from service class 

import { Link } from "react-router-dom"


function PostCard({ $id, title, featuredImage }) {
    const imageUrl = featuredImage ? appwirteService.getFilePreview(featuredImage) : null;

    return (
        <Link to={`/post/${$id}`} className="block m-4">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                {imageUrl && (
                    <img
                        className="w-full h-48 object-cover"
                        src={imageUrl}
                        alt={title}
                    />
                )}
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                </div>
            </div>
        </Link>
    );
}


export default PostCard