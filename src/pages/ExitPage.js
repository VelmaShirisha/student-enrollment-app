import { useHistory } from 'react-router-dom';

const ExitPage = () => {
    const history = useHistory();

    const handleExitClick = () => {
        history.push('/welcome');
    };

    const storedMessages = JSON.parse(localStorage.getItem('chatMessages'));

    const nameMessage = storedMessages.find((message, index, array) => {
        const isBotMessage = message.type === 'bot' && message.message === 'Enter your Name';

        const isNextUserMessage =
            array[index + 1]?.type === 'user' && array[index + 1]?.message.trim() !== '';
            return isBotMessage && isNextUserMessage;
    });

    const ageMessage = storedMessages.find((message) => message.type === 'user' && !isNaN(message.message));

    // Extract the name and age values
    const name = nameMessage ? storedMessages[storedMessages.indexOf(nameMessage) + 1]?.message : '';
    const age = ageMessage ? ageMessage.message : '';

    return (
        <div className='page'>
            <h2>{`Your name ${name} aged ${age} has been added to the student system. You may now exit.`}</h2>
            <button onClick={handleExitClick}>Exit</button>
        </div>
    );
};

export default ExitPage;