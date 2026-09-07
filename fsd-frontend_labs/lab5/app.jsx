import { useState } from "react";

function Counter({ count, increase, decrease }) {
    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={increase}>+</button>

            <button onClick={decrease}>-</button>
        </div>
    );
}

function App() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>React State Management</h1>

            <Counter
                count={count}
                increase={increase}
                decrease={decrease}
            />
        </div>
    );
}

export default App;