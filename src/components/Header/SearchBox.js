import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchBox.scss";

const SearchBox = () => {
  const [filteredData, setfilteredData] = useState([]);
  const uploadDataInfo = useSelector((state) => state.uploadDataReducer.data);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = uploadDataInfo.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setfilteredData([]);
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search here ex 'man'"
          onChange={handleFilter}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
      {filteredData.length !== 0 && (
        <div className="searchResults">
          {filteredData.slice(0, 6).map((value, key) => {
            return (
              <div className="dataResults" key={key}>
                <Link to={`/product/${value.id}`} onClick={clearInput}>
                  <div className="dataResultLink">
                    <div className="dataResultImage">
                      <img src={value.image} alt="Products images" />
                    </div>
                    <div className="dataResultText">
                      <p>{value.title}</p>

                      <span>$ {value.price}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
