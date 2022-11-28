passwordRef.addEventListener("input", () => {
    if (!isPasswordValid()) {
      messageRef.style.visibility = "hidden";
      passwordRef.style.cssText =
        "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
      passwordRef.style.cssText =
        "border-color: #34bd34; background-color: #c2ffc2";
    }
  });
  
  loginBtn.addEventListener("mouseover", () => {
    //If either password or username is invalid then do this..
    if (!isUsernameValid() || !isPasswordValid()) {
      //Get the current position of login btn
      let containerRect = document
        .querySelector(".container")
        .getBoundingClientRect();
      let loginRect = loginBtn.getBoundingClientRect();
      let offset = loginRect.left - containerRect.left;
      console.log(offset);
      //If the button is on the left hand side.. move it to the the right hand side
      if (offset <= 100) {
        loginBtn.style.transform = "translateX(16.25em)";
      }
      //Vice versa
      else {
        loginBtn.style.transform = "translateX(0)";
      }
    }
  });
  loginBtn.addEventListener("click", () => {
    messageRef.style.visibility = "visible";
  });