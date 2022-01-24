"use strict";

// Method filter
// method ini berfungsi untuk memilah data didalam array dengan mencocokan antara value dan juga kondisi didala callback
var arr = [10, 20, 30]; //inisialisasi array

var func = function func(num) {
  // inisialisasi callback
  return num <= 20; //membandingkan num dengan 20, return boolean
};

console.log(arr.filter(func)); //10,20
// Method concat()
// method ini digunakan untuk menambah dan menyatukan dua buah array. return dari method ini adalah sebuah array dalam bentuk baru

var arr2 = [20, 40, 60];
var arr3 = arr.concat(arr2); // array arr ditambah dengan arr2

console.log(arr3); // method copyWithin()
// method ini digunakan untuk mengcopy nilai dari sebuah array. pada target dari start hingga end 

console.log(arr3.copyWithin(0, 3)); // parameternya ada tiga yaitu .copyWithin(target, start, end). dimana end tidak masuk
// method entries
//method ini digunakan untuk menampilkan nilai dari sebuah array. akan tetapi dimulai dari awal lalu selanjutnya

var iterator = arr3.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); // method every
// mehod ini digunakan untuk mengcek nilai setiap variabel dalam array memenuhi dari syarat yang diminta. jika semua variabel array memenuhi maka akan memberikan nilai true(boolean)

function isBelowThreshold(num) {
  num < 40;
}

console.log(arr3.every(isBelowThreshold)); // method fill
// method digunakan untuk mengisi sebuah array dengan nilai tertentu

var arr4 = arr3.fill(70, 2, 4); // isi dengan nilai 70 pada index 2 hingga <4

console.log(arr4); //method find
// method ini akan mencari value dalam array. jika menemukan value yang diminta maka method find akan berhenti

var found = arr4.find(function (element) {
  return element >= 70;
});
console.log(found); // method push
// method ini digunakan untuk menambah nilai dari variabel array

arr3.push(90);
console.log(arr3); //method indexOf
// method ini digunakan untuk mengecek posisi index suatu nilai

var index = arr.indexOf(30);
console.log(index); //method toString
// method ini mengubah bentuk dari array menjadi string

console.log(arr4.toString()); //method join
// method ini mengubah bentuk dari array menjadi string dengan tanpa koma

console.log(arr4.join(""));