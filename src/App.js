import React, {useState} from 'react';
import SearchBox from './SearchBox';
import Results from './Results';
import './App.css';

const App = () =>{
const data = [];
const [query, setQuery] = useState('');
const handleSearch = (searchQuery)=> {
setQuery(searchQuery);
};
return (
<div className = "App">
<h1>Search Highlight App </h1>
<SearchBox onSearch = {handleSearch}/>
<Results data = {data} query = {query}/>
</div>
);
};
export default App;
