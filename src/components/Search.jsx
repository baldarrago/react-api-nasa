import React, { useState } from 'react'

const Search = ({ onCallToApi }) => {

    const [word, setWord] = useState('');

    const handleChange = (e) => {
        setWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCallToApi(word)
    };

    return (
        <form
            className="my-3"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search for ... (e.g. 'Orion')"
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-lg btn-dark">
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search