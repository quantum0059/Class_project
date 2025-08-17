import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [avatars, setAvatars] = useState([]);

  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0]?.toUpperCase())
      .join("");

  const randomColor = () => {
    const colors = [
      "#f87171",
      "#60a5fa",
      "#34d399",
      "#fbbf24",
      "#a78bfa",
      "#fb923c",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addAvatar = () => {
    if (!name.trim()) return;
    setAvatars([...avatars, { name, color: randomColor() }]);
    setName("");
  };

  const removeAvatar = (index) => {
    setAvatars(avatars.filter((_, i) => i !== index));
  };

  const handelKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addAvatar();
    }
  };

  const handelName = (e) => {
    setName(e.target.value);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col
                    items-center justify-center p-6"
    >
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Avatar Generator
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handelName}
            onKeyDown={handelKeyPress}
            className="flex-1 px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={addAvatar}
            className="px-4 py-2 bg-green-500 text-while rounded-lg shadow hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-5 flex flex-col items-center hover:shadow-xl transition"
            >
              {/* Avatar circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md"
                style={{ backgroundColor: avatar.color }}
              >
                {getInitials(avatar.name)}
              </div>

              {/* Name */}
              <p className="text-base font-medium text-gray-800">
                {avatar.name}
              </p>

              {/* Remove button */}
              <button
                onClick={() => removeAvatar(index)}
                className="mt-3 text-xs bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
