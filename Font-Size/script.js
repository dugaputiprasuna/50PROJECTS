const container = document.querySelector('.container')
const fontsizelabel = document.querySelector('.fontsizelabe')

const fontsize = document.getElementById("fontsize")
// getSize()



const up = document.getElementById("up")
const down = document.getElementById("down")

let maxVal = 10, minVal = 5;
const valueEle = document.getElementById('value');
valueEle.textContent = minVal;

function increment(){
    const val = Number(valueEle.textContent);
    if(val < maxVal){
        valueEle.textContent = val + 1;
        if((val + 1) === maxVal){
            up.setAttribute('disabled', true);
        } else if((val + 1) < maxVal){
            down.removeAttribute('disabled');
        }
    }
}

function decrement(){
    const val = Number(valueEle.textContent);
    if(val > minVal){
        valueEle.textContent = val - 1;
        if((val - 1) === minVal){
            down.setAttribute('disabled', true);
        }else if((val - 1) > minVal){
            up.removeAttribute('disabled');
        }
    }
}

up.addEventListener('click', () => {
    increment();
});

down.addEventListener('click', () => {
    decrement();
});

