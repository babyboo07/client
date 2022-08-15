import { IconButton, Input } from "@mui/material";
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
      <form className="d-flex justify-content-center" onSubmit={onSubmit}>
        <Input
          type="text"
          className="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          label="Enter id youtube video"
          placeholder="Search..."
          size="small"
          value={searchQuery}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </div>
  );
};

export default Search;
