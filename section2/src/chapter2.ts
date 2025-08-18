export {};

/** 배열 */
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];

// Array<boolean> 형태로 배열 타입 지정 가능
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의하기 ('|' 사용)
let multiArr = [1, "hello"];
let multiArr2: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의하기
let doubleArr : number[][] = [
  [1, 2, 3],
  [4, 5],
]


/** 튜플 :
 *  - 길이와 타입이 고정된 배열
 *  - 자바스크립트에는 존재하지 않음.
 *  */
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean]  = [1, "hello", true];

// 결국 배열이므로 push등 메서드를 활용하게 되면 튜플이 의미 없어짐.
tup1.push(1);
tup1.push(1);
tup1.push(1);
tup1.push(1);

console.log(tup1);

// 튜플은 왜 쓰는 걸까?
  // 튜플의 배열
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "조아무개"], // <- 새로 추가함 (오류 발생)
];

console.log(users);