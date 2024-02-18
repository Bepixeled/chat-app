import React from "react";
import * as Unicons from '@iconscout/react-unicons';

const Search = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="p-2 rounded-full shadow-md shadow-black text-lkeppel-700 bg-dcharcoal-200 focus:outline-none"
        />
        <button className="rounded-full bg-dcaribbean_current-200 w-10 h-10 shadow-black shadow-md flex justify-center items-center"><Unicons.UilSearch size={18} /></button>
      </form>
    </div>
  );
};

export default Search;
