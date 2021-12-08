const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),

  throwErr: () => {
    throw new Error("예외 발생!!");
  },
};

const fn2 = {
  add: (num1, num2) => num1 + num2,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => callback(name), 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = { fn, fn2 };
