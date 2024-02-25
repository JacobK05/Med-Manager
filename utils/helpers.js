module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
  };
  
  // const today = dayjs()
  // $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
  //   var currentHour = (dayjs().hour())

  //   setInterval(myTime, 1000);
  //   function myTime() {
  //     const d = new Date();
  //     document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
  //   }   