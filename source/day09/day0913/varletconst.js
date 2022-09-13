// console.log(r);   // r is not defined
// r=5;
// //let r = 10;  // Cannot access 'r' before initialization
// var r = 10;  // undefined


// console.log(result);
// age = 50;
// function 바는문제(){
//     var result = '100살이하';
//     console.log(result);
// }
// console.log(result);

// function isApple(사과,apple){
//     if (사과 === '사과' && apple === 'apple'){
//         return true;
//     }else{
//         return false;
//     }
    
// }
// console.log(isApple('사과','apple'))


// function introduce(firstName, lastName, hello){
//     if (lastName === '홍' || lastName==='hong'){
//         console.log(hello(firstName,lastName));
//     }else{
//         console.log('여긴어디 나는누구?');
//     }
// }
// function hello(firstName,lastName){
//     return (lastName+firstName)
// }
// introduce('길동','홍',hello)


// function addTotal(자연수){
//     let sum =0;
//     for (let i = 1; i<=자연수;i++){
//         sum += i
//     }
//     return sum
// }
// console.log(addTotal(100))


// function addTotal(자연수){
//     let sum = 1;
//     if(sum<=자연수){
//         sum = 자연수*addTotal(자연수-1)
//         return sum
//     }
//     return sum
// }
// console.log(addTotal(5))

let samsung = 35000 ;
let dell = 32000;
let lg = 28000;
let razor = 60000;
function buyMouse(brand, pay){
    if(brand =='삼성'){
        return pay-samsung;
    }else if(brand==='dell'){
        return pay-dell;
    }else if(brand=== 'lg'){
        return pay-lg;
    }else if(brand === 'razor'){
        return pay-razor
    }else{
        return -1
    }
}
let print = '최종구매갯수 :'
function howManyBuy(brand,pay){
    let money = buyMouse(brand,pay);
    if(money<0){
        return('금액이 부족합니다');
    }else{
        if(brand =='삼성'){
            console.log(print+parseInt(pay/samsung)+'개');
        }else if(brand==='dell'){
            console.log(print+parseInt(pay/dell)+'개');
        }else if(brand=== 'lg'){
            console.log(print+parseInt(pay/lg)+'개');
        }else if(brand === 'razor'){
            console.log(print+parseInt(pay/razor)+'개')
        }
    }
}
howManyBuy('razor',60000)
