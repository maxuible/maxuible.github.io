let input = ''
let puzzle = ''
let guessNumber = 0
let response = ''


//const allowedLetters = ['a','b','c','d','e']
generatePuzzle()

function generatePuzzle() {
    puzzle = ''
    while (puzzle.length < 5) {
        puzzle += String.fromCharCode(Math.floor(Math.random() * 5 + 65))
    }
    //console.log("puzzle made " + puzzle)


    if (guessNumber > 0) {
        for (let i = 0; i < 6; i++) {
            let row = '' + i
            for (let j = 0; j < 5; j++) {
                let rowcol = row + j
                //console.log(rowcol)
                this.document.getElementById(rowcol).innerHTML = '?'
                this.document.getElementById(rowcol).style.backgroundColor = 'grey'
            }
            //console.log(currentRowCol)
            //console.log(typeof this.document.getElementById(currentRowCol).innerHTML)



        }
        //this.document.getElementById("row").innerHTML.style.backgroundColor = 'grey'
        //this.document.getElementsByClassName('square').style.backgroundColor = 'blue'
    }
    
    guessNumber = 0
    input = ''
}


window.addEventListener('keydown', function (e) {

    if (input.length < 5) {



        if (e.key === 'a') {
            input += e.key
        }

        if (e.key === 'b') {
            input += e.key
        }

        if (e.key === 'c') {
            input += e.key
        }

        if (e.key === 'd') {
            input += e.key
        }

        if (e.key === 'e') {
            input += e.key
        }


    }
    if (e.key === 'f' && input.length === 5) {
        guess(input);
    }
    if (e.key === 'Backspace') {
        input = input.slice(0, -1);
    }

    //this.document.getElementById('Test').innerHTML = `You pressed ${e.key}`;

    update()



}, false);

function update() {


    let currentRow = '' + guessNumber

    if (guessNumber > 5) {
        console.log("SORRY TOO MANY GUESSES YOU LSOE XCDS")
        
        return -1;
    }

    for (let i =0; i < input.length;i++){
        let uinput = '-1'+i
        this.document.getElementById(uinput).innerHTML = input[i]
        // if (this.document.getElementById(uintput).innerHTML == 'undefined') { //fixes undefined
        //     this.document.getElementById(uinput).innerHTML = 'z'

        // }
    }

    for (let i = 0; i < 5; i++) {
        let currentRowCol = currentRow + i
        //console.log(currentRowCol)
        //console.log(typeof this.document.getElementById(currentRowCol).innerHTML)

        this.document.getElementById(currentRowCol).innerHTML = input[i]




        if (this.document.getElementById(currentRowCol).innerHTML == 'undefined') { //fixes undefined
            this.document.getElementById(currentRowCol).innerHTML = '?'

        }
    }
    

    //this.document.getElementById('Input').innerHTML = input

}

function guess(ginput) {
    response = ''
    //console.log(ginput)
    ginput = ginput.toUpperCase()

    if (ginput === puzzle) {
        //console.log("CONGRATULATIONSSSSSS")
        
        return 1;
    }

    if (guessNumber > 5) {

        //console.log("SORRY TOO MANY GUESSES YOU LSOE XCDS")
        return -1;
    }



    let currentRow = '' + guessNumber
    for (let i = 0; i < ginput.length; i++) {
        let currentRowCol = currentRow + i
        if (ginput[i] == puzzle[i]) {
            //response += 'o'
            this.document.getElementById(currentRowCol).style.backgroundColor = 'green'

        }
        else if (puzzle.includes(ginput[i])) {
            //response += 'i'
            this.document.getElementById(currentRowCol).style.backgroundColor = 'yellow';
        } else {
            //response += 'x'
            this.document.getElementById(currentRowCol).style.backgroundColor = 'red';
        }

    }

    for(let i =0;i<5;i++){
        let colum = '-1' +i
        this.document.getElementById(colum).innerHTML = '?'
    }

    //console.log(response)
    guessNumber++;
    input = '';

}


