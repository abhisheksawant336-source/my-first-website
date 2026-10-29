
function showMessage() {
    document.getElementById("message1").innerHTML =
        "My Name is Abhishek Sawant!";

    document.getElementById("message1").style.color = "red";
    document.getElementById("message1").style.backgroundColor = "yellow";
    document.getElementById("message1").style.fontSize = "20px";
    document.getElementById("message1").style.fontWeight = "bold";

    document.getElementById("btn2").style.backgroundColor = "green";
}

function openlinkedin() {
    window.open(
        "https://www.linkedin.com/in/abhishek-sawant-72910125b/",
        "_blank"
    );

    document.getElementById("btn1").style.backgroundColor = "green";
    
}
function showproject(){
    document.getElementById("message2").innerHTML=
    "My Project - Coming Soon!";
    document.getElementById("message2").style.color="red";
        document.getElementById("message2").style.fontWeight = "bold";
            document.getElementById("message2").style.backgroundColor = "yellow";


}