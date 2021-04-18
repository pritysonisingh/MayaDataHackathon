import React, { useState } from "react";
import search from "./../assests/search.png";
import "./Search.css";
import Table from "./Table";

const Search = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e);
  };

  return (
    <React.Fragment>
      <div className="card" style={{ marginBottom: "50px" }}>
        <div class="container">
          <form>
            <div class="flex-container">
              <div>
                <input
                  type="text"
                  name="search2"
                  value={text}
                  onChange={(e) => onChangeHandler(e.target.value)}
                  autoFocus
                />
                <button type="submit">
                  <img src={search} alt="icon" />
                </button>
              </div>
              <div>
                From:
                <input type="date" />
              </div>
              <div>
                To:
                <input type="date" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Table searchText={text} />
    </React.Fragment>
  );
};

export default Search;
