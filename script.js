const counterEl = document.getElementById('counterEl');
const increaseBtn = document.getElementById('increment');
const decreaseBtn = document.getElementById('decrement');
let count = 0;
increaseBtn.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
})
decreaseBtn.addEventListener('click', () => {
    count--;
    counterEl.innerText = count;
})
const counterEl2 = document.getElementById('counterEl2');
const increaseBtn2 = document.getElementById('increment2');
const decreaseBtn2 = document.getElementById('decrement2');
let count2 = 0;
increaseBtn2.addEventListener('click', () => {
    count2++;
    counterEl2.innerText = count2;
})
decreaseBtn2.addEventListener('click', () => {
    count2--;
    counterEl2.innerText = count2;
})