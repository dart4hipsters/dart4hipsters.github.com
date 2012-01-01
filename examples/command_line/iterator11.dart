main() {
  var list = [0,1,2,3,4];

  double_print(i) {
    print("Item: " + i);
    print("      " + i);
  }

  list.forEach( (i) => double_print(i) );
}
