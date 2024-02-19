import { useState } from "react";
import axios from "axios";
import classes from '../modules/Searchbar.module.scss'
import search from '../assets/photos/search.svg'


const SearchBar = ({ onUserFound}) => {
   const [searchQuery, setSearchQuery] = useState("");
   const [error, setError] = useState(null);


const searchUser = async () => {
     axios
     .get(`https://api.github.com/users/${searchQuery}`)
     .then((respone) => {
        onUserFound(respone.data)
        setError(null);
     })
      .catch (() => {
        setError("No Results")
      });
   }


   return(
        <div className={classes['Searchbar']}>
            <img src={search} alt="" />
            <input type="text" 
             value= {searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             placeholder="Search Github username..."
            />
             {error && <div className={classes['error']}>{error}</div>}
            <button onClick={searchUser}>Search</button>
        </div>
   );

};
   export default SearchBar;