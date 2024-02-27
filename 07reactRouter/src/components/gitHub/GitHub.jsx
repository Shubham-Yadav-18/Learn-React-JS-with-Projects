import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
const GitHub = () => {
    const data=useLoaderData();
    // const[data,setData]=useState();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //           console.log(data);
    //           setData(data);
    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-center text-white text-3xl m-3 p-3'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt="github pic" width={300} />
    </div>
  )
}

export default GitHub;
export const GitHubInfoLoader=async () =>{
   const response=await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}
