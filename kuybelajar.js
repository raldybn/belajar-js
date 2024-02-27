//variable=tipe data

let nama = "Petrus Reynaldy"; //tipe string
let usia = 25; // tipe integer
let tinggiBadan = 175.5; // tipe float or double
let beratBadan;
let pacar = 2;

beratBadan = 61;

if (pacar == null) {
  pacar = "belum punya";
} else {
  pacar = "udah punya";
}

// switch (pacar) {
//   case 1:
//     pacar = "punya 1 aja";
//     break;
//   case 2:
//     pacar = "punya 2 pacar";
//     break;
//   default:
//     pacar = "belum punya pacar";
//     break;
// }X
alert(
  `nama saya ${nama} saya berusia ${usia} tinggi badan saya ${tinggiBadan}Cm berat badan saya ${beratBadan}Kg dan saya ${pacar}`
);

// kedua
let saldoAwal = 50000;
let saldoTambahan = 80000;
const hutang = 30000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

alert(
  `saldo awal saya RP.${saldoAwal} dan saldo tambahan saya adalah RP.${saldoTambahan} total saldo yang saya miliki adalah sebanyak RP.${saldoAkhir}`
);

//ketiga
let x = 2;
let y = 3;
const z = 8;
const a = x - y + z;
alert(`hasil dari 2-3+8 adalah ${a}`);
