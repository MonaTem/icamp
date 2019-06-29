const Power = (x, n) => {
  let temp = 0;
  if (n === 0) return 1;
  temp = Power(x, Math.floor(n/2));
  if (n%2 === 0) {
    return temp*temp;
  } else return x*temp*temp;

};

// Power(7, 2);
// Power(2, 5);
// Power(3, 4);
Power(5, 6);
//Power(1, 3);
