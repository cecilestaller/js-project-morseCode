// AUFGABE: - Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann.

let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }

];


const encrypt = () => {
    const textInput = document.body.querySelector('#text-input').value.toUpperCase();
    const morseOutput = document.body.querySelector('#morse-output');
    
    let morseText = "";

    // console.log(textInput);

    // ========  Möglichkeit 1: mit for-of loops -->

    // for(const singleChar of textInput){  
    //     console.log(singleChar);
    //     for(const objekt of morseAlphabet){  // für objekte sollte for of methode genutzt werden
    //         // console.log(objekt);
    //         if(singleChar === objekt.letter){
    //             morseText += objekt.morseCode;
    //         }
    //     }
    // }

    // ======= Alternative: mit normalen for loops

    // 1. loop iteriert alle buchstaben des strings
    for (i = 0; i < textInput.length; i++){
        // console.log(textInput[i]);
        // 2. loop iteriert alle objekte des morsealphabets
        for(j = 0; j < morseAlphabet.length; j++){
            // console.log(j);
            if( textInput[i] === morseAlphabet[j].letter){
                morseText += morseAlphabet[j].morseCode;
            }
        }
    }


    console.log(morseText);
    morseOutput.textContent = morseText;
}