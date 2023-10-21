
document.addEventListener("DOMContentLoaded", function (event) {
    var classname = document.getElementsByClassName("gogdm");
    for (var i = 0; i < classname.length; i++) {
        //click gauche
        classname[i].addEventListener('click', myFunction, false);
        //click droit
        classname[i].addEventListener('contextmenu', myRightFunction, false);
    }
});
//fonction du click gauche
var myFunction = function (event) {
    var attribute = this.getAttribute("data-goto");
    if (event.ctrlKey) {
        var newWindow = window.open(decodeURIComponent(window.atob(attribute)), '_blank');
        newWindow.focus();
    } else {
        document.location.href = decodeURIComponent(window.atob(attribute));
    }
};
//fonction du click droit
var myRightFunction = function (event) {
    var attribute = this.getAttribute("data-goto");
    if (event.ctrlKey) {
        var newWindow = window.open(decodeURIComponent(window.atob(attribute)), '_blank');
        newWindow.focus();
    } else {
        window.open(decodeURIComponent(window.atob(attribute)), '_blank');
    }
}