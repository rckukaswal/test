const username = "YOUR_GITHUB_USERNAME";   // 🔴 यहां डालो
const repo = "YOUR_REPOSITORY_NAME";       // 🔴 यहां डालो

const fileList = document.getElementById("file-list");

fetch(`https://api.github.com/repos/${username}/${repo}/contents/`)
  .then(res => res.json())
  .then(data => {
    data.forEach(file => {
      if (file.name.endsWith(".java")) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <h3>${file.name}</h3>
          <a href="${file.html_url}" target="_blank">View on GitHub</a>
        `;
        fileList.appendChild(card);
      }
    });
  })
  .catch(err => {
    fileList.innerHTML = "<p>⚠️ Error loading files. Check repo name/username.</p>";
  });
