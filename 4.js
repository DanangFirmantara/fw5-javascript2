const nilai = [80,90,70,50]

function rataRata (param1){

    if (typeof param1 !== "object"){
        return "data tidak array"
    }
    let i = param1.length - 1
    let rataRata = 0

    // while (i>= 0){
    //     rataRata += param1[i]
    //     i--
    // }

    param1.forEach(element => {
        rataRata += element
    });

    rataRata /= param1.length
    return rataRata

}



console.log(rataRata(nilai))

