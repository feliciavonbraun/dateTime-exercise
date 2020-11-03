window.addEventListener ("load", main);

// function getDateAndDay() {
//     var currentTime = new Date(); 
//     document.getElementById('time').innerHTML = currentTime.toDateString();
//     console.log('test')
// }


function main() {
    startClock();
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock(){
    const timeHolder = document.getElementById('time');
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    hours = formateDateCounter(hours); 
    minutes = formateDateCounter(minutes); 
    seconds = formateDateCounter(seconds); 
    // if (hours < 10) {
    //     hours = '0' + seconds;
    // }
    // if (minutes < 10) {
    //     minutes = '0' + seconds;
    // }
    // if (seconds < 10) {
    //     seconds = '0' + seconds;
    // }

    timeHolder.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function formateDateCounter(counter) {
    if (counter < 10) {
        return '0' + counter; 
    }
    return counter;

}
