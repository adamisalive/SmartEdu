function saveNote() {
    let title = document.getElementById("noteTitle").value;
    let content = document.getElementById("noteContent").value;

    // Validation
    if (title.trim() === "" || content.trim() === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Create new list item
    let notesList = document.getElementById("notesList");
    let li = document.createElement("li");
    li.textContent = `${title}: ${content}`;
    notesList.appendChild(li);

    // Clear input fields
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteContent").value = "";
}
