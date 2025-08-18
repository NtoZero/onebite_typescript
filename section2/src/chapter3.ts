/** 객체 타입 정의 */
let user: object = {
  id: 1,
  name: "이정환",
};

// object 타입 정의 시 문제 발생
  // 점 표기법으로 객체의 특정 프로퍼티에 접근하려고 하면 오류 발생
  //user.id; // 타입스크립트의 object 타입은 단순 값이 객체임을 표현하는 것 외에는 아무런 정보도 제공하지 않음.
          // 따라서 객체의 프로퍼티에 대한 정보를 전혀 가지고 있지 않음.

/** 객체 리터럴 타입
 *  : 객체를 선언할 때, 그 형태(프로퍼티의 이름, 타입)를 명확히 지정하는 타입.
 * */
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user2.id; // 객체 리터럴 타입은 object 타입과 다르게 점 프로퍼티로 접근 가능

// Java와 C와 달리 타입스크립트의 객체 리터럴 타입은 프로퍼티를 기준으로 타입을 정함. (duck typing과 연관?)
let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
}


/**
 * 특수한 프로퍼티 정의하기
 *  1. 특정 프로퍼티를 선택적으로 만들기
 *  2. 특정 프로퍼티를 읽기 전용으로 만들기
 * */


/**
 * 선택적 프로퍼티 (Optional Property)
 */
// user2 = {
//   name: "홍길동", // 오류 발생 TS2741: Property id is missing in type { name: string; } but required in type { id: number; name: string; }
// }

let user3: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user3 = {
  name: "홍길동"
};

/**
 * 읽기 전용 프로퍼티 (Readonly Property)
 */
let user4: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

// user4.name = "dkfd"; // TS2540: Cannot assign to name because it is a read-only property.
