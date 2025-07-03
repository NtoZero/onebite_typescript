/**
 * ☘️ 원시 타입
 * */

/** 1. number*/
let num1: number = 123;       // 타입 애너테이션
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;       // 문자/숫자, 0/0, 음수 제곱근 등 NaN != NaN

// num1 = 'hello';  // ❌
// num2.toUpperCase();  // ❌

/** 2. string */
let str1: string = "hello";
let str2: string = 'hello';         // 작은 따옴표
let str3: string = `hello`;         // 백틱
let str4: string = `hello ${str1}`; // 템플릿 리터럴

/** 3. boolean */
let bool1 : boolean = true;
let bool2 : boolean = false;

/** 4. null : 오직 null만 포함 */
let null1 : null = null;

/** 5. undefined : 오직 undefined만 포함 */
let unde1: undefined = undefined;

/** null 값을 다른 타입의 변수에 할당하기 => ❌
 *
 * 단, tsconfig.json의 strictNullChecks 옵션을 false로 설정하면 된다.
 * */
// let numA: number = null; // ❌


/**
 * ☘️ 리터럴 타입
 * 딱 하나의 값만 포함하는 타입도 존재.
 * */
let numA: 10 = 10;
numA = 10;
// numA = 11; // ❌

let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;