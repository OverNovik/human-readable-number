module.exports = function toReadable (number) {
    function transfer (num) {
        switch (num) {
          case '0' : return('zero');
          case '1' : return('one');
          case '2' : return('two');
          case '3' : return('three');
          case '4' : return('four');
          case '5' : return('five');
          case '6' : return('six');
          case '7' : return('seven');
          case '8' : return('eight');
          case '9' : return('nine');
          case '10' : return('ten');
          case '11' : return('eleven');
          case '12' : return('twelve');
          case '13' : return('thirteen');
          case '14' : return('fourteen');
          case '15' : return('fifteen');
          case '16' : return('sixteen');
          case '17' : return('seventeen');
          case '18' : return('eighteen');
          case '19' : return('nineteen');
        }
      }
      
      function toTransfer (num) {
        switch (num) {
          case '1' : return('ten');
          case '2' : return('twenty');
          case '3' : return('thirty');
          case '4' : return('forty');
          case '5' : return('fifty');
          case '6' : return('sixty');
          case '7' : return('seventy');
          case '8' : return('eighty');
          case '9' : return('ninety');
        }
    }
    function dig (numeric) {
        let digit = numeric;
        if (numeric.length === 2 && numeric[0] === '0') {
            digit = numeric[1];
        if (digit < 20) {
          return transfer(digit);
        } if (digit > 19) {
          if (digit[1] !== '0') {
          return toTransfer(digit[0]) + ' ' + transfer(digit[0]);
          } else {
          return toTransfer(digit[0]);
          }
        }
      }
      }
    let result = '';
        number = number.toString();

  if (number < 100) {
      result = dig(number);
  }
  if (number > 99) {
    let newArr = number.slice(1);
    if (newArr === '00') {
        result = transfer(number[0]) + ' hundred';
    } else {
        result = transfer(number[0]) + ' hundred ' + dig(newArr);
    }
  } return result;
};
