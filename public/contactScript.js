function checkname() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let regix = /[^a-zA-Z]/gi;

    if (fname == "") {

        document.getElementById("invalidfname").innerHTML = "EMPTY INPUT!";

    } else if (fname.match(regix) || fname == "") {
        let invalid = "* Invalid Input! Special Characters and Numbers are not allowed."
        document.getElementById("invalidfname").innerHTML = invalid;

    } else {

        document.getElementById("invalidfname").innerHTML = "";


    }

    if (lname == "") {

        document.getElementById("invalidlname").innerHTML = "EMPTY INPUT!";

    } else if (lname.match(regix)) {
        let invalid = "* Invalid Input! Special Characters and Numbers are not allowed."
        document.getElementById("invalidlname").innerHTML = invalid;

    } else {

        document.getElementById("invalidlname").innerHTML = "";


    }

}

function checkemail() {

    let email = document.getElementById("email").value;
    let regix = /[a-zA-Z0-9]+[.|_]{0,1}[a-zA-Z0-9]+@[a-zA-z]+.com/;
    let invalid = "* Invalid Input! Email not allowed."


    if (email == "") {
        document.getElementById("invalidemail").innerHTML = "EMPTY INPUT!"
    } else if (!email.match(regix)) {

        document.getElementById("invalidemail").innerHTML = invalid;

    } else {


        document.getElementById("invalidemail").innerHTML = "";


    }
}

function checknumber() {
    let number = document.getElementById("no").value;
    let regix = /[+]{1}[0-9]+/;
    let invalid = "Invalid Input!Number must be like +9214353454";


    if (number == "") {

        document.getElementById("invalidno").innerHTML = "EMPTY INPUT!"
    } else if (!number.match(regix)) {

        document.getElementById("invalidno").innerHTML = invalid;

    } else {


        document.getElementById("invalidno").innerHTML = "";


    }
}

function checkcomments() {

    let comment = document.getElementById("comments").value;
    if (comment == "") {

        document.getElementById("invalidcomment").innerHTML = "* EMPTY COMMENT SECTION! ";

    } else {


        document.getElementById("invalidcomment").innerHTML = "";


    }



}