
function validate() {

    let name = document.getElementById("name").value;
    let salary =parseInt(document.getElementById("sal").value) || 0
    let newitem = document.createElement("p")
    newitem.setAttribute("id", "msg")

    if (!document.getElementById("msg")) {
        document.getElementById("container").appendChild(newitem)
    }
    if (name.length < 2) {

        document.getElementById("msg").innerHTML = "name is missing"


    }
    else if ( salary< 10000 || salary > 16000) {

        document.getElementById("msg").innerHTML = "sal is not good"
    }
    else if (!validatePhoneNumber(document.getElementById("phone").value)) {

        document.getElementById("msg").innerHTML = "number phone is not good"


    }
    else{
        document.getElementById("msg").innerHTML="Done!!"
    }



}


function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
}