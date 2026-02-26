function showLove(){
  document.getElementById("secretMessage").style.display = "block";
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}