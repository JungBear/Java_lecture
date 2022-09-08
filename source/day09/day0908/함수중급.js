// function printWhat(what){
//     console.log(what);
// }

// // printWhat(str2);
// // var str2='초코'

// let print = function(){
//     console.log('print');
// };
// print();
// //

// (function(){
//     console.log('익명함수');
// })();


// //함수정의
// function matchQuiz(answer, printTrue, printFalse){
//     if(answer=="무령왕릉"){
//         printTrue();
//     }else{
//         printFalse();
//     }
// }

// //함수호출
// matchQuiz('광개토대왕릉', 정답함수, 오답함수)
// function 정답함수(){   //콜백함수
//     console.log('정답입니다')
// }
// function 오답함수(){   // 콜백함수
//     console.log('오답입니다')
// }

// // isOdd(판단할 숫자, 짝수일때 호출할 함수, 홀수일때 호출할 함수)
// function isOdd(num, callEven, callOddNum){
//     if (num%2==0){
//         callEven();
//     }else{
//         callOddNum();
//     }
// }
// function callEven(){
//     console.log('짝수');
// }
// function callOddNum() {
//     console.log('홀수');
// }

// isOdd(456,callEven,callOddNum)
function sum(num1, num2){
    console.log(num1+num2);
}