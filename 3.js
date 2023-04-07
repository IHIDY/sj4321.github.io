let submit_btn = document.getElementById('submit');
let message = document.getElementById('result-message');

let ss_notification = function () {
    submit_btn.addEventListener('click', function (event) {
        message.innerHTML = "<strong>Submited Successful<strong>";
        message.style.color = 'red';
    })
}

ss_notification();