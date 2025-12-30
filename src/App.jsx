

import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [desc, setdesc] = useState("");

  // ✅ load from localStorage only once
  const [allUsers, setallUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("all-users")) || [];
  });

  // ✅ CREATE
  const sabmitHandler = (e) => {
    e.preventDefault();

    const updatedUsers = [
      ...allUsers,
      { userName, role, imgUrl, desc },
    ];

    setallUsers(updatedUsers);
    localStorage.setItem("all-users", JSON.stringify(updatedUsers));

    setUserName("");
    setRole("");
    setimgUrl("");
    setdesc("");
  };

  // ✅ DELETE
  const deleteHandler = (idx) => {
    const updatedUsers = allUsers.filter((_, i) => i !== idx);

    setallUsers(updatedUsers);
    localStorage.setItem("all-users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <form onSubmit={sabmitHandler} className="flex flex-wrap p-2">
        <input
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border-2 px-5 py-2 text-xl rounded m-2 lg:w-[48%]"
          placeholder="Enter Name"
        />

        <input
          required
          value={imgUrl}
          onChange={(e) => setimgUrl(e.target.value)}
          className="border-2 px-5 py-2 text-xl rounded m-2 lg:w-[48%]"
          placeholder="Profile Image"
        />

        <input
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border-2 px-5 py-2 text-xl rounded m-2 lg:w-[48%]"
          placeholder="Enter Role"
        />

        <input
          required
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          className="border-2 px-5 py-2 text-xl rounded m-2 lg:w-[48%]"
          placeholder="Enter Description"
        />

        <button className="bg-emerald-700 px-5 py-2 rounded m-2 w-[97%]">
          create user
        </button>
      </form>

      <div className="flex flex-wrap gap-4 px-4 py-6">
        {allUsers.map((elem, idx) => (
          <div
            key={idx}
            className="lg:w-[23vw] md:w-[30vw] sm:w-[43vw] bg-white rounded-xl py-8 px-8 flex flex-col items-center text-black"
          >
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={elem.imgUrl}
              alt=""
            />
            <h1 className="text-2xl mt-2 font-semibold">{elem.userName}</h1>
            <h5 className="text-lg text-blue-500 font-semibold my-2">
              {elem.role}
            </h5>
            <p className="text-sm font-medium">{elem.desc}</p>
            <button
              onClick={() => deleteHandler(idx)}
              className="px-4 py-2 mt-3 bg-red-600 text-white rounded"
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
