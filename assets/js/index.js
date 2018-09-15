// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, options);
// });

// // var instance = M.Carousel.getInstance(elem);
var aboutbtn = document.getElementById('aboutbtn');
var projbtn = document.getElementById('projbtn');


aboutbtn.addEventListener("click", function (event) {
    document.querySelector('#abtme').scrollIntoView({
        behavior: 'smooth',
    });
});

projbtn.addEventListener("click", function (event) {
    document.getElementById('project').scrollIntoView({
        behavior: 'smooth'
    });
})



document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
})