// let salaries = {
//     anna: 1000,
//     john: 1200,
//     phoebe: 2000,
//     brian: 1500,
//     diana: 1100,
// };
// let salaries2 = {
//     anna: 1000,
//     john: 1200,
//     phoebe: 2000,
//     brian: 1500,
//     diana: 1100,
// };


// function remove( obj , key){
//     delete obj[key];
// }


// remove( salaries, "anna")

// console.log( salaries )


// function isEqual( obj1, obj2){
    
//     let equal = true;


//     for( let k in obj1){
//         if( (k in obj2) == false){
//             equal = false; break;
//         }
//         else{
//             if( obj1[k] != obj2[k]){
//                 equal = false; break;
//             }
//         }
//     }

//     for( let k in obj2){
//         if( (k in obj1) == false){
//             equal = false
//         }
//         else{
//             if( obj1[k] != obj2[k]){
//                 equal = false;
//             }
//         }
//     }

//     return equal;
// }

// console.log( isEqual( salaries, salaries2))



// function intersection( obj1 , obj2){

//     let copy = {};
//     for( let k in obj1){
//         if( (k in obj2) && ( obj2[k] == obj1[k]) ){
//                 copy[k] = obj1[k];
//         }
//     }

//     return copy;
// }

// console.log( intersection(salaries,salaries2))