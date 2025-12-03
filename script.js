//your JS code here. If required.
const output = document.getElementById("output");
const input = document.getElementById("ip");
const btn = document.getElementById("btn");

btn.addEventListener("click", handleFunction);

async function handleFunction() {
  return new Promise((resolve) => {
    const ip = input.value;
    setTimeout(() => {
      resolve(ip);
      output.textContent = `Result: ${ip}`;
    }, 2000);
  })
    .then((num) => {
      return new Promise((resolve) => {
        const multiply = num * 2;
        setTimeout(() => {
          output.textContent = `Result: ${multiply}`;
          resolve(multiply);
        }, 2000);
      });
    })
    .then((num2) => {
      return new Promise((resolve) => {
        const sub = num2 - 3;
        setTimeout(() => {
          output.textContent = `Result: ${sub}`;
          resolve(sub);
        }, 1000);
      });
    })
    .then((num3) => {
      return new Promise((resolve) => {
        const divide = num3 / 2;
        setTimeout(() => {
          output.textContent = `Result: ${divide}`;
          resolve(divide);
        }, 1000);
      });
    })
    .then((num4) => {
      return new Promise((resolve) => {
        const add = num4 + 10;
        setTimeout(() => {
          output.textContent = `Result: ${add}`;
          resolve(add);
        }, 1000);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
