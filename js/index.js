// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

if (isChrome == true) {
    document.getElementById('hope').innerHTML = '<audio controls autoplay muted><source src="./mp3/drip.mp3" type="audio/mpeg"></audio>'
}else(
    document.getElementById('hope').innerHTML = '<audio controls autoplay><source src="./mp3/drip.mp3" type="audio/mpeg"></audio>'
)