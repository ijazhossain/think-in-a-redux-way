import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div
                className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div className="text-2xl font-semibold">{count}</div>
                <div className="flex space-x-3">
                    <button onClick={() => { setCount((prevCount) => prevCount + 1) }}
                        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    >
                        Increment
                    </button>
                    <button onClick={() => { setCount((prevCount) => prevCount - 1) }}
                        className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;