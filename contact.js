document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const [name, email, message] = form.querySelectorAll("input, textarea");
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert("Please fill out all fields.");
            return;
        }
        alert(`Thanks for reaching out, ${name.value}! We'll get back to you soon.`);
        form.reset();
    });
});
