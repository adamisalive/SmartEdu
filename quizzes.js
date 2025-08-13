document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.querySelectorAll("form")[1];
    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selected = quizForm.querySelector("input[type='radio']:checked");
        if (!selected) {
            alert("Please select an answer!");
            return;
        }
        if (selected.nextSibling.textContent.trim() === "Paris") {
            alert("Correct! 🎉");
        } else {
            alert("Oops! Try again.");
        }
    });
});



