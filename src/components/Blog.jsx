import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

function Blog() {

    const {loading, posts} = useContext(AppContext);

  return (
    // <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>

    <div className='w-11/12 max-w-[670px] h-[full] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>    
        {
            loading ? (<Spinner/>) : (
                (posts.length === 0) ? (<div><p>No post found</p></div>) 
                : (
                    posts.map((post) => (<Card post={post} key={post.id}/>))
                )
            )
        }
    </div>
  )
}

export default Blog
