const fileList = document.getElementById("file-list");

// files.json से Java files load करना
fetch("data/files.json")
  .then(res => res.json())
  .then(files => {
    files.forEach(f => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${f.name}</h3>
        <a href="${f.url}" target="_blank">View File</a>
      `;
      fileList.appendChild(card);
    });
  })
  .catch(err => {
    fileList.innerHTML = "<p>⚠️ Could not load Java files.</p>";
  });
