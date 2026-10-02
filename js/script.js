let inpTxt = document.getElementById("inpTxt")
let btnVc = document.getElementById("btnVc")

btnVc.addEventListener("click", () => {
    let vc = new SpeechSynthesisUtterance(inpTxt.value);
    speechSynthesis.speak(vc);
});
