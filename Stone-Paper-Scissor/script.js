function match(user, cpu) {
  if (user === cpu) {
    return "Nobody";
  } else if (cpu === "stone" && user === "paper") {
    return "user";
  } else if (cpu === "stone" && user === "scissor") {
    return "cpu";
  } else if (cpu === "paper" && user === "scissor") {
    return "user";
  } else if (cpu === "paper" && user === "stone") {
    return "cpu";
  } else if (cpu === "scissor" && user === "stone") {
    return "user";
  } else if (cpu === "scissor" && user === "paper") {
    return "cpu";
  }
}

function myFunction() {
  let a = document.querySelector("#div").style.display = "none";
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["stone", "paper", "scissor"][cpuI];
  let user = "";
  let radios = document.getElementsByName("rad");
  let c = document.querySelector("#output").style.display = "";

  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      user = radios[i].value;

    }
  }

  let result = match(user, cpu);
  document.querySelector("#output").innerHTML = `USER: ${user.toUpperCase()}<br><br>CPU: ${cpu.toUpperCase()}<br><br>
  <h3 style="color:green; border:2px dashed; padding:5px;">
  The Winner is: ${result.toUpperCase()}
  </h3>
  <br><input class="button" type="submit" value="Try Again!" onclick="tryAgain()">`;
  
}


function tryAgain() {
  let c = document.querySelector("#output").style.display = "none";
  let a = document.querySelector("#div").style.display = "";
}
