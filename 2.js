let images = ["img/personal_pic.jpg", "img/with_mom2.jpg", "img/hometown.jpg", "img/halifax.jpg"];
let lb = document.getElementById('larrow');
let rb = document.getElementById('rarrow');
let mark = 0;
let picc = document.getElementById('pic2');
let tz;

let ll = function () {
    lb.addEventListener('click', function (event) {
        mark = (mark - 1 + 4) % 4
        picc.src = images[mark];
    })
}

let rr = function () {
    rb.addEventListener('click', function (event) {
        // console.log(mark);
        mark = (mark + 1) % 4
        picc.src = images[mark];
    })
}

ll();
rr();


// export {
//     ll, rr
// }