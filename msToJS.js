//CONVERT MS TO MINUTES.SECONDS
function msToMAndS(milliseconds) {
    let minutes = Math.round(milliseconds / 60000);
    let seconds = Math.round((milliseconds) / 100);
    let minWord = "minute";
    if(minutes > 1){
        minWord += "s";
    }
    return minutes + "." + (seconds < 10 ? '0' : '') + Math.floor(seconds / 1000) + " " +  minWord;
}
//CONVERT MS TO HOURS
function msToHours(milliseconds){
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24).toString();
    let hoursWord = "hour"
    if(hours > 1){
        hoursWord += "s";
    }
    return hours + " " + hoursWord;
}
//CONVERT MS TO DAYS
function msToDays(milliseconds){
    let days = (milliseconds / (1000 * 60 * 60 * 24)).toFixed(1);
    let daysWord = "day";
    if(days > 1){
        daysWord += "s";
    }
    return days + " " + daysWord;
}
//CONVERT MS TO SECONDS
function msToSeconds(milliseconds){
    let seconds = (milliseconds / 1000).toFixed(1);
    let secWord = "second";
    if(milliseconds > 1){
        seconds += "s";
    }
    return seconds + " " + secWord;
}
