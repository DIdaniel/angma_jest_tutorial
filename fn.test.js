const fn = require("./fn");

// describe("add function", () => {
//   expect(fn.add(1, 10)).toBe(11);
// });

test("ADD function", () => {
  expect(fn.add(1, 10)).toBe(11);
});
test("ADD function NOT!", () => {
  expect(fn.add(1, 10)).toEqual(11);
});

test("이름과 나이를 전달 받아서 객체를 반환", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});
