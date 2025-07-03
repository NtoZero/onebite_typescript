# TypeScript 타입 애너테이션 완벽 가이드

## 📋 목차
1. [타입 애너테이션이란?](#타입-애너테이션이란)
2. [기본 타입 애너테이션](#기본-타입-애너테이션)
3. [함수 타입 애너테이션](#함수-타입-애너테이션)
4. [객체와 인터페이스](#객체와-인터페이스)
5. [배열과 튜플](#배열과-튜플)
6. [고급 타입](#고급-타입)
7. [React에서의 활용](#react에서의-활용)
8. [Next.js 실무 예제](#nextjs-실무-예제)
9. [베스트 프랙티스](#베스트-프랙티스)
10. [자주 하는 실수와 해결법](#자주-하는-실수와-해결법)

---

## 타입 애너테이션이란?

타입 애너테이션(Type Annotation)은 TypeScript에서 변수, 함수, 객체 등에 **명시적으로 타입을 지정**하는 문법입니다.

### 왜 사용하나요?

```typescript
// JavaScript (런타임 오류 발생 가능)
function greet(name) {
  return "Hello, " + name.toUpperCase();
}

greet(123); // 런타임 오류: name.toUpperCase is not a function

// TypeScript (컴파일 타임에 오류 감지)
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}

greet(123); // ❌ 컴파일 오류: Argument of type 'number' is not assignable to parameter of type 'string'
```

---

## 기본 타입 애너테이션

### 원시 타입

```typescript
// 문자열
let userName: string = "김철수";
let message: string = `안녕하세요, ${userName}님!`;

// 숫자
let age: number = 25;
let price: number = 19.99;
let hexValue: number = 0xf00d;

// 불린
let isLoggedIn: boolean = true;
let isComplete: boolean = false;

// null과 undefined
let data: null = null;
let value: undefined = undefined;

// any (가급적 사용 금지)
let anything: any = "문자열이었다가";
anything = 123; // 숫자가 되고
anything = true; // 불린이 되기도 함
```

### 리터럴 타입

```typescript
// 문자열 리터럴
let status: "loading" | "success" | "error" = "loading";

// 숫자 리터럴
let direction: 1 | -1 = 1;

// 불린 리터럴
let isEnabled: true = true;
```

---

## 함수 타입 애너테이션

### 기본 함수

```typescript
// 일반 함수 선언
function add(a: number, b: number): number {
  return a + b;
}

// 화살표 함수
const multiply = (a: number, b: number): number => a * b;

// 선택적 매개변수
function greet(name: string, greeting?: string): string {
  return `${greeting || "안녕하세요"}, ${name}님!`;
}

// 기본값이 있는 매개변수
function createUser(name: string, age: number = 18): object {
  return { name, age };
}

// 나머지 매개변수
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
```

### 함수 타입 변수

```typescript
// 함수 타입 정의
type Calculator = (a: number, b: number) => number;

// 함수 타입 사용
let operation: Calculator;
operation = (x, y) => x + y; // 타입 추론으로 매개변수 타입 자동 설정

// 콜백 함수
function processData(data: string[], callback: (item: string) => void): void {
  data.forEach(callback);
}
```

---

## 객체와 인터페이스

### 객체 타입 직접 선언

```typescript
// 인라인 객체 타입
let user: { name: string; age: number; email?: string } = {
  name: "이영희",
  age: 30
};

// 중첩 객체
let product: {
  id: number;
  name: string;
  details: {
    price: number;
    category: string;
  };
} = {
  id: 1,
  name: "노트북",
  details: {
    price: 1200000,
    category: "전자제품"
  }
};
```

### 인터페이스 활용

```typescript
// 기본 인터페이스
interface User {
  readonly id: number;    // 읽기 전용
  name: string;
  age: number;
  email?: string;         // 선택적 프로퍼티
  [key: string]: any;     // 인덱스 시그니처
}

// 인터페이스 확장
interface AdminUser extends User {
  permissions: string[];
  lastLogin: Date;
}

// 인터페이스 구현
class UserService implements User {
  readonly id: number;
  name: string;
  age: number;
  
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
```

### 타입 별칭 vs 인터페이스

```typescript
// 타입 별칭 (Type Alias)
type Point = {
  x: number;
  y: number;
};

type StringOrNumber = string | number;

// 인터페이스 (Interface)
interface Point2 {
  x: number;
  y: number;
}

// 차이점: 인터페이스는 확장 가능, 타입 별칭은 유니온/교집합 가능
```

---

## 배열과 튜플

### 배열 타입

```typescript
// 배열 선언 방법들
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["사과", "바나나", "오렌지"];

// 다차원 배열
let matrix: number[][] = [[1, 2], [3, 4]];

// 객체 배열
interface Product {
  id: number;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: 1, name: "노트북", price: 1200000 },
  { id: 2, name: "마우스", price: 50000 }
];

// 읽기 전용 배열
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // ❌ 오류: push 메서드 사용 불가
```

### 튜플 타입

```typescript
// 기본 튜플
let coordinate: [number, number] = [10, 20];

// 라벨이 있는 튜플
let person: [name: string, age: number] = ["김철수", 25];

// 선택적 요소가 있는 튜플
let response: [string, number?] = ["success"];

// 나머지 요소가 있는 튜플
let scores: [string, ...number[]] = ["김철수", 90, 85, 92];

// 읽기 전용 튜플
let point: readonly [number, number] = [10, 20];
```

---

## 고급 타입

### 유니온과 교집합 타입

```typescript
// 유니온 타입 (OR)
type Status = "idle" | "loading" | "success" | "error";
type ID = string | number;

function printId(id: ID) {
  if (typeof id === "string") {
    console.log(`문자열 ID: ${id.toUpperCase()}`);
  } else {
    console.log(`숫자 ID: ${id.toFixed(2)}`);
  }
}

// 교집합 타입 (AND)
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

let customer: Customer = {
  name: "ABC 회사",
  credit: 1000000,
  email: "contact@abc.com",
  phone: "010-1234-5678"
};
```

### 제네릭 타입

```typescript
// 기본 제네릭
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<string>("hello");
let result2 = identity<number>(42);

// 제네릭 인터페이스
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

interface User {
  id: number;
  name: string;
}

let userResponse: ApiResponse<User> = {
  success: true,
  data: { id: 1, name: "김철수" }
};

// 제네릭 제약
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello");     // ✅ 문자열은 length 프로퍼티가 있음
logLength([1, 2, 3]);   // ✅ 배열도 length 프로퍼티가 있음
// logLength(123);      // ❌ 숫자는 length 프로퍼티가 없음
```

### 유틸리티 타입

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial: 모든 프로퍼티를 선택적으로
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; password?: string; }

// Required: 모든 프로퍼티를 필수로
type RequiredUser = Required<PartialUser>;

// Pick: 특정 프로퍼티만 선택
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;
// { id: number; name: string; email: string; }

// Omit: 특정 프로퍼티 제외
type CreateUser = Omit<User, 'id'>;
// { name: string; email: string; password: string; }

// Record: 키-값 매핑
type UserRoles = Record<string, string>;
// { [key: string]: string; }
```

---

## React에서의 활용

### 컴포넌트 Props

```typescript
// 기본 Props 타입
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  size = 'medium'
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size}`}
    >
      {children}
    </button>
  );
};

// 제네릭 컴포넌트
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor?: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor ? keyExtractor(item) : index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}
```

### 이벤트 핸들러

```typescript
// 이벤트 핸들러 타입
interface FormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

const ContactForm: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('버튼 클릭됨');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleInputChange} />
      <input name="email" type="email" onChange={handleInputChange} />
      <button type="submit" onClick={handleButtonClick}>
        제출
      </button>
    </form>
  );
};
```

### 상태 관리

```typescript
// useState 타입
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);

// 복잡한 상태 객체
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

const [state, setState] = useState<AppState>({
  user: null,
  theme: 'light',
  notifications: []
});

// useReducer 타입
type Action = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'TOGGLE_THEME' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification };

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState);
```

---

## Next.js 실무 예제

### 페이지 컴포넌트

```typescript
// pages/users/[id].tsx
import { GetServerSideProps, NextPage } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserPageProps {
  user: User;
  error?: string;
}

const UserPage: NextPage<UserPageProps> = ({ user, error }) => {
  if (error) {
    return <div>오류: {error}</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>이메일: {user.email}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  const { id } = context.params!;
  
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const user: User = await response.json();
    
    return {
      props: { user }
    };
  } catch (error) {
    return {
      props: {
        user: { id: 0, name: '', email: '' },
        error: '사용자를 찾을 수 없습니다.'
      }
    };
  }
};

export default UserPage;
```

### API 라우트

```typescript
// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

type ApiResponse = {
  success: boolean;
  data?: User[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'GET') {
    // 사용자 목록 조회
    const users: User[] = [
      { id: 1, name: '김철수', email: 'kim@example.com' },
      { id: 2, name: '이영희', email: 'lee@example.com' }
    ];
    
    res.status(200).json({ success: true, data: users });
  } else if (req.method === 'POST') {
    // 새 사용자 생성
    const { name, email }: Omit<User, 'id'> = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        error: '이름과 이메일은 필수입니다.' 
      });
    }
    
    const newUser: User = {
      id: Date.now(),
      name,
      email
    };
    
    res.status(201).json({ success: true, data: [newUser] });
  } else {
    res.status(405).json({ success: false, error: '허용되지 않는 메소드입니다.' });
  }
}
```

### 커스텀 훅

```typescript
// hooks/useApi.ts
import { useState, useEffect } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends ApiState<T> {
  refetch: () => void;
}

function useApi<T>(url: string): UseApiReturn<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  const fetchData = async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: T = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error instanceof Error ? error.message : '알 수 없는 오류' 
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    ...state,
    refetch: fetchData
  };
}

// 사용법
const UserList: React.FC = () => {
  const { data: users, loading, error, refetch } = useApi<User[]>('/api/users');

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류: {error}</div>;
  if (!users) return <div>데이터가 없습니다.</div>;

  return (
    <div>
      <button onClick={refetch}>새로고침</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## 베스트 프랙티스

### 1. 타입 추론 활용하기

```typescript
// ❌ 불필요한 타입 애너테이션
let name: string = "김철수";
let numbers: number[] = [1, 2, 3];

// ✅ 타입 추론 활용
let name = "김철수";           // string으로 추론
let numbers = [1, 2, 3];      // number[]로 추론

// ✅ 필요한 경우에만 명시
let user: User | null = null; // 초기값이 null이므로 타입 명시 필요
```

### 2. Strict 모드 사용

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

### 3. 타입 가드 활용

```typescript
// 타입 가드 함수
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === 'string' && typeof obj.age === 'number';
}

// 사용 예
function processValue(value: unknown) {
  if (isString(value)) {
    // 여기서 value는 string 타입으로 추론됨
    console.log(value.toUpperCase());
  }
}
```

### 4. 유니온 타입 대신 discriminated union 사용

```typescript
// ❌ 일반 유니온 타입
interface LoadingState {
  status: "loading";
  data?: any;
  error?: string;
}

interface SuccessState {
  status: "success";
  data: any;
  error?: string;
}

interface ErrorState {
  status: "error";
  data?: any;
  error: string;
}

// ✅ Discriminated Union
type ApiState = LoadingState | SuccessState | ErrorState;

function handleState(state: ApiState) {
  switch (state.status) {
    case "loading":
      // state.data는 undefined일 수 있음을 타입스크립트가 알고 있음
      break;
    case "success":
      // state.data가 반드시 존재함을 타입스크립트가 알고 있음
      console.log(state.data);
      break;
    case "error":
      // state.error가 반드시 존재함을 타입스크립트가 알고 있음
      console.error(state.error);
      break;
  }
}
```

### 5. 재사용 가능한 타입 정의

```typescript
// types/common.ts
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export type LoadingState = "idle" | "loading" | "success" | "error";

// 사용
import { ApiResponse, PaginatedResponse, LoadingState } from '@/types/common';

interface User {
  id: number;
  name: string;
  email: string;
}

const userResponse: ApiResponse<User> = await fetchUser(1);
const usersResponse: PaginatedResponse<User> = await fetchUsers({ page: 1, limit: 10 });
```

---

## 자주 하는 실수와 해결법

### 1. any 타입 남용

```typescript
// ❌ 잘못된 방법
let data: any = await fetchData();

// ✅ 올바른 방법
interface ApiData {
  id: number;
  name: string;
}

let data: ApiData = await fetchData();

// 또는 unknown 사용 후 타입 가드
let data: unknown = await fetchData();
if (isApiData(data)) {
  // 이제 data는 ApiData 타입으로 추론됨
  console.log(data.name);
}
```

### 2. 옵셔널 체이닝 없이 중첩 객체 접근

```typescript
// ❌ 위험한 방법
function getUserCity(user: User) {
  return user.address.city; // user.address가 undefined일 수 있음
}

// ✅ 안전한 방법
interface User {
  name: string;
  address?: {
    city: string;
    street: string;
  };
}

function getUserCity(user: User): string | undefined {
  return user.address?.city;
}
```

### 3. 이벤트 타입 잘못 지정

```typescript
// ❌ 잘못된 방법
function handleClick(e: Event) {
  e.preventDefault(); // Event에는 preventDefault가 없을 수 있음
}

// ✅ 올바른 방법
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  console.log(e.currentTarget.textContent);
}

function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
}
```

### 4. 제네릭 타입 매개변수 누락

```typescript
// ❌ 타입 정보 손실
const users = useState([]); // any[] 타입으로 추론

// ✅ 명확한 타입 지정
const [users, setUsers] = useState<User[]>([]);

// ✅ API 응답 타입도 제네릭으로
async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}

const userResponse = await fetchData<User>('/api/user/1');
```

### 5. 타입 단언 남용

```typescript
// ❌ 위험한 타입 단언
const user = data as User; // data가 실제로 User 형태인지 확신할 수 없음

// ✅ 타입 가드 사용
function isUser(data: unknown): data is User {
  return (
    typeof data === 'object' &&
    data !== null &&
    'name' in data &&
    'email' in data &&
    typeof (data as any).name === 'string' &&
    typeof (data as any).email === 'string'
  );
}

if (isUser(data)) {
  // 이제 안전하게 User로 사용 가능
  console.log(data.name);
}
```

---

## 참고 자료

### 공식 문서
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [React TypeScript 가이드](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js TypeScript 문서](https://nextjs.org/docs/basic-features/typescript)

### 유용한 도구
- [TypeScript Playground](https://www.typescriptlang.org/play) - 온라인에서 TypeScript 코드 테스트
- [JSON to TypeScript](https://transform.tools/json-to-typescript) - JSON을 TypeScript 인터페이스로 변환
- [TypeScript AST Viewer](https://ts-ast-viewer.com/) - TypeScript AST 구조 확인

### VSCode 확장 프로그램
- TypeScript Importer - 자동 import 추가
- Auto Rename Tag - 태그 이름 자동 변경
- Bracket Pair Colorizer - 괄호 색깔 구분
- Error Lens - 인라인 오류 표시

---

**💡 팁**: 타입 애너테이션은 코드의 안정성과 가독성을 높이는 강력한 도구입니다. 처음에는 복잡해 보일 수 있지만, 꾸준히 사용하다 보면 버그를 줄이고 개발 경험을 크게 향상시킬 수 있습니다!