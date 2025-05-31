function App() {
  return (
    <>
    <div id='wrapper' className='bg-[url(src/assets/nightForest.jpg)] h-screen flex flex-col bg-cover bg-center justify-center items-center'>
      <div id='container' className='bg-white/5 w-100 h-100 backdrop-blur-md rounded-md boder-1 border-gray-600 flex flex-col p-5'>
        <h4 className="text-white text-center text-2xl font-bold">Login</h4>
        <div id='input-container' className='flex flex-col size-full justify-center items-center'>
          <div id='user-input'>
            <label className='text-white text-md' >Username</label><br></br>
            <input className='border-1 border-white px-2 rounded-md' type='text' placeholder='Username' required></input>
          </div>

          <div id='user-password' className='mt-4'>
            <label className='text-white text-md'>Password</label><br></br>
            <input className='border-1 border-white px-2 rounded-md' type='password' placeholder='Password' required></input>
          </div>

          <div id='button-div' className='justify-center items-center flex flex-row w-50'>
            <button className='bg-white rounded-md w-full h-7 mt-4'>login</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
