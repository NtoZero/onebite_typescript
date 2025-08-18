# TypeScript 실행 가이드 - tsx 편

## 📚 목차
1. [tsx란?](#tsx란)
2. [tsx vs ts-node 비교](#tsx-vs-ts-node-비교)
3. [설치 방법](#설치-방법)
4. [실행 방법](#실행-방법)
5. [프로젝트별 실행 예시](#프로젝트별-실행-예시)
6. [고급 사용법](#고급-사용법)
7. [트러블슈팅](#트러블슈팅)
8. [추가 팁](#추가-팁)

---

## tsx란?

**tsx**는 esbuild 기반의 현대적인 TypeScript 실행기입니다. ts-node의 빠르고 가벼운 대안으로, TypeScript 파일을 컴파일 없이 직접 실행할 수 있습니다.

### 🚀 주요 장점
- **⚡ 빠른 속도**: esbuild 기반으로 ts-node보다 10-20배 빠름
- **🔧 Zero Config**: 별도 설정 없이 바로 사용 가능
- **📦 가벼운 용량**: 최소한의 의존성
- **🌟 현대적 지원**: ESM, CommonJS, Node.js 최신 기능 완벽 지원
- **🎯 타입 안전성**: TypeScript 타입 체크 지원

---

## tsx vs ts-node 비교

| 특징 | 🚀 tsx | 🐢 ts-node |
|------|--------|-------------|
| **실행 속도** | ⚡ 매우 빠름 (esbuild) | 상대적으로 느림 |
| **설정 복잡도** | 🟢 거의 불필요 | 🟡 복잡할 수 있음 |
| **ESM 지원** | ✅ 완벽 지원 | ⚠️ 추가 설정 필요 |
| **타입 검사** | 🏃‍♂️ 런타임 생략 (빠름) | 🐌 런타임 타입 검사 |
| **메모리 사용량** | 🟢 적음 | 🟡 상대적으로 많음 |
| **호환성** | ✅ 최신 Node.js | ✅ 광범위한 호환성 |

---

## 설치 방법

### 글로벌 설치 (권장)
```bash
# npm으로 설치
npm install -g tsx

# yarn으로 설치
yarn global add tsx

# pnpm으로 설치
pnpm add -g tsx
```

### 프로젝트별 설치
```bash
# devDependencies로 설치
npm install -D tsx
yarn add -D tsx
pnpm add -D tsx
```

### 설치 확인
```bash
tsx --version
# 출력 예: tsx v4.20.3
```

---

## 실행 방법

### 1. 기본 실행
```bash
# 직접 실행
tsx src/index.ts

# 상대 경로
tsx ./chapter1.ts

# 절대 경로
tsx /path/to/file.ts
```

### 2. Watch 모드 (파일 변경 감지)
```bash
# 파일 변경시 자동 재실행
tsx watch src/index.ts

# 여러 파일 감시
tsx watch src/**/*.ts
```

### 3. REPL 모드
```bash
# TypeScript REPL 실행
tsx

# 모듈 로드하며 REPL 실행
tsx --eval "console.log('Hello tsx!')"
```

### 4. Node.js 옵션과 함께 실행
```bash
# 메모리 제한과 함께 실행
tsx --node-options="--max-old-space-size=4096" src/index.ts

# 디버그 모드
tsx --inspect src/index.ts
```

---

## 프로젝트별 실행 예시

### Section1 실행
```bash
# section1 디렉터리로 이동
cd section1

# TypeScript 파일 실행
tsx src/hello.ts
tsx src/index.ts
tsx src/test.ts
```

### Section2 실행
```bash
# section2 디렉터리로 이동
cd section2

# chapter별 실행
tsx src/chapter1.ts
tsx src/chapter2.ts
tsx src/index.ts

# 루트에서 직접 실행
tsx section2/src/chapter2.ts
```

### Package.json 스크립트 추가
각 section의 `package.json`에 다음 스크립트를 추가하면 편리합니다:

```json
{
  "scripts": {
    "dev": "tsx src/index.ts",
    "dev:watch": "tsx watch src/index.ts",
    "dev:chapter1": "tsx src/chapter1.ts",
    "dev:chapter2": "tsx src/chapter2.ts"
  }
}
```

실행:
```bash
npm run dev
npm run dev:chapter2
npm run dev:watch
```

---

## 고급 사용법

### 1. 환경 변수와 함께 실행
```bash
# 환경 변수 설정
NODE_ENV=development tsx src/index.ts

# .env 파일 로드 (dotenv 필요)
tsx --env-file=.env src/index.ts
```

### 2. TypeScript 컴파일러 옵션 오버라이드
```bash
# 특정 target으로 실행
tsx --tsconfig ./custom-tsconfig.json src/index.ts
```

### 3. Import Map 사용
```bash
# import map과 함께 실행
tsx --import-map=./import-map.json src/index.ts
```

### 4. ESM과 CommonJS 혼합 사용
```typescript
// ESM 형태
import { readFile } from 'fs/promises';

// CommonJS 형태 (tsx가 자동으로 처리)
const path = require('path');
```

---

## 트러블슈팅

### 1. 모듈을 찾을 수 없는 경우
```bash
# 에러: Cannot find module
# 해결: 올바른 경로 확인
tsx src/chapter2.ts  # ✅ 올바름
tsx chapter2.ts      # ❌ 경로 오류 (src 디렉터리에 있는 경우)
```

### 2. ESM 관련 오류
```bash
# package.json에 "type": "module" 있는 경우
# tsx가 자동으로 처리하지만, 명시적 확장자 필요할 수 있음
tsx src/index.ts  # .ts 확장자 명시
```

### 3. 타입 에러 무시하고 실행
```bash
# 타입 에러가 있어도 실행 (권장하지 않음)
tsx --no-cache src/index.ts
```

### 4. 캐시 문제
```bash
# 캐시 클리어
tsx --no-cache src/index.ts

# 또는 캐시 디렉터리 삭제
rm -rf node_modules/.tsx
```

---

## 추가 팁

### 1. IDE 통합
**VS Code**에서 tsx 실행을 위한 tasks.json:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run with tsx",
      "type": "shell",
      "command": "tsx",
      "args": ["${file}"],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    }
  ]
}
```

### 2. 디버깅
```bash
# Chrome DevTools로 디버깅
tsx --inspect src/index.ts

# VS Code에서 디버깅
tsx --inspect-brk src/index.ts
```

### 3. 성능 최적화
```bash
# 더 빠른 실행을 위한 옵션
tsx --no-cache --loader=esbuild src/index.ts
```

### 4. 프로덕션 빌드와 비교
```bash
# 개발: tsx로 빠른 실행
tsx src/index.ts

# 프로덕션: 컴파일 후 실행
tsc && node dist/index.js
```

### 5. 유용한 알리아스 설정
```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
alias tsr="tsx"                    # tsx 줄임말
alias tsw="tsx watch"              # watch 모드
alias tsd="tsx --inspect"          # 디버그 모드
```

---

## 📖 참고 링크

- [tsx GitHub Repository](https://github.com/esbuild-kit/tsx)
- [esbuild 공식 문서](https://esbuild.github.io/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [Node.js ESM 가이드](https://nodejs.org/api/esm.html)

---

## 🎯 마무리

tsx는 현대적인 TypeScript 개발에 필수적인 도구입니다. 빠른 실행 속도와 간편한 사용법으로 개발 생산성을 크게 향상시킬 수 있습니다. 

프로젝트에서 TypeScript를 학습하거나 개발할 때 tsx를 적극 활용해보세요!

---

*이 가이드는 TypeScript 학습 프로젝트를 위해 작성되었습니다.*
*최신 정보는 공식 문서를 참고해주세요.*