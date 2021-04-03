

function maxOfThree(a ,b ,c){
    let max = a;
    max = b >= max ? b : max
    max = c >= max ? c : max
}

function isPrime( a ){

    let c = 0
    for( let i = 1 ; i <= a ; i++){
        if( a % i == 0){
            c++;
        }
    }

    c > 2
        ? console.log("Khong phai nguyen to")
        : console.log("La so nguyen to")
}