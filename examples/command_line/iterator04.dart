main() {
  var list = [0,1,2,3,4];

  list.forEach( f(i) {
    print("Item: " + i);
    if (i > 0) f(i-1);
  });
}
