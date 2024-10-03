import React from "react";
import './Results.css';
const Results = ({data, query })=> {
    if (!query){
        return <div className="results"> Please enter a term</div>;
    }
const regex = new RegExp (`(${query})`, 'gi');
const filteredData = data.filter(item =>regex.test(item))

if (filteredData.length ===0){
    return <div className="results">No results</div>;
}
return (
    <div className="results">
        <ul>
            {filteredData.map ((item, index)=>(
                <li key =  {index}>
             {item.split(regex).map((part,i) =>
             regex.test(part)?(
                <span key = {i} className="highlight">
                {part}
                </span>
             ) : (
                part
            )
        )}
        </li>
))}

        </ul>
    </div>
);
};