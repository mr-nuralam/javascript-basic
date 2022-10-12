let fruits = ["Apel", "Mangga", "Anggur", "Semangka", "Kelengkeng"];
document.getElementById("demo").innerHTML = fruits.toString();

//Join Methods = convert string beserta separate operator//
document.getElementById("demo2").innerHTML = fruits.join(", ");

// Pop methods = untuk menghapus data TERAKHIR di array // 
fruits.pop();
document.getElementById("demo3").innerHTML = fruits;

//PUSH METHODS = menambah data di AKHIR array  //
fruits.push("Kiwi");
document.getElementById("demo4").innerHTML = fruits.join(", ");

//SHIFT METHODS = Menghapus data di AWAL array //
fruits.shift();
document.getElementById("demo5").innerHTML = fruits;

//UNSHIFT METHODS = Menambah data di AWAL array //
fruits.unshift("Buah naga");
document.getElementById("demo6").innerHTML = fruits;

//CONCAT METHODS = Menggabungkan data elemen dari dua array atau lebih//
let transportasi_darat = ["Motor", "Mobil", "Bus"];
let transportasi_umum = ["Pesawat", "Kapal", "Kereta"];

let transportasi2 = transportasi_darat.concat(transportasi_umum);
document.getElementById("demo7").innerHTML = transportasi2;

//ES6 Menggabung array terbaru
let warna1 = ["merah", 'kuning', "hijau"];
let warna2 = ["putih", "abu-abu", "oren"];

let gabungwarna = [...warna1, ...warna2];
document.getElementById("demo7-1").innerHTML = gabungwarna;

//SPLICING METHODS = Menambahkan data array sesuai yang dibutuhkan

let fashion = ["Baju", "Celana", "Sepatu", "Topi"];
fashion.splice(2, 0, "Sandal");
document.getElementById("demo8").innerHTML = fashion;

//SLICING METHODS = menghapus data array pada elemen array
const remove = fashion.slice(1);
document.getElementById("demo9").innerHTML = remove;