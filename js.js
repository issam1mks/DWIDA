/*
    /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
*/
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let loginBtn = document.getElementById("login");
let messageRef = document.getElementById("message-Ref");

let isUsernameValid = () => {
    /* Username should be contain more than 3 characters. Should begin with alphabetic characters Can contain numbers */
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.Value);
};

let isPasswordValid = () => {
    /* Password should be atleast 8 characters long. Should atleast 1 number, 1 special symbol, lower case and 1 upper case */
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordRef.Value);
};

usernameRef.addEventListener("input", () => {
    if (!isUsernameValid()) {
        messageRef.style.visibility = "hidden";
        usernameRef.style.cssText =
        "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
      usernameRef.style.cssText =
        "border-color: #34bd34; background-color: #c2ffc2";
    }
});
  