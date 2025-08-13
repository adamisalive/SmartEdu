
document.addEventListener("DOMContentLoaded", () => {
    const noteForm = document.querySelectorAll("form")[1]; // Second form is note form
    const noteTitle = noteForm.querySelector("input[type='text']");
    const noteContent = noteForm.querySelector("textarea");

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (noteTitle.value.trim() && noteContent.value.trim()) {
            alert(`Note saved: ${noteTitle.value}`);
            noteTitle.value = "";
            noteContent.value = "";
        } else {
            alert("Please fill in both title and content!");
        }
    });

    const contactForm = document.querySelectorAll("form")[3];
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Contact info saved!");
    });
});
