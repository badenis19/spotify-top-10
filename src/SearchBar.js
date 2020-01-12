import React, { useState } from "react";

const SearchBar = () => {

    const [textInput, settextInput] = useState("");

    // to handle change on the input
    const updateInput = (e) => {
        settextInput(e.target.value);
    }

    // API call to get fetch the info 
    const fetchTopTen = async () => {
        console.log("Fetching the info..")
        // let result = await fetch("https://api.github.com/users/badenis19")
        let result = await fetch("https://api.github.com/users/badenis19")
        let data = await result.json()
        console.log(data);
    }

    return (
        <div>
            <h1>{textInput}</h1>
            <input type="text" value={textInput} placeholder="Please Enter Country" onChange={updateInput} />
            <input type="button" value="Search" onClick={() => fetchTopTen()}/>
        </div>
    )
}

export default SearchBar;