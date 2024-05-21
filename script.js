window.onload = function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var station = document.getElementById('station');

  station.style.display = 'block';

  station.onchange = function() {
    var selectedStation = this.value;
    var audioSource = document.getElementById('audioSource');

    if (selectedStation === 'kokkino') {
      audioSource.src = 'http://stream.radiojar.com/red-source';
    } else if (selectedStation === 'sfera') {
      audioSource.src = 'https://sfera.live24.gr/sfera4132';
    } else if (selectedStation === 'rebel') {
      audioSource.src = 'https://netradio.live24.gr/rebel1052';
    } else if (selectedStation === 'soft') {
      audioSource.src = 'https://ice.onestreaming.com/softfm';
    } else if (selectedStation === 'real') {
      audioSource.src = 'https://realfm.live24.gr/realfm';
    } else if (selectedStation === 'menta') {
      audioSource.src = 'https://netradio.live24.gr/menta88ath'; 
    } else if (selectedStation === 'lovefm') {
      audioSource.src = 'http://loveradio.live24.gr/loveradio-1000';   
    } else {
      audioSource.src = '';
    }

    audioPlayer.style.display = selectedStation ? 'block' : 'none';
    audioPlayer.load();
    audioPlayer.play();
  };
};

setInterval(displayTime, 1000);

function displayTime() {
  const timeNow = new Date();

  var day = timeNow.getDate()
  let hoursOfDay = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let today = weekDay[timeNow.getDay()];
  let months = timeNow.toLocaleString("eng", {
    month: "long"
  });
  let year = timeNow.getFullYear();
  let period = " AM";

  if (hoursOfDay > 12) {
    hoursOfDay-= 12;
    period = " PM";
  }

  if (hoursOfDay === 0) {
    hoursOfDay = 12;
    period = " AM";
  }

  hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById('Clock').innerHTML = hoursOfDay + ":" + minutes + ":" + seconds + period ;
  document.getElementById('Day').innerHTML = today + ", " + months + " " + day + ", " + year;
}

function clock() {
  var date = new Date()
  var day = date.getDay()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  if (hour < 10) {hour = "0" + hour}
  if (minute < 10) {minute = "0" + minute}
  if (second < 10) {second = "0" + second}
  document.title = hour + ":" + minute + ":" + second
  setTimeout(clock, 1000)
}

function fullscreen() {
  var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  if (!isInFullScreen) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

displayTime();
clock();
fullscreen(); 
