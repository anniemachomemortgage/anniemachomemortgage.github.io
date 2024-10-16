// Wednesday, October 16, 2024 @ 04:01:51 PM
// Last update log: 
// Smooth scroll to top.
// Pushing page to top on SubmitEvent.

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
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    document.getElementById("on-submit").classList.remove("hidden-conditional-status");
}