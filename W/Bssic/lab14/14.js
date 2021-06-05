




// function rand1( a ){

//     let n = Math.floor( Math.random() * (a+1) )

//     return n;
// }



// function convert( a, b ,c ){

//     let temp = parseInt( a , b);

//     return a.toString(c);
// }

// convert( 10, 2, 10);

// function rand(a,b){
//     let min = Math.min(a,b);
//     let max = Math.max( a ,b);
//     let r =  Math.floor((Math.random()* ( max- min )) + min);

//     return r;
// }

// console.log( rand(10,50))


// function hex(){
//     let color = "";
//     let temp = rand1(255*255*255);
//         color += temp.toString(16);

//     return color;

// }

// console.log( hex() )





//---------------------------------------------------------


// function abbr( name ){
//     let index ;
//     for( let i = 0 ; i < name.length ; i++){
//         if( name[i] == ' '){
//             index = i;
//             break;
//         }
//     }

//     name = name.substring( 0, index + 2) + ".";

//     return name;
// }

// console.log( abbr("Quang Nguyen"))




// function hide( email ){

//     let index = email.indexOf("@");
    
//     let sub = email.substring( 2, index);
//     email = email.replace(sub, "...");

//     return email;
// }

// console.log( hide("nguyenduyquang@ahihi.com"))



// function cap( sen ){
//     sen = String(sen);
//     for( let i = 0 ; i < sen.length ; i++ ){
//         if( i == 0 || sen[i-1] == ' '){
//             sen[i] = sen[i] + 40;
//             console.log( sen[i])
//         }
//         else{
//             sen[i] = sen[i].toLowerCase();
//         }
//     }

//     return sen;
// }

// console.log( cap( "asdas Aasd ad aweq dasd sdDsad"))


// function getDateBefor( date , n){

//     let nowDate = date.getDate()
//     return new Date( date.setDate(nowDate -n) )

// }


a = [ 1 ,2 ,4 ,5 ,6,12,1123, 123]

// function sortArray(a,b){
//     return a-b;
// }

// function sort(arr){
//     let n = arr.length;
//     for( let i = 0 ; i < n ; i++){
        
//         for( let k = i ; k < n ; k++){

//             if( a[i] > a[k]){
//                 let temp = a[k];
//                 a[k] = a[i];
//                 a[i] = temp;
//             }
//         }
//     }
// }


let b = a.reduce( function(sum,i){
    sum += i;
    return sum
},0)

console.log(b)



