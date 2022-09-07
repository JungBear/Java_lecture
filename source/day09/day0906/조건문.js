//1. 주어진 수가 짝수인지 홀수인지 판단
let a = 6;
if(a%2==0){
    console.log('짝수');
}else{
    console.log('홀수');
}

//2. 입력된 변수가 숫자인지 아닌지 확인

let b = '123';
let result = typeof(b);
//console.log(result)
if (result=='number'){
    console.log('숫자');
}else{
    console.log('숫자X')
}

// 3. 변수가 3의 배수인지 판별

let c = 947;
if(c%3==0){
    console.log('3의배수');
}else{
    console.log('3의배수아님');
}

// 4.문자열에 '안녕'이 들어있으면 '안녕하세요를 콘솔에 찍으시오
let d = '안녕'
let dindex = d.indexOf('안녕')
//console.log(dindex)
if(dindex!=-1){
    console.log('안녕하세요')
}else{
    console.log('없음');
}

// 5. 분을 입력하면 몇시간 몇분인지를 알려주세요.
let bca = 505;
let bbc = bca%60;
let bbd = bbc/60;
let bac = bca/60-bbd;
console.log(bac+'시'+bbc+'분')


//6. 세 숫자를 비교하여 가장 큰 숫자를 출력해보세요
let ab=-9.2;
let bc=-9.1;
let ac=-9.3;
if (ab > bc && ab > ac){
    console.log(ab);
}else if(bc > ab && bc > ac){
    console.log(bc);
}else{
    console.log(ac)
}

// 7. 변수 pi = 3.141592와 반지름 r을 활용하여 원의 넓이를 구해보아라
let r = 2
let pi = 3.141592
console.log(pi * r *r);

// 8. 숫자가 3의배수면 3의배수, 5의배수면 5의배수라고 출력하되 15의 배수이면 15의 배수라고만 출력
let abc=45
if (abc%5==0 && abc%3==0){  //abc%15==0
    console.log('15의배수');
}else if(abc%5==0){
    console.log('5의배수');
}else if(abc%3==0){
    console.log(('3의배수'));
}else{
    console.log('그무엇의 배수도 아니다');
}

//9. 0~100의 점수가 들어있는 변수의 등급을 출력
let ccc = 59;
if(ccc>=90 && ccc<= 100){
    console.log('수');
}else if(90>ccc && ccc>=80){
    console.log('우');
}else if(80>ccc && ccc>=70){
    console.log('미');
}else if(70>ccc && ccc>=60){
    console.log('양');
}else if(ccc<=59 && ccc>=0){
    console.log('가');
}else{
    console.log('잘못된점수');
}