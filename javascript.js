let Image = document.getElementsByClassName("image")[0];

let PasswordTag = document.getElementById("passwordtag");

let EyeIcon = document.getElementById("eyeicon");

// Function for the monkey opening eyes Image. For the email input
function OpenEye() {
  Image.src = "/OpenEye.jpg";
}

// Function for the monkey closing eyes Image. For the password input
function CloseEye() {
  Image.src = "/CloseEye.jpg";
}

// Function for the showing password, changing monkey image, changing showpassword icon.
function showpassword() {
  if (PasswordTag.type === "password") {
    PasswordTag.type = "text";
    Image.src = "/OpenEye.jpg";
    EyeIcon.className = "bi bi-eye-fill";
  } else {
    PasswordTag.type = "password";
    Image.src = "/CloseEye.jpg";
    EyeIcon.className = "bi bi-eye-slash";
  }
}
