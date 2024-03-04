document.title = "raldy belo";
const body = document.body;
body.append("hello world");

const h1 = document.createElement("h1"); //<h1></h1>
h1.textContent = "<marquee>ni h1</marquee>"; //<h1>ini h1</h1>
const namaSaya = document.createElement("p");
namaSaya.innerHTML = "<marquee>ini P<marque/>"; //text berjalan karna menggunakan tag marquee dan di dalam innerHTML

const namaKamu = document.createElement("b");
namaKamu.innerText = "<marquee>ini nama kamu<marquee/>";

body.append(namaSaya);
body.append(namaKamu);

document.tittle = "raldy belo";
const btn1 = document.getElementById("btn1"); //untuk memanggil ID
const btn2 = document.querySelector(".btn2"); //untuk memanggil class

const defaultText = "klik saya";
btn1.textContent = defaultText;

// styling
btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn2.style.fontSize = "50rem";
// console.log(btn2);

function clickButton() {
  btn1.style.background = "aqua";
  const newText = document.createElement("p");
  newText.textContent = "hallo bang";
  body.append(newText);
}

function ubahText() {
  btn1.textContent = "hallo";
}

function oriText() {
  btn1.textContent = defaultText;
}
