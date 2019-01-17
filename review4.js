function main() {

    // ### Problem 1:
// Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all
// caps.
//     Hint: see toUppercase()
//
// ex. ```in a galaxy far far away``` -> ```in A galaxy FAR far AWAY```

    function problem1() {

        var words = [];

        function oddTalk() {
            var entry = prompt('Enter a sentence');

            words = entry.split(' ');
            //words.push(entry);
            return words
        }




        //console.log(entry.toUpperCase())
        words = oddTalk();

        for(let s = 0; s < words.length; s++){
            let word = words[s];
            if(s%2===0) {
                word = word.toUpperCase();
            }
            console.log(word);
        }


    }

problem1();

//Man I gotta get faster at these.

// ### Problem 2:
//     Write a JavaScript function that accepts a word in all lowercase or in all uppercase,
//         and returns the word in the opposite case.
//     Hint: see toLowercase()
//
//     ex. ```hello``` -> ```HELLO``` or ```HOWDY``` -> ```howdy```

    function problem2() {

        var word = '';

        var request = prompt('Enter a word');

        var uppy = word.toUpperCase();
        var minny = word.toLowerCase();

        function opposite() {
            if(request == uppy){

                return request.toLocaleLowerCase();
            }
            if(request == minny){
                return request.toUpperCase();
            }
        }
        console.log(opposite());

    }
problem2();


// ### Problem 3:
//
// #### Return first n number of elemnts
//
//     Write a JavaScript function to get the first n element(s) of an array. Passing a parameter 'n' will
//     return the first 'n' elements of the array.
//
//         ex:
//     ```
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],1));
// ```
//     Expected Output :
//         ```
// [7, 9, 0]
// [7]
// ```
// #### Return last n number of elements
//
//     Write a JavaScript function to get the last n element(s) of an array. Passing a parameter 'n' will
//     return the last 'n' elements of the array.
//
//         ex:
//     ```
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// ```
//     Expected Output :
//         ```
// [9, 0, -2]
// [7, 9, 0, -2]
// ```
//

    function problem3() {



    }





}

main();
