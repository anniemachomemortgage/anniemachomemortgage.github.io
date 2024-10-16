// Tuesday, October 15, 2024 @ 11:44:22 AM

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
        x[i].removeAttribute('onclick')
    }
}
function trackingProgressMeter(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("indicator", "prevind");
    }
    x[n-1].classList.add("indicator");
}
function subquestionToggle() {
    document.getElementById('offer-house-toggle').classList.remove('hidden-conditional-status');
    window.scrollTo(0,document.body.scrollHeight);
}