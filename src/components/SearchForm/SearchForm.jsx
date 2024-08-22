// npm modules
import { useState, useEffect } from "react"


const SearchForm = () => {

    const [formData, setFormData] = useState({query:''})

    const handleChange = (evt) => {
        setFormData({...formData ,[evt.target.name]: evt.target.value})
    }
    return ( 
        <form className='search-form' action="">
            <input 
            type="text" 
            name="query"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
     )
}
 
export default SearchForm