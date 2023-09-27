import { useHistory } from 'react-router-dom';

function WelcomePage() {
  const history = useHistory();

  const handleEnrollNowClick = () => {
    history.push('/chatbot');
  };

  return (
    <div className='page'>
      <h2>Enter into Student Info System</h2>
      <button onClick={handleEnrollNowClick}>Enroll Now!</button>
    </div>
  )
}

export default WelcomePage;
