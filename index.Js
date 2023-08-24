const getData = async () => {
  const albumObJ = await fetch("https://api.pexels.com/v1/search?query=nature", {
    method: "GET",
    headers: {
      Authorization: "QSxE1PRqMYzEo2MPVMmuh9vrZHmRPWPE6ORHSnn5lSbGX8H8zzeUbAhJ",
    },
  });
  const albums = await albumObJ.json();
  const albumsPhotos = albums.photos;
  console.log(albumsPhotos);
  const svg = document.querySelectorAll("svg.bd-placeholder-img");
  svg.forEach((singleSvg) => (singleSvg.style.display = "none"));
  const divSvgImg = document.querySelectorAll("#svg");
  console.log(divSvgImg);
  albumsPhotos.forEach((album) =>
    divSvgImg.forEach((svgImg) => {
      svgImg.innerHTML = `<img style="object-fit:cover" src="${album.src.original}" class="card-img-top" alt="..." />`;
      const textImg = document.querySelectorAll("small");
      textImg.forEach((text) => (text.innerText = `${album.id}`));
      console.log(album.id);
    })
  );

  const allButtonHide = document.querySelectorAll("#edit");
  console.log(allButtonHide);
  allButtonHide.forEach((btnHide) => {
    btnHide.innerText = "Hide";
    btnHide.addEventListener("click", function (e) {
      e.currentTarget.closest(".card").style.display = "none";
    });
  });
};
const LoadImage = document.querySelector(".btn-primary");
LoadImage.onclick = getData;
