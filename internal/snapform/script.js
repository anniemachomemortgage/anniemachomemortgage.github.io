function ready(fn) {
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		setTimeout(fn, 1);
		document.removeEventListener('DOMContentLoaded', fn);
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
ready(function() {
    const selectionFoundHome = document.querySelectorAll('input[name="found-home"]');
    [].forEach.call(selectionFoundHome, function (item, index) {
    item.addEventListener("change", () => {
        let value = item.value
        console.log(value)
        if (value === "yes") {
            document.getElementById("offer-house-toggle").classList.remove("hidden-conditional-status");
        } else {
            document.getElementById("offer-house-toggle").classList.add("hidden-conditional-status");
        }
    });
    });
    const selectionHomeSelling = document.querySelectorAll('input[name="home-selling"]');
    [].forEach.call(selectionHomeSelling, function (item, index) {
        item.addEventListener("change", () => {
            let value = item.value
            console.log(value)
            if (value === "yes") {
                document.getElementById("home-sale-toggle").classList.remove("hidden-conditional-status");
            } else {
                document.getElementById("home-sale-toggle").classList.add("hidden-conditional-status");
            }
        });
    });
})
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