import { useState } from "react";

function Child({ message, onChange }) {

    return (
        <div>
            <h2>Child Component</h2>

            <p>{message}</p>

            <button onClick={onChange}>
                Change Message
            </button>
        </div>
    );
}

function App() {

    const [message, setMessage] = useState(
        "Hello from Parent Component"
    );

    function changeMessage() {

        setMessage(
            "Message changed using React State!"
        );

    }

    return (
        <div>

            <h1>Component Interaction</h1>

            <Child
                message={message}
                onChange={changeMessage}
            />

        </div>
    );
}

export default App;