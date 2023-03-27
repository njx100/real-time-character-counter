const textEl = document.getElementById("text");
const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");

function countChar() {
    let count = textEl.value;
    return count.length;
}

function remainingChar() {
    let r = 50 - countChar();
    return r;
}

textEl.addEventListener("keyup", () => {
    // console.log(countChar());
    // console.log(remainingChar());
   totalEl.innerText = countChar();
   remainingEl.innerText = remainingChar(); 
})

