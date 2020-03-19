const UNITS = {
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
}

const DOZENS = {
   20: 'twenty',
   30: 'thirty',
   40: 'forty',
   50: 'fifty',
   60: 'sixty',
   70: 'seventy',
   80: 'eighty',
   90: 'ninety',
}

module.exports = function toReadable(number) {
   let result = '';
   if (number == 0) {
      return 'zero';
   }
   if (number % 100 != number) {
      let hundredsNumber = Math.floor(number / 100);
      result = (convertUnitsToReadable(hundredsNumber) + ' hundred').trim();
      number = number - hundredsNumber * 100;
   }
   if (number > 19) {
      let dozensNumber = Math.floor(number / 10) * 10;
      result = convertDozensToReadable(dozensNumber).trim();
      number = number - dozensNumber;
   }
   if (number != 0) {
      result = convertUnitsToReadable(number).trim();
   }

   return result;

   function convertUnitsToReadable(number) {
      for (let key in UNITS) {
         if (key == number) {
            result = result + ' ' + UNITS[key];
         }
      }
      return result;
   }

   function convertDozensToReadable(number) {
      for (let key in DOZENS) {
         if (key == number) {
            result = result + ' ' + DOZENS[key];
         }
      }
      return result;
   }
}

