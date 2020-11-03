window.addEventListener ("load", main);

//fick fram allt av detta
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
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    
    hours = formateDateCounter(hours); 
    minutes = formateDateCounter(minutes); 
    seconds = formateDateCounter(seconds); 
    //detta över ersätter det under
    // if (hours < 10) {
        //     hours = '0' + seconds;
        // }
        // if (minutes < 10) {
            //     minutes = '0' + seconds;
            // }
        // if (seconds < 10) {
            //     seconds = '0' + seconds;
            // }
    
    //Uptade time
    const timeHolder = document.getElementById('time');
    timeHolder.innerHTML = hours + ':' + minutes + ':' + seconds;

    //Update weekday
    const weekdayHolder = document.getElementById('weekday'); 
    weekdayHolder.innerHTML = getWeekday(date); 

    //update month
    const monthHolder = document.getElementById('month'); 
    monthHolder.innerHTML = getMonthString(date);
}

function getWeekday(date) {
    const weekdayIndex = date.getDay(); 
    switch (weekdayIndex) {
        case 0: return 'Söndag'
        case 1: return 'Måndag'
        case 2: return 'Tisdag'
        case 3: return 'Onsdag'
        case 4: return 'Torsdag'
        case 5: return 'Fredag'
        case 6: return 'Lördag'
    }
}

function getMonthString(date) {
    const dayOfMonth = date.getDate(); 
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + ' ';
    switch (monthIndex) {
        case 0: return prefix + 'Januari'; 
        case 1: return prefix + 'Februari'; 
        case 2: return prefix + 'Mars'; 
        case 3: return prefix + 'April'; 
        case 4: return prefix + 'Maj'; 
        case 5: return prefix + 'Juni'; 
        case 6: return prefix + 'Juli'; 
        case 7: return prefix + 'Augusti'; 
        case 8: return prefix + 'September'; 
        case 9: return prefix + 'Oktober'; 
        case 10: return prefix + 'November'; 
        case 11: return prefix + 'December'; 
    }
}

function formateDateCounter(counter) {
    if (counter < 10) {
        return '0' + counter; 
    }
    return counter;
}
