console.log("test")
window.setInterval(function () {
  var elem = document.getElementById("data");
  elem.scrollTop = elem.scrollHeight;
}, 5000);
