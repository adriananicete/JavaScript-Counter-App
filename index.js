const countLabel = document.querySelector('#countLabel');
const decreaseBtn = document.querySelector('#decreaseBtn');
const resetBtn = document.querySelector('#resetBtn');
const increaseBtn = document.querySelector('#increaseBtn');

let count = 0;

increaseBtn.onclick = function() {
    count++;

    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;

    if(count < 0){
        count = 0;
    }

    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;

    countLabel.textContent = count;
}