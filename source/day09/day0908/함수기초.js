// function hello(name){
//     console.log(name+"님 반가워요")
// }

// hello('홍길동')


// function add(num1, num2){
//     return(num1+num2)
// }

// console.log(add(2,4))

// 3개의 숫자를 받아서 3개의 총합을 리턴
// function add(num1, num2, num3){
//     return(num1+num2+num3);
// }
// console.log(add(5,1,5));

// 두수를 입력받아 큰수를 리턴
// function bignum(num1,num2){
//     if (num1>num2){
//         return num1;
//     }else if(num1<num2){
//         return num2;
//     }else{
//         return false
//     }
// }
// console.log(bignum(5,2));

// 첫번째수부터 두번째수까지 자연수의 총합을 구하는 함수
// function sumNum(num1,num2){
//     let sum = 0;
//     for(let i = num1; i<=num2;i++){
//         sum= sum+i;
//     }
//     return sum;
// }
// console.log(sumNum(5,101));

// function sum2(startNum, endNum){
//     let total = startNum + endNum;
//     let j = (endNum-startNum+1)/2;
//     let z = total*j
//     return z
// }
// console.log(sum2(5,101));

// function sum3(startNum,endNum){
//     let sum = startNum + endNum;
//     let gap = endNum - startNum;
//     let count;

//     if (gap%2==1){

//     }
// }

// 가로와 높이를 입력받아 삼각형의 넓이를 구하는 함수
// function triangleArea(row,column){
//     return (row*column/2)
// }
// console.log(triangleArea(10,10))


// 인자를 하나 받아서 해당단만 출력하는 함수
// function  mt(num){
//     for(let i = 1; i<=9; i++){
//         console.log(num + 'X' + i + ' = ' + num*i)
//     }
// }
// mt(14)

function dan(num){
    for(let i = 1; i<=9; i++){
        console.log(num + 'X' + i + ' = ' + num*i)
    }
}

// function printGugudan(){
//     for(let num=2; num<=9; num++){
//         dan(num);
//         console.log('');
//     }
// }
// printGugudan()

function printUpgradeGugudan(n,m){
    for(let num=n; num<=m; num++){
        dan(num);
        console.log('');
    }
}
// printUpgradeGugudan(2,5)

// 두개의 인자를 받아서 큰수에서 작은수 뺀값 출력
function minus(num1,num2){
    let result;
    if(num1>num2){
        result = num1-num2;
        return result
    }else if(num1<num2){
        result = num2-num1;
        return result
    }else(console.log('값이같다'));
}
minus(10,5)
//첫번째인자 문자열 두번째인자 숫자
//첫번째인자를 n번 출력하는함수
function printStr(str,n){
    let a= '';
    for(let i=0; i<n;i++){
        a+=str
    }console.log(a)
}
printStr('홍길동',6)

//isovertem은 10보다크면 true, 이하면 false를 반환하는함수
// 1번에서 만든 함수의 결과값을 인자로 넘겨 '10보다큽니다','10이하입니다'를 출력

let num1 = 21;
let num2 = 10;
let answer = minus(num1,num2);
function isOverTen(answer){
    if(answer>10){
        return true;
    }else{
        return false;
    }
}
let boolean = isOverTen(answer);
if(boolean==true){
    console.log('10보다큽니다');
}else{
    console.log('10이하입니다');
}



// calFigure(도형이름, 변의길이)
// 삼각형, 사각형, 원의 넓이를 구해주는 함수
// 저3개말고 들어오면 '지원하지않는 도형' 출력
function calcFigure(name,width){
    const PI = 3.141592;
    switch(name){
        case '사각형' : 
            return width * width;
        case '삼각형' :
            return Math.sqrt(3)/4*width*width;
        case '원형' :
            return (width/2)*(width/2)*PI;
        default:
            console.log('지원하지않는 도형입니다');
    }
}
console.log(calcFigure('삼각형',6));


