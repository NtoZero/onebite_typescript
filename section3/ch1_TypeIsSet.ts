/**
 * number > number literal
 * - SuperType : number
 * - SubType : number literal
 */
let num : number = 10;
let numLiteral : 10 = 10;
console.log(typeof num);
console.log(typeof numLiteral); // 어차피 number

/**
 * 타입 호환성
 * : A와 B 두 개의 타입이 존재할 때 A 타입의 값을 B 타입으로 취급하는 성질
 *
 * - 구조적 타이핑:
 *  타입의 이름이 아닌 구조(멤버)가 같으면 호환된다고 봄
 *
 *  특징:
 *  1. 업캐스팅: 서브타입의 값은 슈퍼타입에 할당될 수 있다.
 *      - 업캐스팅은 모든 상황에서 가능하다.
 *  2. 다운 캐스팅: 슈퍼타입의 값을 서브타입의 값으로 취급하는 것을 허용하지 않는다.
 *      - 다운 캐스팅은 대부분의 상황에서 불가능하다.
 *      - 더 좁은 범위로 제한하려하는데, 제한을 벗어나려고 함.
 */
// number 타입에 number Literal 타입을 입력하는 것은 가능
num = numLiteral;
// number Literal 타입에 number 타입을 대입하는 것은 불가능
// numLiteral = num;

/**
 * 추가 키워드 :
 *  1. 공변성
 *  2. 반공변성
 */