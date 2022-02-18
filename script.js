function loadVerse(e) {
  e.preventDefault();
  let book = document.getElementById('book').value;
  let chapter = document.getElementById('chapter').value;
  let verse = document.getElementById('verse').value;

  let url = "https://bible-api.com/";
  if (book !== "") {
    url += book;
  }
  if (chapter !== "") {
    url += "+" + chapter;
  }
  if (verse !== "") {
    url += ":" + verse;
  }

  updateVerse(url);

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      updateVerse(json.text);
    });
}

function updateVerse(info) {
  document.getElementById('bibleVerse').textContent = info;
}

document.getElementById('get').addEventListener('click', loadVerse);
