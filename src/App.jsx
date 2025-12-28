import React, { useState } from "react";
// import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const [desc, setdesc] = useState('')

  const [allUsers, setallUsers] = useState([])

  const sabmitHandler = (e)=>{
      e.preventDefault()
    

    setallUsers([...allUsers, {userName,role,imgUrl,desc}])
      
      // setallUsers(oldUsers)

      setUserName('')
      setRole('')
      setdesc('')
      setimgUrl('')
      
      
  }

  const deleteHandler = (idx)=>{
    // console.log('delete');
    const copyusers =  [...allUsers]
    copyusers.splice(idx,1)
    // console.log(copyusers);

    setallUsers(copyusers)
    
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <form  onSubmit={(e)=>{
        sabmitHandler(e)
      }}
      className="flex flex-wrap  p-2">

        <input
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}    
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter Name"
        />
        <input
        value={imgUrl}
        onChange={(e)=>{
          setimgUrl(e.target.value)
        }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Profile Image "
        />
         <input
         value={role}
         onChange={(e)=>{
          setRole(e.target.value)
         }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Emter Role "
        />

        <input
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
          className="border-2 px-5 py-2 text-xl font-semibold rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="bg-emerald-700 cursor-pointer px-5 py-2 active:scale-99 rounded m-2 w-[97%]">
          create user
          </button>
      </form>

      <div className="flex flex-wrap gap-4  px-4 py-6">

         {allUsers.map((elem,idx)=>{
          return    <div key={idx} className='lg:w-[23vw] md:w-[30vw] sm:w-[43vw] bg-white rounded-xl py-8 px-8  flex items-center flex-col  text-center text-black'>
          <img className='object-cover object-center h-24 w-24 rounded-full  ' src={elem.imgUrl} alt="" />
          <h1 className='text-2xl mt-2 font-semibold'>{elem.userName}</h1>
          <h5 className='text-lg text-blue-500 font-semibold my-2'>{elem.role}</h5>
          <p className='text-sm font-medium leading-tight'>{elem.desc}</p>
          <button onClick={()=>deleteHandler(idx)} className='px-4 py-2 text-xs cursor-pointer active:scale-95  rounded bg-red-600 font-semibold mt-3 text-white '>remove</button>
      </div>
         })}

      </div>
    </div>
  );
};

export default App;
