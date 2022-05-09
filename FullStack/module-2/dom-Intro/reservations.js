const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}


function checkReservation() {
    var x = document.getElementById("res").value;

    if (x in reservations) {
        if(reservations[x].claimed == false)
        {
            document.getElementById("msg").innerHTML = "welcome, "+ x;
        }
        else{
            document.getElementById("msg").innerHTML =  x+ " Hmm, someone already claimed this reservation";
        }

    }
    else{
        document.getElementById("msg").innerHTML = "Hi " +x+ ", You have no reservation"
    }
    


}