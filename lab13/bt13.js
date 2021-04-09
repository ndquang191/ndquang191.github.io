// Viết hàm khởi tạo Weapon(name, type, damage) khởi tạo các object weapon


function Weapon(name, type, damage, speed) {
    // VD
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.speed = speed;

    this.toString = function(){
        let a = String(this.type) + " " + String(this.name);    
        return a;
    }

    this.valueOf = function(){
        return Number(this.damage)*Number(this.speed);
    }
    
}

let ak47 = new Weapon( "AK" , "rifle" , 150 , 20)



// 1. Thêm phương thức toString() cho Weapon trả về loại - tên vũ khí. VD: Súng Thợ Săn
console.log( ak47.toString() )



// 2. Thêm phương thức valueOf() cho Weapon trả về damage * speed
console.log( ak47.valueOf() )

// Viết hàm khởi tạo Character(name, level, weapon) khởi tạo các object character, weapon là một object được tạo từ Weapon()

function Character(name, level, weapon) {
    
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function(){
        console.log( "Sat thuong gay ra la " + this.weapon.valueOf() )
    }

    this.changeWeapon = function(newWeapon){
        this.weapon = newWeapon;
    }
}

let quang = new Character( "quang" , 46 , ak47)

console.log( quang);
// 3. Thêm phương thức attack() cho Character in ra lượng sát thương gây ra tương ứng với weapon damage và speed

console.log( quang.attack() )

// 4. Thêm phương thức changeWeapon(newWeapon) cho Character thay đổi weapon cho character tương ứng với tham số newWeapon

let shotgun = new Weapon( "B16" , "shotgun" , 500 , 20)

quang.changeWeapon(shotgun)

console.log( quang.weapon)