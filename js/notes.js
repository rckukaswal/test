const notesContainer = document.getElementById("notes-container");

fetch("./data/notes.json?t=" + new Date().getTime())
  .then(res => {
    if(!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(notes => {
    notesContainer.innerHTML = ""; // Clear old notes
    notes.forEach(note => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        ${note.example ? `<pre><code>${note.example}</code></pre>` : ""}
      `;
      notesContainer.appendChild(card);
    });
  })
  .catch(err => {
    notesContainer.innerHTML = "<p>⚠️ Could not load notes.</p>";
    console.error("Error loading notes:", err);
  });
