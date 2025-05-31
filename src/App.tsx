function App() {
  return (
    <>
    <div id='wrapper' className='bg-[url(src/assets/nightForest.jpg)] h-screen flex flex-col bg-cover bg-center justify-center items-center'>
      <div id='container' className='bg-white/5 w-100 h-100 backdrop-blur-md rounded-md boder-1 border-gray-600 flex flex-col p-5'>
        <h4 className="text-white text-center text-2xl font-bold">Login</h4>
        <div id='input-container' className='flex flex-col size-full justify-center items-center'>
          <div id='user-input'>
            <label>Username</label><br></br>
            <input className='border-1 border-white px-2 rounded-md' type='text' placeholder='Username' required></input>
          </div>

          <div id='user-password'>
            <label>Password</label><br></br>
            <input className='border-1 border-white px-2 rounded-md' type='password' placeholder='Password' required></input>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
