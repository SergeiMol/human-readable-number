module.exports = function toReadable(number) {
    const hashTable = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };


    const hundreds = Math.trunc(number / 100);
    const decades = Math.trunc((number - hundreds * 100) / 10);
    const ones = number % 10;

    if (number === 0) {
        return 'zero';
    };

    if (number <= 20) {
        return hashTable[number];
    };

    if (number < 100) {
        if (number % 10 === 0) {
            return hashTable[decades * 10];
        }
        return (hashTable[decades * 10] + ' ' + hashTable[ones])
    };

    if ((decades * 10) < 20) {
        if (number % 100 === 0) {
            return (hashTable[hundreds] + ' hundred');
        }
        return (hashTable[hundreds] + ' hundred ' + hashTable[(decades * 10) + ones]);
    }

    if ((number - hundreds * 100) % 10 === 0) {
        return (hashTable[hundreds] + ' hundred ' + hashTable[(decades * 10)]);
    }
    else {
        return (hashTable[hundreds] + ' hundred ' + hashTable[(decades * 10)] + ' ' + hashTable[ones]);
    }





}

