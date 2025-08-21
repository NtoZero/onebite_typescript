/**
 * enum(열거형)
 * Enum(열거형)은 관련된 상수들을 하나의 그룹으로 묶어서 관리할 수 있게 해주는 TypeScript의 고유 기능
 * - Javascript에서는 존재하지 않고 오직 타입스크립트에서만 사용 가능
 */

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
  GUEST2// 숫자를 지정하지 않아도 자동 할당
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, //관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 회원
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
};

/**
 * 문자형 열거형 (권장)
 * 컴파일시 자바스크립트 객체로 치환된다.
 *
 * # 사용
 * 1. 런타임에 enum 순회가 필요한 경우
 * 2. 동적으로 enum 값을 검증해야 할 때
 * 3. 디버깅이 중요한 개발 환경
 */
enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
}

const user4 = {
  name: "이정환",
  role: Role.ADMIN, // 0
  language: Language.KOREAN,// "ko"
};

console.log(Language.KOREAN);


/**
 * const enum
 * const enum은 컴파일 시 직접 값으로 치환된다.
 * const mycolor = "red";
 *
 * # 사용
 * 1. 성능이 중요한 상수값들
 * 2. 설정값이나 상수
 * 3. 라이브러리나 유틸리티에서
 *
 * # 단점
 * const enum은 런타임에 완전히 사라지기 때문에 순회나 동적 검증이 불가능하다.
 *
 *
 */
const enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

const myColor = Color.Red;
console.log(Color.Red);