import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     // fetch('https://api.github.com/users/hiteshchoudhary')
    //     fetch('https://api.github.com/users/Ajayjani8008')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-200 text-shadow-white text-3xl p-5'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="github profile image" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ajayjani8008')
    return response.json()

}