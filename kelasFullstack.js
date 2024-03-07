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

const defaultText = "klik saya";
btn1.textContent = defaultText;

// styling
btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
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
  btn1.textContent = defaultText2;
}

const btn2 = document.getElementById("btn2"); //untuk memanggil class

const defaultText2 = "tekan saya";
btn2.textContent2 = defaultText2;
btn2.style.border = "green";
btn2.style.padding = "24px";
btn2.style.fontSize = "38px";

function clickButton2() {
  btn2.style.background = "aqua";
  const newText2 = document.createElement("woyy");
  newText2.textContent = "boleh emang?";
  body.append(newText2);
}

function ubahText2() {
  btn2.textContent = "bisa gk si";
}

function oriText2() {
  btn2.textContent = defaultText2;
}
