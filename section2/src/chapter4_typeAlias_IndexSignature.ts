/**
 * 타입별칭 (Type Alias)
 * : 기존 타입에 새로운 이름을 부여하는 TypeScript 기능
 * - 'type' 키워드를 사용해서 만듦.
 *
 *  # 언제 사용?
 *  1. 복잡한 타입을 재사용할 때
 *  2. 코드 가독성을 높이고 싶을 때
 *  3. 타입에 의미있는 이름을 주고 싶을 때
 *  4. API 응답 타입을 정의할 때
 *
 *  # 특징
 *  - 동일한 스코프에 동일한 이름의 타입 별칭을 선언하는 것은 불가능. (like 변수 선언)
 *
 *  # Interface vs Type Alias 비교
 *  1. Type Alias : 모든 타입(유니온, 튜플 등)에 이름 제공
 *  2. Interface : 주로 객체 구조를 정의할 때 사용, 확장
 */

// 1. 기본 타입 별칭
type UserID = string;
type Age = number;
type IsActive = boolean;

const userId: UserID = "user123";
const userAge: Age = 25;
const active: IsActive = true;


// 2. 함수 타입 별칭
type EventHandler = (event: Event) => void;
type Calculator = (a: number, b: number) => number;

const handleClick: EventHandler = (event) => {
  console.log('클릭됨');
};

const add: Calculator = (a, b) => a + b;
console.log(add(1, 3));

// 3. 유니온 타입 별칭
type Status = 'loading' | 'success' | 'error';
type Theme = 'light' | 'dark';

const currentStatus: Status = 'loading';


// 4. 객체 타입 별칭 👍 (가장 많이 사용)
type User = {
  id: number;
  name: string;
  email?: string;
  nickname?: string;
  birth?: string;
  bio?: string;
  location?: string;
};

const user: User = {
  id: 123,
  name: "김철수",
  email: "kim@example.com"
};

let user2: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user3: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 스코프가 다르다면 중복된 이름으로 여러개의 별칭을 선언해도 상관 없음.
function test() {
  // 이 함수 내부 스코프에서 User는 string 타입이고, 외부에서는 객체 타입임.
  type User = string;
}

/** =================================================================== */

/**
 * 인덱스 시그니처(Index Signature)
 * : 객체의 키와 값의 타입을 미리 정의하지만, 구체적인 속성명을 모를 때 사용하는 Typescript 기능
 * - 객체 타입을 유연하게 정의할 수 있도록 돕는 문법
 * */

// 다양한 국가들의 영어 코드를 저장하는 객체
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
  // todo: (... 약 100개의 국가)
  // Brazil : string
};

// countryCodes에 100개의 프로퍼티(국가 코드)가 추가 되어야 한다면 타입 정의에도 각 프로퍼티를 모두 정의해주어야 하기 때문에 매우 불편할 것
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // todo: (약 100개의 국가)
  // Brazil : 'bz'
};

// 인덱스 시그니처 사용
type CountryCodes2 = {
  // NOTE:  key가 string 타입이고 value가 string 타입인 모든 프로퍼티를 포함된다
  [key: string]: string;
};

let countryCodes2: CountryCodes2 = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  // (... 약 100개의 국가)
  Brazil : 'bz'
};

// 인덱스 시그니처 사용2
type CountryNumberCodes = {
  [key: string]: number;
  // NOTE: 만약 반드시 포함해야 하는 프로퍼티가 있다면 직접 명시
  Korea: number;
};

// WARN: 인덱스 시그니처를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니처의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 한다.
// 다음과 같이 서로 호환되지 않는 타입으로 설정되면 오류가 발생한다.
// type CountryNumberCodes2 = {
//   [key: string]: number;
//   Korea: string; // 오류! //ERROR: string이 number 타입과 호환되지 않기 때문에 에러가 발생한다. (자세한 내용 섹션3)
// };