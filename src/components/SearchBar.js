import { useState } from "react";

function SearchBar({onSubmit}) {

    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return(
        <div>
        <form onSubmit={onFormSubmit}>
            <input value={term} onChange={handleChange}/>
        </form>
        </div>
    )
}

export default SearchBar;