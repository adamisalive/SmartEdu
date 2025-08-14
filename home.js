
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

const subjectInfo = {
  "Mathematics": "Mathematics involves the study of numbers and shapes.",
  "Chemistry": "Chemistry explores substances, their properties, and how they interact.",
  "Physics": "Physics is the study of matter, energy, and the fundamental forces of nature."
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const subject = card.textContent.trim();
    alert(subjectInfo[subject] || "Information not available");
  });
});


const T=document.querySelector('input[placeholder="Note Title"]'),
C=document.querySelector('textarea[placeholder="Note Content"]'),
O=document.createElement("div");
document.body.appendChild(O);

function S(){O.innerHTML=(JSON.parse(localStorage.n||"[]"))
.map((n,i)=>`<h3>${n.t}</h3><p>${n.c}</p><small>${n.d}</small>
<button onclick="D(${i})">Delete</button>`).join("<hr>");}

function D(i){let N=JSON.parse(localStorage.n||"[]");N.splice(i,1);
localStorage.n=JSON.stringify(N);S();}

document.querySelector('button[type="submit"]').onclick=e=>{
e.preventDefault();
let N=JSON.parse(localStorage.n||"[]");
N.push({t:T.value,c:C.value,d:new Date().toLocaleDateString()});
localStorage.n=JSON.stringify(N);T.value=C.value="";S();};

S();