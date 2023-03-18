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
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["stone", "paper", "scissor"][cpuI];
  let user = "";
  let radios = document.getElementsByName("rad");
  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      user = radios[i].value;
    }
  }
  let result = match(user, cpu);
  document.querySelector("#output").innerHTML = `USER: ${user.toUpperCase()}<br>CPU: ${cpu.toUpperCase()}<br><br><h3 style="color:green"> The Winner is: ${result.toUpperCase()}</h3>`;
}
