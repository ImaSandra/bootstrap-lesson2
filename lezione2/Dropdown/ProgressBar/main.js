// let elem = document.getElementsByClassName ("progress-bar");
// let width  = 10;
// let id = setInterval(frame, 10);
// function frame (){
//     if (width <=100){
//         clearInterval(id);
//         i = 0;
//     }else{
//         width ++;
//     }
// }


// Byid gives an html
// Byclassname gives array ELEMENTS

let progressBars = $('.progress-bar');
let percentage = 10;
let interval = setInterval(function () {
    percentage ++;
    if (percentage <=100){
    progressBars.css('width', percentage +'%' );
} else {
    clearinterval(interval);

}
}, 500);