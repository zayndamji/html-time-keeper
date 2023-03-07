updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  const date = new Date();
  document.getElementById('time').textContent = formatAMPM(date);
  document.getElementById('date').textContent = formatDay(date);
}

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

function formatDay(d) {
  let day = d.getDay();
  let month = d.getMonth();
  let date = d.getDate();
  let year = d.getFullYear();

  day = day == 6 ? 'Saturday' :
    day == 5 ? 'Friday' :
      day == 4 ? 'Thursday' :
        day == 3 ? 'Wednesday' :
          day == 2 ? 'Tuesday' :
            day == 1 ? 'Monday' :
              day == 0 ? 'Sunday' :
                'Day';

  month = month == 11 ? 'December' :
    month == 10 ? 'November' :
      month == 9 ? 'October' :
        month == 8 ? 'September' :
          month == 7 ? 'August' :
            month == 6 ? 'July' :
              month == 5 ? 'June' :
                month == 4 ? 'May' :
                  month == 3 ? 'April' :
                    month == 2 ? 'March' :
                      month == 1 ? 'February' :
                        month == 0 ? 'January' :
                          'Month';

  return `${day}, ${month} ${date}, ${year} (PST)`;
}