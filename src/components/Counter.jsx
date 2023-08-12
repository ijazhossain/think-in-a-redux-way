import Button from "./Button";

/* eslint-disable react/prop-types */
const Counter = ({ id, increment, decrement, count }) => {

    return (
        <div>
            <div
                className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div className="text-2xl font-semibold">{count}</div>
                <div className="flex space-x-3">
                    <Button handler={() => increment(id)}>Increment</Button>
                    <Button handler={() => decrement(id)}>Decrement</Button>
                </div>
            </div>
        </div>
    );
};

export default Counter;