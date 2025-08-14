
// const subjectInfo = {
//     "Physics": "Physics is the study of matter, energy, and the fundamental forces of nature.",
//     "Chemistry": "Chemistry explores substances, their properties, and how they interact.",
//     "Mathematics": "Mathematics involves the study of numbers, shapes, and patterns.",
//     "Biology": "Biology is the study of living organisms and their life processes.",
//     "History": "History is the study of past events and human civilization.",
//     "Geography": "Geography deals with Earth's landscapes, environments, and places.",
//     "English": "English focuses on language, literature, and communication skills.",
//     "Computer": "Computer studies involve programming, hardware, and software concepts."
// };


// document.querySelectorAll(".card").forEach(card => {
//     card.addEventListener("click", function () {
//         const subject = this.textContent.trim();
//         alert(subjectInfo[subject] || "Information not available");
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            alert(`Selected course: ${card.textContent}`);
        });
    });
});