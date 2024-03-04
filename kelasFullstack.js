document.title = "raldy belo";
const body = document.body;
body.append("hello world");

const h1 = document.createElement("h1"); //<h1></h1>
h1.textContent = "<marquee>ni h1</marquee>"; //<h1>ini h1</h1>
const namaSaya = document.createElement("p");
namaSaya.innerHTML = "<marquee>ini P<marque/>"; //text berjalan karna menggunakan tag marquee dan di dalam innerHTML

const namaKamu = document.createElement("b");
namaKamu.innerText = "<marquee>ini nama kamu<marquee/>";

body.append(h1);
body.append(namaSaya);
body.append(namaKamu);
