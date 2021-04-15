

function Rectangle( wide , long , unit){

    this.wide = wide;
    
    this.long = long;
    this.unit = unit;

    return{

        get wide(){
            return this.wide;
        },
        set wide(wide){
            if(wide > 0){
                return wide;
            }
            else{
                console.log("Nhap sai")
            }
        },

        get long(){
            return this.long;
        },
        set long(long){
            if(long > 0){
                return long;
            }
            else{
                console.log("Nhap sai")
            }
        },

        get unit(){
            return wide;
        },
        set unit(newValue){
            if(unit == "m" || unit == "km"){
                return unit;
            }
            else{
                console.log("Nhap sai")
            }
        },

        toString = function(){
            return "Hinh chu nhat co chieu dai " + this.long + this.unit + ", chieu rong " + this.wide + this.unit
        },

        valueOf = function(){
            
        }
    }

    

}

let a = new Rectangle(30,40,"m");


console.log(String(a));
