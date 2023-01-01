
// Get Time

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

// Get Location
function getlocation() {
    const location = document.querySelector('#location');

    if (!navigator.geolocation) {
        location.textContent = `N/A`;
        location.classList.add('error');
        return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    // handle success case
    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        location.classList.add('success');
        location.textContent = `(${latitude}, ${longitude})`;
    };

    // handle error case
    function onError() {
        location.classList.add('error');
        location.textContent = `n/a`;
    };

}
getlocation()
// Loader
function loader() {

    setTimeout(function(){
        const loader = document.querySelector("#loader");
        loader.classList.add('loader-hidden');
        
        document.querySelector("body").style.visibility = "visible"
    }, 2500)

}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 2000,
//     reset: true
});

sr.reveal('.skills__img',{interval: 100}); 
