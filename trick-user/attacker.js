document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash) {
    var loginBtn = document.getElementById("loginBtn");
    loginBtn.remove()
    var inputToken = window.location.hash.substring(1).split('=')[1]
    getUserFromToken(inputToken)
  } else {
    var loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", function() {
      facebookLogin();
    });
  }
});

function facebookLogin() {
  // Replace appId with your app's ID
	var url = "http://localhost:5000/";
	window.location.href = url;
}


