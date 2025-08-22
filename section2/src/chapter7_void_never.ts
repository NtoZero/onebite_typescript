/**
 * void 타입
 * - void는 "아무것도 반환하지 않음"을 나타내는 타입
 * - 주로 함수가 값을 반환하지 않을 때 사용
 * */

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// undefined, null 타입이 있는데 왜 void가 필요한가?
  // undefined를 반환하거나 return;으로 끝내야 한다.
function func3(): undefined {
  // return undefined;
  return;
}

/**
 * never: "절대 발생하지 않는 값"을 나타내는 타입
 * - 함수가 정상적으로 끝나지 않을 때 사용
 */

function infiniteLoop(): never {
  while (true) {
    console.log("This runs forever");
  }
  // 이 지점에 도달하지 않음
}

// 항상 에러를 던지는 함수
function throwError(message: string): never {
  throw new Error(message);
  // 이 지점에 도달하지 않음
}

let a: never; // 아래는 모두 오류 발생
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;