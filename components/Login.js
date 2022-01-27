import React, { useState } from 'react';

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  const pressShow = (e)=>{
      e.preventDefault();
      setShowPassword(!showPassword)
  }  

  return <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white mb-3 border border-gray-300 w-80 pt-8 pb-4 flex flex-col items-center">
            <h1 className="instagram-logo"></h1>
            <form className="w-64 flex flex-col gap-1 mt-8">
                <div className="relative">
                    <input type="text" 
                    className="peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent" 
                    placeholder="Phone number, username or email"
                    />                    
                    <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">Phone number, username or email</label>
                </div>

                <div className="relative">
                    <input type={ showPassword ? 'text' : 'password' } 
                    className="peer w-full rounded border bg-gray-100 p-2 text-xs placeholder-transparent" 
                    placeholder="Password"/>
                    <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">Password</label>

                    <button onClick={e => pressShow(e)}
                    className="absolute right-2 bottom-2 focus:text-gray-500 rounded text-xs font-semibold">{ showPassword ? 'Hide' : 'Show' }</button>
                </div>


            </form>
        </div>
        <div className="bg-white">
            another dic
        </div>
  </div>;
}

export default Login;
