import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex justify-center items-center  w-screen h-screen bg-blue-200'> 
      <main>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout