import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    const info = useLoaderData();
    // const[followers,setFollwers] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayan-x')
    // .then(response=>response.json())
    // .then(data=>
    //         setFollwers(data)
    // ),[]})
  return (
    <div className='bg-gray-800 text-white'>
        GitHub followers : {info?.followers}
        <img src={info?.avatar_url} alt="git picture"
        width={300} />
    </div>
  )
}

export default Github
 
export const githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/ayan-x")
    return response.json();
}