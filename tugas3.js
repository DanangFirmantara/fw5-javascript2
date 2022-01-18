function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    result = []
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5 ){
        for (let x=0; x< dataArray.length; x++){
            if(nilaiAwal < dataArray[x] && dataArray[x] < nilaiAkhir){
                result.push(dataArray[x])
            }
        }
        console.log(result.sort(function (a,b) { return a-b}))
    } else if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else {
        console.log("Jumlah angka dalam dataArray harus lebih besar dari 5")
    }
}

seleksiNilai(5,20,[2,25,4,14,17,30,8])