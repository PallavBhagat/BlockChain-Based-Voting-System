let nav = document.querySelector("#navbar-custom");

nav.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">
    <img src="./img/eci.png" width="180px" top-margin="10px" loading="lazy"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="voting_on.html">Result</a>
      </li>
    </ul>
  </div>
</nav>`;

// Additional styling
nav.style.borderBottom = "1px solid #e5e5e5";
nav.style.padding = "0 0";
nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
nav.style.transition = "all 0.3s ease";

// Style anchor tags
const navLinks = nav.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.style.color = "#333";
  link.style.fontWeight = "bold";
});

// Style navbar brand
const navbarBrand = nav.querySelector(".navbar-brand");
navbarBrand.style.marginRight = "20px";
