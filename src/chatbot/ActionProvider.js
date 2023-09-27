import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useHistory } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const history = useHistory();

  const initialAction = () => {
    const message = createClientMessage('Got it!', { isUser: true });
    updateState(message);

    setTimeout(() => {
      displayCalendar();
    }, 100);

  }

  const displayCalendar = () => {
    const message = createChatBotMessage(
      'Please select a date from the calendar strip', {
      widget: 'calendar'
    });
    updateState(message);
  }


  const displayDateAndTime = (selectedDate, formattedDay, selectedTime) => {
    if (selectedDate && selectedTime) {
      const message = createClientMessage(`${selectedDate}, ${formattedDay} ${selectedTime}`,
        { isUser: true });
      updateState(message);

      setTimeout(() => {
        nameMessage();
      }, 100);
    }
  };

  const nameMessage = () => {
    const message = createChatBotMessage("Enter your Name", { isUser: true });
    updateState(message, "age");
  }

  const ageMessage = () => {
    const message = createChatBotMessage("Enter your age", {
      widget: 'age',
      isUser: true
    });
    updateState(message, "thank");

  }

  const displayAge = (selectedNumber) => {
    if (selectedNumber) {
      const message = createClientMessage(`${selectedNumber}`);
      updateState(message);

      setTimeout(() => {
        thankYouMessage();
      }, 100);
    }
  }

  const thankYouMessage = () => {
    const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit");
    updateState(message);

    let countdown = 5;
    const updateCountdown = () => {
      if (countdown >= 1) {
        const message = createChatBotMessage(`${countdown}...`);
        countdown--;
        updateState(message);

        // Schedule the next update after 1 second (1000 milliseconds)
        setTimeout(updateCountdown, 1000);
      } else {
        history.push('/exit');
      }
    }
    updateCountdown();


  }


  const updateState = (message, checker) => {
    setState((prev) => {
      localStorage.setItem('chatMessages', JSON.stringify([...prev.messages, message]));

      return {
        ...prev,
        messages: [...prev.messages, message],
        checker,
      };
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            displayCalendar,
            displayDateAndTime,
            nameMessage,
            ageMessage,
            displayAge,
            thankYouMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;



