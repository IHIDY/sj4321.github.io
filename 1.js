let date = new Date();
let quote = document.querySelector('h2');

let showDate = function () {
    quote.addEventListener('click', function (event) {
        if (quote.className == "Q") {
            quote.className = 'D';
            quote.innerText = date;
            quote.style.color = "red";
        } else {
            quote.className = 'Q';
            quote.innerText = "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein";
            quote.style.color = "black";
        }
    })
}

let submit_btn = document.getElementById('submit');
let message = document.getElementById('result-message');

let ss_notification = function () {
    submit_btn.addEventListener('click', function (event) {
        message.innerHTML = "<strong>Submited Successful<strong>";
        message.style.color = 'red';
    })
}

export {
    showDate,
    ss_notification
}