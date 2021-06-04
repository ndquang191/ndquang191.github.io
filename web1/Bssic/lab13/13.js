

let student ={

    name : "Ba",


    get age(){
        return this._age;
    },

    set age(value){
        if( value > 15 && value < 25){
            this._age = value;
        }
        else{
            console.log("Tuoi k hop le")
        }
    }
}

function Student( name , age , gender , tel , address){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.tel =  tel;
    this.address = address
}

let quang = new Student("Quang", 14, 'M', 123, 345)
console.log(quang)


Object.keys(quang)