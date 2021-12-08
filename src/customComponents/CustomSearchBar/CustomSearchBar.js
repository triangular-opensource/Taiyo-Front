import './CustomSearchBar.css';
export default function CustomSearchBar()
{
    return (
    <div  className="search-bar">
	    <input type="search" name="search" pattern=".*\S.*" required />
	        <button className="search-btn" type="submit">
		    <span>Search</span>
	    </button>
        </div>
    )
}