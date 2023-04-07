let date = new Date();
let quote = document.querySelector('h2');

let showDate = function () {
    quote.addEventListener('click', function (event) {
        console.log(0);
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

showDate();

// export {
//     showDate,
//     ss_notification
// }

