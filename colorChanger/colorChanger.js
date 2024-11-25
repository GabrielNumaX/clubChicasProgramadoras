const btn = document.getElementById('myBtn');
const changer = document.getElementById('colorChanger');
let isChanging = false;
let bgValue = 0;
let interval;

const start = () => {
    isChanging = !isChanging;
    btn.innerText = isChanging ? "Stop" : "Start";

    if(isChanging) {

        interval = setInterval(() => {

            bgValue = bgValue + 6;
            const newVal = `hsl(${bgValue}, 100%, 50%)`;
            
            changer.style.background = newVal;
        }, 100);
        return;
    }

    clearInterval(interval);
    interval = null;
}


