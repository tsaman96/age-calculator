function AgeInDays() {
  var birthYear = prompt('What year were you born?');
  var currentyear = prompt('kindly enter the current year!');
  var AgeInDayss = (currentyear - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textanswer = document.createTextNode('You are ' + AgeInDayss + ' days old');
  h1.setAttribute('id', 'AgeInDays');
  h1.appendChild(textanswer);
  document.getElementById('flex-box-result').appendChild(h1);
}


function reset() {
  document.getElementById('flex-box-result').remove();
}

