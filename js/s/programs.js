const programList = document.getElementById("file-list");

fetch("./data/programs.json?t=" + new Date().getTime())  // cache-busting
  .then(res => {
    if(!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then(data => {
    programList.innerHTML = ""; // Clear previous list
    data.forEach(file => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${file.name}</h3>
        <p>${file.description}</p>
        <a href="${file.url}" target="_blank">View Program</a>
      `;
      programList.appendChild(card);
    });
  })
  .catch(err => {
    programList.innerHTML = "<p>⚠️ Error loading programs.</p>";
    console.error("Error loading programs:", err);
  });
