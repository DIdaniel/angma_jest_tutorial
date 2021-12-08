const { fn, fn2 } = require("./fn");

// describe("add function", () => {
//   expect(fn.add(1, 10)).toBe(11);
// });

test("ADD function", () => {
  expect(fn.add(1, 10)).toBe(11);
});
test("ADD function NOT!", () => {
  expect(fn.add(1, 10)).toEqual(11);
});

// 객체나 배열은 재귀적으로 돌면서 값을 확인 해야하므로 toEqual or toStrictEqual을 사용해야한다
test("이름과 나이를 전달 받아서 객체를 반환", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

// test("이름과 나이를 전달 받아서 객체를 반환", () => {
//   expect(fn.makeUser("Mike", 30)).Equal({
//     name: "Mike",
//     age: 30,
//   });
// });

// toBeNull
// toBeUndefiend
// toBeDefined
test("null은 null이다", () => {
  expect(null).toBeNull();
});

// toBeTruthy, toBeFalsy - boolean 값 판별
test("0은 false이다!", () => {
  expect(fn.add(1 - 1)).toBeFalsy();
});

// 숫자 관련
// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
// toEqual 같다

test("ID는 10자 이하 입니다.", () => {
  // const id = "THE_BLACK_ORDER";
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호는 4자리만!", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

//////
// 정규식 정규표현식 테스트하기
// i : 대소문자 구분 없애기
test("Hello world에 a 라는 글자 있나?", () => {
  expect("Hello world").toMatch(/H/i);
});

///////
// 배열에서 특정 요소가 있는지 확인
test("User list에서 Mike가 있는가?", () => {
  const user = "MIKE";
  const userList = ["Tom", "Jane", "Kai", "MIKE"];
  expect(userList).toContain(user);
});

////////
// 함수의 예외 찾기
// toThrow
test("이거 에러 날까?", () => {
  expect(() => fn.throwErr()).toThrow("예외 발생!!");
});

//////////
// 비동기 코드 테스트
// done을 넣으면 3초가 걸리게 된다.
test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn2.getName(callback);
});
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (err) {
//       done();
//     }
//   }
//   fn2.getName(callback);
// });

// Promise를 사용하면 return을 해줘야 한다
// test("3초 후에 받아온 나이는 30", () => {
//   return fn2.getAge().then((age) => {
//     expect(age).toBe(30);
//   });
// });
// // or
// test("3초 후에 받아온 나이는 30", () => {
//   return expect(fn2.getAge()).resolves.toBe(30);
// });

// async, await을 사용 할 수도 있다!
// test("3초 후에 받아온 나이는 30", async () => {
//   const age = await fn2.getAge();
//   expect(age).toBe(30);
// });

//////// Jest의 테스트 전후의 작업을 위한 help 함수,
let num = 10;

beforeEach(() => {
  num = 0;
});

test("0 더하기 1은 1", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});

test("0 더하기 4은 4", () => {
  num = fn.add(num, 4);
  expect(num).toBe(4);
});

// 이렇게 하면 num에 계속 해서 더해져서 결과 값이 다르게 나온다
// 그래서 num을 초기화 해줘야하는데 이를 위한 것이 beforeEach
// beforeEach : 초기 실행 되기 전 초기화 되는 것
// => let num에 어떤 숫자가 오던 초기화되서 상관 없다
// afterEach : 테스트 직후에 변화한다.
// => 첫 번째 테스트는 10이 대입되므로 통과하지 못하고 이 후부터 0으로 되어 통과된다.

// 목 함수 mock functions
const mockFn = jest.fn();
mockFn();
mockFn(1);
test("목함수 연습", () => {
  console.log(mockFn.mock.calls);
  // calls로 알 수 있는 것
  // 1. 몇 번 호출 되었는가?
  // 2. 호출 될 때 전달 된 인수는 무엇인가?
  expect("목함수 연습").toBe("목함수 연습");
});

test("목함수는 2번 호출 된다", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

const mockFn2 = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn2(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("mockFn2 함수 호출은 3번 됩니다", () => {
  expect(mockFn2.mock.calls.length).toBe(3);
});

test("전달 된 값은 11, 21, 31", () => {
  expect(mockFn2.mock.calls[0][0]).toBe(11);
  expect(mockFn2.mock.calls[1][0]).toBe(21);
  expect(mockFn2.mock.calls[2][0]).toBe(31);
});
