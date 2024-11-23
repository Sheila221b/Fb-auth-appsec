document.addEventListener("DOMContentLoaded", function() {
      var loginBtn = document.getElementById("button");
      var email = document.getElementById("email")
      var password = document.getElementById("password")
      loginBtn.addEventListener("click", function() {
        facebookLogin();
      });
  });
  
  function facebookLogin() {
      alert("HHHHHH, the attacker has known your facebook account " + email.value + "\nand the password which is " + password.value)
  }
  
  
  
  