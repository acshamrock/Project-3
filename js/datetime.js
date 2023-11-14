function showDateTime() {
  var currentDate = new Date();

  var date = currentDate.toDateString();
  var time = currentDate.toLocaleTimeString();

  console.log('Current Date: ' + date);
  console.log('Current Time: ' + time);

  var dateElement = document.createElement('p');
  dateElement.textContent = 'Current Date: ' + date;

  var timeElement = document.createElement('p');
  timeElement.textContent = 'Current Time: ' + time;

  document.body.appendChild(dateElement);
  document.body.appendChild(timeElement);
}

window.onload = function() {
  showDateTime();
};

