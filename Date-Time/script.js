setInterval(()=>{
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  let sec = date.getSeconds();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let strTime = hours + ':' + minutes + ':' +sec+ ' ' + ampm;
  return date.getDate() + "/" + (months[date.getMonth()]) + "/" + date.getFullYear() + "  " + strTime;

}

let d = new Date();
let e = formatDate(d);

time.innerHTML = e;
  
},1000)

let aa = document.getElementById("time").style.background = "brown"
let a = document.getElementById("time").style.color = "white"
