let number = 1;

window.setInterval(() => changeImages(), 10000);

function changeImages() {
  let image = document.getElementById(`image-${number}`);
  let header = document.getElementById(`header-${number}`);
  image.style.display = header.style.display = 'none';
  number = number === 1 ? 2 : number === 2 ? 3 : 1;
  image = document.getElementById(`image-${number}`);
  header = document.getElementById(`header-${number}`);
  image.style.display = header.style.display = 'block';
}

window.onload = () => {
  const image2 = document.getElementById('image-2');
  const header2 = document.getElementById('header-2');
  const image3 = document.getElementById('image-3');
  const header3 = document.getElementById('header-3');
  image2.style.display = header2.style.display = image3.style.display = header3.style.display = 'none';
};
