let Cat = {
    name : '뮤',
    age : 4,
    gender : '수',
    weight : 8,
    height : 50,
    character :'앙칼짐',
    like : '노픈곳',

    walk : function(){
        console.log('사뿐사뿐');
    },
    jump : function(){
        console.log('껑충껑충');
    },
    eat : function(meal){
        console.log(meal+'을 냠냠');
    },
    cry : function(){
        console.log('냐옹');
    }
}
// Cat.cry();
// console.log(Cat.age);
// Cat.eat('통조림');

let pokemon1 = {
    name : '피카츄',
    atk : 10,
    def : 3,
    hp: 100,
    maxhp : 100,

    attack : function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.atk}의 데미지로 공격합니다`);
        enemy.hp = enemy.hp - (this.atk - enemy.def);
        console.log(`${enemy.name}의 체력이${enemy.hp}가 되었습니다`);
    },
    intro : function(){
        console.log('피카피카');
    }
}

let pokemon2 = {
    name : '롱스톤',
    atk : 7,
    def : 7,
    hp: 300,
    maxhp : 300,

    attack : function(enemy){
        console.log(`${this.name}가 ${enemy.name}을 ${this.atk}의 데미지로 공격합니다`);
        enemy.hp = enemy.hp - (this.atk - enemy.def);
        if(enemy.hp<0){
            enemy.hp=0
        }
        console.log(`${enemy.name}의 체력이${enemy.hp}가 되었습니다`);
    },
    intro : function(){
        console.log('롱스토온');
    },
    finish : function(enemy){
        if (enemy.hp<=enemy.maxhp*0.1 && enemy.hp>0){
            enemy.hp=0;
            console.log(`${this.name}의 finish 사용! : ${enemy.name}의 체력은 ${enemy.hp}가 되었다`);
        }
    }
}
function finish(나, 적){
    for (적.hp;적.hp>0;적.hp){
        나.attack(적);
        if(적.hp<0){
            적.hp=0;
            console.log(`${적.name}의 체력이${적.hp}이되었다! 컷!`);
        }
        나.finish(적);
    }
}
function cut(나, 적){
    for (적.hp;적.hp>0;적.hp){
        나.attack(적);
        if(적.hp<=0){
            console.log(`${적.name}이 행동불능이 되었다!! 컷!`);
        }
        
    }
}

//생성자함수 = 객체를 생성할때 사용되는 함수
function PokeMon(name,type,atk,def,maxhp,sound){
    this.name = name;
    this.type = type;
    this.atk = atk;
    this.def = def;
    this.hp = maxhp;
    this.maxhp = maxhp;
    this.finish = function(enemy){
        if (enemy.hp<=enemy.maxhp*0.1 && enemy.hp>0){
            enemy.hp=0;
            console.log(`${this.name}의 finish 사용! : ${enemy.name}의 체력은 ${enemy.hp}가 되었다`);
        }
    }
    this.attack = function(enemy){
        switch(this.type){
            case '불':
                if(enemy.type=='풀'){
                    atk=this.atk*1.3;
                }else if(enemy.type=='물'){
                    atk=this.atk*0.7;
                }
                break;
            case '물':
                if(enemy.type=='불'){
                    atk=this.atk*1.3;
                }else if(enemy.type=='풀'){
                    atk=this.atk*0.7;
                }
                break;
            case '전기':
                if(enemy.type=='물'){
                    atk=this.atk*1.3;
                }else if(enemy.type=='땅'){
                    atk=this.atk*0.7;
                }
                break;
        }
        console.log(`${this.name}가 ${enemy.name}을 ${atk - enemy.def}의 데미지로 공격합니다`);
        enemy.hp = enemy.hp - (atk - enemy.def);
        if(enemy.hp<0){
            enemy.hp=0
        }
        console.log(`${enemy.name}의 체력이${enemy.hp}가 되었습니다`);
        console.log('----------------------------------')
    };
    this.intro = function(){
        console.log(sound);
    };
}
function revolustion(name){
    console.log(`${name}이 진화했다!`);
}


let pokemon3 = new PokeMon('파이리','불',25,5,50,'파아이리',);
let pokemon4 = new PokeMon('이상해씨','풀',20,3,260,'이사아앙ㅎ씨');
let pokemon5 = new PokeMon('디그다','땅',15,5,600,'디그디그다');
let pokemon6 = new PokeMon('피카츄','전기',20,4,400,'피카피카');
let pokemon7 = new PokeMon('꼬부기','물',40,0,530,'꼬오북');
// finish(pokemon4,pokemon3)
// console.log('-------------------')
// cut(pokemon3,pokemon5)
pokemon3.attack(pokemon4);
pokemon5.attack(pokemon4);


