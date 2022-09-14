// let colorArr = ['red','orange','yellow','green','blue','남','purple']
// console.log(colorArr[1]);
// colorArr[2] = '노란색';
// console.log(colorArr[2]);

// let numArr = new Array('zero','one','two','three');
// console.log(numArr[3]);



// // let animals = ['tiget','lion','rabbit','rat','cat','dog','whale'];
// // function isExist(name,arr){
// //     for(let i = 0; i<arr.length; i++){
// //         if(name==arr[i]){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// 연에인 배열을 주고 이름이 2글자인 연에인이 몇명
// let talents = ['서인영','이효리','공유','유진','최강창민','유노윤호']
// function count2Tal(연예인리스트){
//     let count = 0;
//     for(let i = 0; i<talents.length; i++){
//         if(talents[i].length == 2){
//             count += 1;
//         }
//     }
//     return count
// }
// console.log(count2Tal(talents));



// let numList=[20,30,11,23,24,50,55,25]
// function printBigger(list){
//     let big = list[0];
//     for(let i = 0; i < list.length;i++){
//         if(list[i]>big){
//             big = list[i];
//         }else{
//             big;
//         }
//     console.log(big)
//     }
//     return big;
// }
// console.log(printBigger(numList));

// let randomList = []
// function isOverFifty(list){
//     let count = 0 ;
//     for (let i = 0; i<10; i++){
//         list.push(Math.floor(Math.random()*100))
//     }
//     for (let j = 0; j<list.length; j++){
//         if(list[j]>=50){
//             count++;
//         }
//     }
//     console.log(list)   
//     return count
// }
// console.log(isOverFifty(randomList))

// let secNumlist = [20,6,2,1,6,7];
// function mulMaxMin(fistNumList,secNumList){
//     let big = -999999999999999999;
//     let small = 9999999999999999999;
//     for(let i = 0; i < fistNumList.length;i++){
//         if(fistNumList[i]>big){
//             big = fistNumList[i];
//         }else{
//             big;
//         }
//     }
//     for (let j=0; j<secNumList.length;j++){
//         if(secNumList[j]<small){
//             small = secNumList[j]
//         }else{
//             small
//         }
//     }
//     return big * small
// }
// console.log(mulMaxMin(numList,secNumlist))

// 배열 작은순 정렬
// let sortList = ['a',true,false,1.1,20,15,25,0,-5,6,-22]
// function sortListArr(list){
//     for (let i = 0 ; i <list.length ; i++) {
//         for (let j = 0 ; j<list.length-i; j++) {
//             if(list[j] > list[j+1]){
//                 let temp = list[j];
//                 list[j] = list[j+1];
//                 list[j+1] = temp;
//             }
//         }
//     }
//     return list
// }
// console.log(sortListArr(sortList))
