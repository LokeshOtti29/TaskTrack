import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState(" ");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searched text", query);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex items-center gap-2  p-2 rounded-lg  w-fit mx-auto">
          <input
            type="text"
            placeholder="Search your task here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-[500px] h-10 px-4 text-gray-700 placeholder-gray-500 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            aria-label="Search"
            className="w-10 h-10 bg-no-repeat bg-center bg-contain rounded-md hover:scale-105 transition-transform duration-200"
            style={{ backgroundImage: "url('/Search.png')" }}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default Search;
