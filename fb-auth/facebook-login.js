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
	var appId = '1317262433032735';
	var redirectUrl = "http://localhost:8088/";
	var url = "https://www.facebook.com/v12.0/dialog/oauth?client_id=" + appId + "&redirect_uri=" + redirectUrl + "&scope=email&response_type=token";
	window.location.href = url;
}

function getUserFromToken(inputToken) {
  // Get User email to login
  fetch('https://graph.facebook.com/me?fields=email' + '&access_token=' + inputToken)
    .then(response => response.json())
    .then(data => {
        // Log the user info
        console.log(data);
        if (data["email"]) {
          var helloText = document.getElementById("hello")
          helloText.innerText = "Successfully login user " + data["email"]
        } else {
          var helloText = document.getElementById("hello")
          helloText.innerText = "Error Encountered"
        } 
    })
    .catch(error => {
        console.error(error);
    });
}


