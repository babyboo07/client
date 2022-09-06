import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Search = (props) => {
  const {handleSearch} = props;
  const [searchQuery, setSearchQuery] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };


  return (
    <div>
      <form className="flex justify-center" onSubmit={onSubmit}>
        <input
          type="text"
          className="outline-none border p-1 rounded-xl focus:border-cyan-500"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          value={searchQuery}
        />
        <button type="submit" aria-label="search" className="absolute right-20 p-1">
          <SearchIcon className="text-sky-500" />
        </button>
      </form>
    </div>
  );
};

export default Search;
