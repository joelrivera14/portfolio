console.log("test");
//CODING ASSIGNMENT
//Write a function that accepts an amount of money. The function should act as a cashier and
// make change for that amount of money. The function should return the minimum number of total coins possible.

function cashier(money) {
  let quarters = 0;
  let dimes = 0;
  let nickles = 0;
  let pennies = 0;

  quarters = Math.floor(money / 25);
  money %= 25;

  dimes = Math.floor(money / 10);
  money %= 10;

  nickles = Math.floor(money / 5);
  money %= 5;

  pennies = money;
  console.log(quarters, dimes, nickles, pennies);
}
cashier(20);
