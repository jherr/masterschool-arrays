const numbers = [10, 20, 30, 40, 50];

const times100 = (value) => {
  return value * 100;
};

times100(10);
times100(5);

const numbersTimes100 = numbers.map(times100);

numbers.map((value) => value * 6);

function greaterThanTwenty(value) {
  if (value > 20) {
    return true;
  }
  return false;
}

greaterThanTwenty(10);
greaterThanTwenty(20);
greaterThanTwenty(21);

numbers.filter(greaterThanTwenty);
