
let randomNumer = 1 + Math.floor(Math.random() * 100);
console.log(randomNumer);

let crystalOne = 5 + Math.floor(Math.random() * 20);
console.log(crystalOne);

let crystalTwo = 8 + Math.floor(Math.random() * 12);
console.log(crystalTwo);

let crystalThree = 1 + Math.floor(Math.random() * 22);
console.log(crystalThree);

let crystalFour = 20 + Math.floor(Math.random() * 50);
console.log(crystalFour);

let wins = 0;
let losses = 0;
let score = 0;
let counter = 0;


function startgame() {
    $(".randomnumber").text(randomNumer);


    $("#crystalone").on("click", function () {
        counter + crystalOne;
        $(".score").text(counter + crystalOne);
        
    });
    $("#crystaltwo").on("click", function () {
        counter + crystalTwo;
        $(".score").text(counter + crystalTwo);
    });
    $("#crystalthree").on("click", function () {
        counter + crystalThree;
        $(".score").text(counter + crystalThree);
    });
    $("#crystalfour").on("click", function () {
        counter + crystalFour;
        $(".score").text(counter + crystalFour);
    });
    



};
startgame();







