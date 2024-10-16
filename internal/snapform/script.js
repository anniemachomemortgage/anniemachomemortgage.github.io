// Wednesday, October 16, 2024 @ 02:51:35 PM

var currentQuestion = 0;
showQuestion(currentQuestion);
function showQuestion(n) {
    var x = document.getElementsByClassName("tab");
    x[n].classList.add("tab-display");
    trackingProgressMeter(n)
}
function questionToggle(n) {
    let currentActiveTargetName = event.target.name;
    currentQuestion = currentQuestion + n;
    showQuestion(currentQuestion);
    window.scrollTo(0,document.body.scrollHeight);
    var i, x = document.getElementsByName(currentActiveTargetName);
    for (i = 0; i < x.length; i++) {
        x[i].removeAttribute("onclick")
    }
}
function trackingProgressMeter(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("indicator", "prevind");
    }
    x[n-1].classList.add("indicator");
}
function formHandling() {
    event.preventDefault();
    let currentActiveTargetName = event.target.id;
    console.log(currentActiveTargetName);
    document.getElementById("submit-lead").setAttribute("disabled", "true");
    document.getElementById("on-submit").classList.remove("hidden-conditional-status");
}