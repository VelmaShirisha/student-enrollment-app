import { useState } from 'react'

function StartBtn(props) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const initialAction = () => {
        props.actions.initialAction();
        setButtonClicked(true);
    }

    return (
        <div>
            {!buttonClicked && (
                <button className='start-btn' onClick={() => initialAction()}>
                    Got it!
                </button>
            )}
        </div>
    )
}

export default StartBtn;
