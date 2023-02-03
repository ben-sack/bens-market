
// Get Time

// function refreshTime() {
//   const timeDisplay = document.getElementById("time");
//   const dateString = new Date().toLocaleTimeString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
// }
// setInterval(refreshTime, 1000);

// Get Location
// function getlocation() {
//     const location = document.querySelector('#location');

//     if (!navigator.geolocation) {
//         location.textContent = `N/A`;
//         location.classList.add('error');
//         return;
//     }

//     navigator.geolocation.getCurrentPosition(onSuccess, onError);

//     // handle success case
//     function onSuccess(position) {
//         const {
//             latitude,
//             longitude
//         } = position.coords;

//         location.classList.add('success');
//         location.textContent = `(${latitude}, ${longitude})`;
//     };

//     // handle error case
//     function onError() {
//         location.classList.add('error');
//         location.textContent = `n/a`;
//     };

// }
// getlocation()
// Loader
function loader() {

    setTimeout(function(){
        const loader = document.querySelector("#loader");
        loader.classList.add('loader-hidden');
        
        document.querySelector("body").style.visibility = "visible"
    }, 2500)

}


/*  play button */
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const playBtn = document.querySelector(".circle__btn");
const wave1 = document.querySelector(".circle__back-1");
const wave2 = document.querySelector(".circle__back-2");

/*  play button  */
playBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pause.classList.toggle("visibility");
    play.classList.toggle("visibility");
    playBtn.classList.toggle("shadow");
    wave1.classList.toggle("paused");
    wave2.classList.toggle("paused");
});


function toggleMusic () {
    var audio = document.getElementById('track');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    
};

// var audio = document.getElementById('track');
// audio.play();


// Video Play

var vid = document.getElementById("bgvid");

function toggleVid() {
    if (vid.paused) {
        console.log("video is stopped");
        vid.play()
    } else {
        console.log("video is playing");
        vid.pause();
    }
    
}

var theToggle = document.getElementById("toggle");

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += " " + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  } else {
    elem.className += " " + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, "on");
  return false;
};
