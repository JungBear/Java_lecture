
// // let numlist=[170,203,145,766,8,9,'a']
// // function fiveArr(list){
// //     let arr = [];
// //     for (let i=0; i<list.length;i++){
// //         if (list[i]%5==0){
// //             arr.push(list[i]);
// //         }
// //     }
// //     return arr;
// // }
// // console.log(fiveArr(numlist));

// // function getAverage(list){
// //     let average = 0;
// //     let count = 0;
// //     for(let i = 0; i<list.length;i++){
// //         if (typeof(list[i])=='number'){
// //             average += list[i]
// //             count++;
// //         }
// //     }
// //     average = average/count;
// //     return average
// // }
// // console.log(getAverage(numlist));

// // let arr1 = [1,2,3,11,5];
// // arr1.sort(function(a,b){
// //     return a-b;
// // });
// // console.log(arr1);

// let arr1 = ['티파니','조이','태연','제시카','에일리'];
// let arr2 = ['유노윤호','키','최강창민','공유','원빈','박보검'];
// let arr3 = ['강남','이상화','오윤아','김동국'];

// function present(list,number){
//     // console.log(list.sort())
//     // console.log(`${list.sort()[number-1]}에게 발표를 시켜라`);
//     let arr4=list.sort()
//     if (typeof(arr4[number-1])!='undefined'){
//         return arr4[number-1]
//     }else{
//         return '해당번호가 없습니다';
//     }
// }
// console.log(present(arr3,1));