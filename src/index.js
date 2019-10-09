const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let letter = '';
    let l = '';
    let res = '';
    for (let i = 0; i < expr.length; i+=10) {
        letter = expr.slice(i, i + 10);
        l = '';
        if (letter == '**********') {
            res += ' ';
        } else {
            for (let j = 0; j < letter.length - 1; j+=2) {
                if (letter[j] + letter[j+1] == '10') {
                    l += '.'
                }
                if (letter[j] + letter[j+1] == '11') {
                    l += '-'
                }
            }
            res += MORSE_TABLE[l];
        }
    }
    return res; 
}

module.exports = {
    decode
}