main() {
  add(x, y, z) {
    return x + y + z;
  }

  add1(x, y) {
    return add(1, x, y);
  }

  print("add: " + add(1, 2, 3));

  print("add1: " + add1(2, 3));
}
