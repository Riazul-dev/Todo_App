import React from 'react'




function App() {

  return (
    <div className='min-h-screen bg-gray-600 text-white'>
      <h1 className='text-3xl text-center py-8'>This is a Todo App</h1>
      <div className='flex rounded overflow-hidden mx-8'>
        <input
          type="text"
          className='w-full p-2 outline-none text-orange-600 tracking-wider' 
        />
        <button
          type='button'
          className='bg-green-500 shrink-0 p-2 tracking-wide'
        >Add Todo</button>
      </div>
    </div>
  )
}

export default App
