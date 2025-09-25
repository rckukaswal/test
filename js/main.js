const fileList = document.getElementById("file-list");
const fileContent = document.getElementById("file-content");
const codeBlock = document.getElementById("code-block");

// Load files from files.json
fetch("data/files.json")
  .then(res => res.json())
  .then(files => {
    files.forEach(f => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${f.name}</h3>`;
      
      // Click to load code in same page
      card.addEventListener("click", () => {
        fetch(f.url)
          .then(res => res.text())
          .then(code => {
            codeBlock.textContent = code;
            fileContent.style.display = "block";
            fileContent.scrollIntoView({ behavior: "smooth" });
          })
          .catch(err => {
            codeBlock.textContent = "⚠️ Could not load file content.";
            fileContent.style.display = "block";
          });
      });

      fileList.appendChild(card);
    });
  })
  .catch(err => {
    fileList.innerHTML = "<p>⚠️ Could not load Java files.</p>";
  });
