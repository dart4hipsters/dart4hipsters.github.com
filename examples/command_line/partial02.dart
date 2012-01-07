main() {
  add(x, y, z) {
    return x + y + z;
  }

  makeAdder1(fn, arg1) {
    return (y, z) {
      return fn(arg1, y, z);
    };
  }

  var add10 = makeAdder1(add, 10);

  print("add: " + add(1, 2, 3));

  print("add10: " + add10(2, 3));
}
