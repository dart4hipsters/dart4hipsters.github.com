main() {
  var list = [0,1,2,3,4];

  f(i) {
    print("Item: " + i);
    f(i, true);
  };

  f(i, indent) {
    print("  Was: " + i);
  };

  list.forEach(f);
}
