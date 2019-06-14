    function startgame() {



    let randomNumer = 19 + Math.floor(Math.random() * 120);
    console.log(randomNumer);

    let crystalOne = 1 + Math.floor(Math.random() * 12);
    console.log(crystalOne);

    let crystalTwo = 1 + Math.floor(Math.random() * 12);
    console.log(crystalTwo);

    let crystalThree = 1 + Math.floor(Math.random() * 12);
    console.log(crystalThree);

    let crystalFour = 1 + Math.floor(Math.random() * 12);
    console.log(crystalFour);

    counter = 0;
    
    
    
    $(".score").text(counter);
    $(".randomnumber").text(randomNumer);
    

};

let wins = 0;
let losses = 0;
// let score = 0;
let counter = 0;




let randomNumer = 19 + Math.floor(Math.random() * 120);
console.log(randomNumer);

let crystalOne = 1 + Math.floor(Math.random() * 12);
console.log(crystalOne);

let crystalTwo = 1 + Math.floor(Math.random() * 12);
console.log(crystalTwo);

let crystalThree = 1 + Math.floor(Math.random() * 12);
console.log(crystalThree);

let crystalFour = 1 + Math.floor(Math.random() * 12);
console.log(crystalFour);


    $(".score").text('0');
    $(".randomnumber").text(randomNumer);


    $("#crystalone").on("click", function () {
        counter + crystalOne;
        $(".score").text(counter += crystalOne);
        // $("#firstcrystal").text(crystalOne);
        checker();
    });
    $("#crystaltwo").on("click", function () {
        counter + crystalTwo;
        $(".score").text(counter += crystalTwo);
        // $("#secondcrystal").text(crystalTwo);
        checker();
    });
    $("#crystalthree").on("click", function () {
        counter + crystalThree;
        $(".score").text(counter += crystalThree);
        // $("#thirdcrystal").text(crystalThree);
        checker();
    });
    $("#crystalfour").on("click", function () {
        counter + crystalFour;
        $(".score").text(counter += crystalFour);
        // $("#fourthcrystal").text(crystalFour);
        checker();
    });

    function checker() {


        if (counter > randomNumer) {
            losses++;
            $("#losses").text("Losses:" + losses);
            startgame();
            // counter= 0;
        }


        else if (counter === randomNumer) {
            wins++;
            $("#wins").text("wins:" + wins);
            startgame();
            console.log("it's working");
        //    counter= 0;
        }


    };








// startgame();



// function reset() 



//     let randomNumer = 1 + Math.floor(Math.random() * 500);
//     console.log(randomNumer);

//     let crystalOne = 5 + Math.floor(Math.random() * 20);
//     console.log(crystalOne);

//     let crystalTwo = 8 + Math.floor(Math.random() * 12);
//     console.log(crystalTwo);

//     let crystalThree = 1 + Math.floor(Math.random() * 22);
//     console.log(crystalThree);

//     let crystalFour = 20 + Math.floor(Math.random() * 50);
//     console.log(crystalFour);


//     $(".randomnumber").on("click").text(randomNumer);
//     startgame();

// };

// checker();
// reset();









