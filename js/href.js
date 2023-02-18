const links = document.querySelectorAll("li a");

function ativarLink(item) {
  const href = item.href;
  const url = document.location.href;

  if (href === url) {
    item.style.backgroundColor = "black";
    item.style.color = "white";
  }
}

links.forEach(ativarLink);
