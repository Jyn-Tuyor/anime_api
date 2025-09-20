import React from "react";
import "/src/index.css";
import searchIcon from "../assets/images/search.png";

function Header({ handleSubmit, search, setSearch, handleMenu, menu }) {
  return (
    <div>
		<div className="bg-blue-200 p-2">
			<span className="font-bold">Search All</span>
		</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center w-full text-white  bg-[#282828] p-3 shadow-sm"
      >
        {/* <a href='/'>HEYYYYY!!</a> */}
        <div className="flex items-center w-full">
          <input
            autoFocus
            placeholder="Search..."
            className="outline-none p-2 text-black mr-2 rounded-md w-full focus:ring duration-100"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="bg-[#1d1d1d] p-2 text-sm rounded-lg hover:shadow-sm"
            type="submit"
          >
            <img className="w-[20px]" src={searchIcon} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Header;
