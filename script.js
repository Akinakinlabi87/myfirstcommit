function displayTime() {
    var datetime = new date();
    var hrs = daretime.gethours();
    var min = daretime.getminutes();
    var sec = daretime.getseconds();
    var session = document.getElementById('session');

    if(hrs >=12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if (hrs >12)
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(displayTime, 10);