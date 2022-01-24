// Method filter
// method ini berfungsi untuk memilah data didalam array dengan mencocokan antara value dan juga kondisi didala callback

const arr = [10,20,30] //inisialisasi array
let func = function (num){ // inisialisasi callback
    return num <= 20 //membandingkan num dengan 20, return boolean
}
console.log(arr.filter(func))  //10,20

// method reverse()
//method ini berfungsi untuk membalikkan element dari array yang pertama menjadi yang terakhir dan yang terakhir menjadi yang pertama
console.log(arr.reverse())

//method concat()
//method ini berfungsi unuk menambahkan nilai pada array yang sudah ada
console.log(arr.concat(40,30,10))

//method slice()
slice = arr.slice(0,2)
console.log (slice)

//method forEach
// method ini berfungsi untuk menggunakan setiap index yang ada pada array 
console.log(arr) //cek isi dari arr
let sum=0   //inisialisasi sum = 0
arr.forEach(myFunction) // inisialisasi function forEach; function ini membutuhkan 3 variabel yakni (item, index, arr)
function myFunction(item){
    sum += item
}
console.log(sum)

// method push
// method ini digunakan untuk menambah nilai dari variabel array
arr.push(90)
console.log(arr)

//method indexOf
// method ini digunakan untuk mengecek posisi index suatu nilai
let index = arr.indexOf(30)
console.log(index)

//method isArray
// method ini digunakan untuk mengecek apakah variabel arr array
console.log(Array.isArray(arr))

// method keys
// method ini digunakan untuk perulangan. method keys akan memberikan nilai dari panjang index suatu array
let keys = arr.keys()
text =""
for (let x of keys){
    text += x + " "
}
console.log(text)

//method reduce
// method ini berfungsi untuk melakukan pengurangan dimana ketika arr[0]= total dan index selanjutnya sebagai vairabel pengurang
console.log(arr.reduce (myFunction))
function myFunction(total,num){
    return total-num
}

