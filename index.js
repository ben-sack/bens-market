// Loader

// window.onload = function() {
//     const loader = document.querySelector(".loader");
//     loader.classList.add('loader-hidden');
// }

function loader() {

    setTimeout(function(){
        const loader = document.querySelector(".loader");
        loader.classList.add('loader-hidden');
        
        document.querySelector("body").style.visibility = "visible"
    }, 2000)

}

// Get Time
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 100);

  