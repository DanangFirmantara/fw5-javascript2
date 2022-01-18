const name = [ 
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella','Faith', 'Olivia', 'Penelope'
]

function searchName(param1,param2,callback){
    let result = [] // tempat disimpannya variabel yang bernilai sama
    const find = param1 // acuan bagian yang dicari
    for (let x= 0 ; x<name.length ; x++){
        let temp = callback(x) // memanggil setiap nilai dari array name
        let j=0
        //cek satu nama aja 
        for (i=0 ; i<temp.length ; i++){
            if (find[j] == temp[i]){
                j++
            }
        }

        if (j == find.length){
            result.push(temp)
        }
    }
    
    for (let x=0; x< param2; x++){
        console.log(result[x])
    }


    // for (let i= 0; i<name.length; i++){
    //     temp = callback(i)
    //     for(let j =0; j<temp.length ; j++){
    //         if(param1[k] == temp[j]){
    //             k++
    //         }   
    //     }
    //     if (k == param1.length - 1){
    //         result = temp
    //     }
        
    // }
    // console.log(result)
    // for (let i = 0; i<param2; i++){
    //     console.log(result[i])
    // }
    
}

function find(param1){
    return name[param1]
}

// function searchName(callback){
//     temp = callback(1)
//     console.log(temp.length)
// }



// searchName(find)
searchName("an", 3, find)
// console.log(searchName("an",3,find))

// idx = "an"
// console.log(idx[0])