const counterEl = document.getElementById('counterEl');
const increaseBtn = document.getElementById('increment');
const decreaseBtn = document.getElementById('decrement');

// initial state
const initialState = {
    value: 0,
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
        }
    } else {
        return state;
    }
}
// create store
const store = Redux.createStore(counterReducer)
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}
render();
store.subscribe(render)
// add event listener or action

increaseBtn.addEventListener('click', () => {
    store.dispatch({
        type: 'increment'
    });
});
decreaseBtn.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement'
    });
});