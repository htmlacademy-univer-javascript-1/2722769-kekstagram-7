function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  return normalizedStr === reversedStr;
}

//console.log(checkStringLength('проверяемая строка', 20));
//console.log(checkStringLength('проверяемая строка', 18));
//console.log(checkStringLength('проверяемая строка', 10));

//console.log(isPalindrome('топот'));
//console.log(isPalindrome('Довод'));
//console.log(isPalindrome('Кекс'));
