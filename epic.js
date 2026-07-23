fetch("list.json")
  .then(response => response.json)
  .then(thing => {
    thing.sort((a, b) => b.diff - a.diff); //yeah epic sorting :D

    const container = document.getElementById("container");
    thing.forEach((item, index) => {
      //no
      container.innerHTML +=
      //print the name, diff and creator :P
        `<div class="moo">
          <h2>#${index + 1} ${item.name}</h2>
          <p>${item.diff}</p>
          <p>Verified by ${item.verify}</p>
          <p>Creator: ${item.creator}</p>
          <p>"${item.desc}"</p>
        </div>`;
    });
  });
