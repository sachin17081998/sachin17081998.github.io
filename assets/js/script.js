// !java script file

// !sidenav
function open_nav(){
    var nav=document.getElementById("side_nav");
    nav.style.transform = "translateX(0vw)";
}

function close_nav(){
    var nav=document.getElementById("side_nav");
    nav.style.transform = "translateX(-50vw)";
}