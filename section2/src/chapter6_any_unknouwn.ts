/**
 * TypeScript의 타입 검사를 완전히 비활성화
 * - 모든 값을 허용, Javascript와 동일한 동적 타이핑 제공
 *
 * # 특징
 * 1. 모든 연산과 접근 허용
 * 2. 타입 전파 (Type Propagation)
 *
 * # 문제점
 * 1. 타입 안전성 완전 상실
 * 2. 자동완성과 IntelliSense 상실
 * 3. 리팩토링 어ㅕ룽ㅁ
 */

let anyVar0 = 10;
// anyVar0 = "hello"; // 오류 발생!
                  // 타입스크립트에서는 변수의 타입이 변수를 초기화할 때 초기화 값을 기준으로 추론

let anyVar : any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

/**
 * unknown 타입
 * - 모든 값을 받을 수 있지만 사용하기 전에 반드시 타입 검증이 필요한 "안전한 any"
 */

// unknown 타입은 어떤 타입의 값이든 모두 저장 가능.
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

let num: number = 10;
// num = unknownVar; // unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없음.
                  // TS2322: Type unknown is not assignable to type number


if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  num = unknownVar * 2;
}