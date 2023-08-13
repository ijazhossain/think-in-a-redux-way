const counterEl = document.getElementById('counterEl');
const increaseBtn = document.getElementById('increment');
const decreaseBtn = document.getElementById('decrement');

// action identifier
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}
// initial state
const initialState = {
    value: 0,
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - action.payload,
        }
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

// render function
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}
render();

// subscribe to store
store.subscribe(render)

// add event listener or action
increaseBtn.addEventListener('click', () => {
    store.dispatch(increment(5));
});
decreaseBtn.addEventListener('click', () => {
    store.dispatch(decrement(2));
});