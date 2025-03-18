import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = React.useState([])


    // useEffect(() => {
    //     fetch('https://api.github.com/users/sameer0803')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //         console.log(data)
    // })
    // }, [])



  return (
    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xlo'>
      GitHub followers:{data.followers}
      <img src={data.avatar_url} alt="avatar" className="" />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
  const response= await fetch('https://api.github.com/users/sameer0803')
  return response.json()

  }
