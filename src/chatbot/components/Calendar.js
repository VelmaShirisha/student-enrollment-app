import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Calendar(props) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [date, setDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const timeMorning = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
    const timeNoon = ["02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

    const displayDateAndTime = (selectedDate, selectedTime) => {
        const dateObject = new Date(selectedDate);
        if (!isNaN(dateObject)) {
            const formattedDate = `${dateObject.getDate()} ${dateObject.toLocaleString('default',
                { month: 'short' })}`;
            // Check if selectedTime is not null before formatting
            const formattedTime = selectedTime ? selectedTime.replace(/:00 /, ' ').replace(/^0/, '') : '';
            const formattedDay = dateObject.toLocaleString('default', { weekday: 'short' });
            setDate(formattedDate);
            props.actions.displayDateAndTime(formattedDate, formattedDay, formattedTime);
        }
    };


    const handleTimeSlotSelection = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
    };

    // Function to handle clicking the left button
    const handleLeftButtonClick = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 3); // Go back three days
        setCurrentDate(newDate);
        // Clear selected date and time when changing the date
        setDate(null);
        setSelectedTimeSlot(null);
    };

    // Function to handle clicking the right button
    const handleRightButtonClick = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 3); // Go forward three days
        setCurrentDate(newDate);
        // Clear selected date and time when changing the date
        setDate(null);
        setSelectedTimeSlot(null);
    };


    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const weekday = date.toLocaleString('default', { weekday: 'short' });
        return `${day} ${month} ${weekday}`;
    };


    // Generate an array of three dates starting from the current date
    const dateButtons = Array.from({ length: 3 }, (_, index) => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + index);
        return date;
    });

    return (
        <>
            <div>
                {selectedTimeSlot === null && (
                    <div className='container'>
                        <button className='start-btn' onClick={handleLeftButtonClick}>
                            <i aria-hidden="true">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </i>
                        </button>
                        {dateButtons.map((date, index) => (
                            <button key={index} className={`start-btn ${selectedButtonIndex === index ? 'selected' : ''}`}
                                onClick={() => {
                                    displayDateAndTime(date, selectedTimeSlot);
                                    setSelectedButtonIndex(index);
                                }}>
                                {formatDate(date)}
                            </button>
                        ))}
                        <button className='start-btn' onClick={handleRightButtonClick}>
                            <i aria-hidden="true">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </i>
                        </button>
                    </div>
                )}
                <div>
                    {selectedTimeSlot === null && date !== null && (
                        <div>
                            <p>MORNING</p>
                            <div className='container'>
                                {timeMorning.map((timeOption, index) => (
                                    <button
                                        key={index}
                                        className='start-btn'

                                        onClick={() => {
                                            displayDateAndTime(date, timeOption);
                                            handleTimeSlotSelection('morning');
                                        }}
                                    >
                                        {timeOption}
                                    </button>
                                ))}
                            </div>
                            <p>NOON</p>
                            <div className='container'>
                                {timeNoon.map((timeOption, index) => (
                                    <button
                                        key={index}
                                        className='start-btn'
                                        onClick={() => {
                                            displayDateAndTime(date, timeOption);
                                            handleTimeSlotSelection('noon');
                                        }}
                                    >
                                        {timeOption}
                                    </button>
                                ))}
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
}

export default Calendar;












