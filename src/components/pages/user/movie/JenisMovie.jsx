import React, { useState, useEffect } from 'react'

export default function JenisMovie({ onCategoryChange }) {
    const [selectedOption, setSelectedOption] = useState('now_playing')

    function handleChange(event){
        setSelectedOption(event.target.value)
    }

    useEffect(() => {
        onCategoryChange(selectedOption)
    }, [selectedOption])

    return (
        <div className="w-full">
            <select value={selectedOption} onChange={handleChange} 
                className="px-3 py-3 placeholder-secondary-light text-black relative bg-secondary-light 
                            rounded-md text-sm outline-none focus:outline-none w-full">

                <option value="now_playing" className="my-2">Now Playing</option>
                <option value="upcoming">Upcoming Release</option>
                <option value="top_rated">Top Rated</option>
                <option value="popular">Popular</option>
            </select>
        </div>
    )
}