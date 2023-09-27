import React, { useState } from 'react';

function AgeDropdown(props) {
    const [selectedNumber, setSelectedNumber] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(true);



    const displayAge = (selectedNumber) => {
        props.actions.displayAge(selectedNumber);
        setIsDropdownVisible(false); // Hide the dropdown after selection

    };

    const handleNumberChange = (event) => {
        setSelectedNumber(event.target.value);
        displayAge(event.target.value); // Call displayAge when the value changes

    };

    return (
        <div>
            {isDropdownVisible && (
                <select
                    className='start-btn'
                    value={selectedNumber}
                    onChange={handleNumberChange}
                >
                    <option value="">0</option>
                    {Array.from({ length: 50 }, (_, index) => {
                        const number = index + 1;
                        return (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        );
                    })}
                </select>
            )}
        </div>
    );
}

export default AgeDropdown;
