import React, { useRef, useState } from 'react'

function Signin() {

    const userName = useRef();
    const userEmail = useRef();
  
    const displayNone = useRef();

    const hide =(()=>{
        displayNone.current.style.display = "none";
    });

    const formHandler =((event)=>{
        event.preventDefault();
        const name = userName.current.value;
        const email = userEmail.current.value;
        userEmail.current.value = " ";
        userName.current.value = " ";
        console.log("user name is ->", name ,"and email is ->", email);

    })
  return (
    
    <div  ref={displayNone}  className='relative bg-gray-500 w-1/4 p-5 rounded-md'>
        <div className='flex justify-center text-white py-3 lg:py-5'>
            <h2>Sign in</h2>
        </div>
        <div className='flex flex-col gap-1 lg:gap-5'>
            <form onSubmit={formHandler} className='flex flex-col gap-3 lg:gap-5'>
                <div >
                      <input ref={userName} type="text" placeholder='your name' className='py-2 px-5 w-full rounded-md' />
                </div>
                <div >
                        
                <input ref={userEmail} type="email" placeholder='your email' className='py-2 px-5 w-full rounded-md' />
                </div>
             <button className='hover:bg-blue-700 bg-gray-400 py-3 rounded-md text-white'>Submit</button>
            </form>
        </div>

        <button onClick={hide} className='text-red-500 text-[2rem] absolute top-0 right-5'>x</button>
    </div>
  )
}

export default Signin