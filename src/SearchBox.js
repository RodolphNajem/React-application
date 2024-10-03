import React from "react";
import './SearchBox.css';
const SearchBox = ({onSearch}) => {
    const handleInputChange = (e) =>{
        onSearch(e.target.value);
    };
return(
    <div className="search-box">
        <input
        type = "text"
        placeholder="Search..."
        onChange = {handleInputChange}
               />
               </div>
);
};
export default SearchBox;