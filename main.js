const textEl = document.getElementById("text");
const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");

function countChar() {
    let count = textEl.value;
    return count.length;
}

function remainingChar() {
    let r = textEl.getAttribute("maxlength") - countChar();
    return r;
}

function realTimeCounter() {
    // console.log(countChar());
    // console.log(remainingChar());
   totalEl.innerText = countChar();
   remainingEl.innerText = remainingChar();
   localStorage.setItem("text", textEl.value);
   textEl.value = localStorage.getItem("text");
}

textEl.value = localStorage.getItem("text");
textEl.addEventListener("keyup", realTimeCounter)
realTimeCounter();

