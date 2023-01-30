/*1*/ let name = "Adam";
console.log(name);

//string //2

/*Неизменяемый тип данных константа*/ const age = 23;

/*4*/ if (age < 15) {
  console.log("доступ запрещен");
} else {
  console.log(`Привет ${name} `);
}

/*5*/ function viewMoney() {
  console.log("Вот вам 10$");
}
viewMoney();

/*6*/ function getMoney(x) {
  return x;
}
console.log(getMoney("Вот вам 10$"));

/*9*/ function func(a, b, c) {
  console.log(Math.max(a, b, c));
}
func(5, 9, 7);

/*8*/ function money(r) {
  console.log(Math.pow(r, 2));
}
money(2);

/*7*/ function dollar(x, y, z) {
  if (5 > 10) {
    return x;
  } else if (5 < 10) {
    return y;
  } else {
    return z;
  }
}
console.log(dollar("Вот вам 399$", "Вот вам 100$", "Вот вам 0$"));

/*11*/ function code(x, y) {
  return x * y;
}
console.log(code(4, 8));
