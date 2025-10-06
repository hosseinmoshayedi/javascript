var flag = true;
function funLogin() {
    if (flag) {
        var box = document.querySelector('.active');
        box.classList.toggle("fade");
        const timer = setTimeout(() => {
            var boxList = document.querySelectorAll('.inner-footer')
            for (let box of boxList) {
                box.classList.toggle("active");
            }
            var divList = document.querySelectorAll('.item');
            for (let div of divList) {
                div.classList.toggle("div-active");
            }
            const timer2 = setTimeout(() => {
                box = document.querySelector('.active');
                box.classList.toggle("fade");
            }, 250);
        }, 250);
        flag = false;
    }
}

function funSignup() {
    if (!flag) {
        var box = document.querySelector('.active');
        box.classList.toggle("fade");
        const timer = setTimeout(() => {
            var boxList = document.querySelectorAll('.inner-footer')
            for (let box of boxList) {
                box.classList.toggle("active");
            }
            var divList = document.querySelectorAll('.item');
            for (let div of divList) {
                div.classList.toggle("div-active");
            }
            const timer2 = setTimeout(() => {
                box = document.querySelector('.active');
                box.classList.toggle("fade");
            }, 250);
        }, 250);
        flag = true;
    }
}