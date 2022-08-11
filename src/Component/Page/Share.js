import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import { searchVideo } from "../../apis/youtube";
import { ThemeConsumer } from "styled-components";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchVideo(searchQuery).then((res) => console.log(res));
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
