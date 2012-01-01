main() {
  var list = [0,1,2,3,4];

  list.forEach( f(i, [original_call=true]) {
    if (original_call)
      print("Item: " + i);
    else
      print("      " + i);

    if (i > 0) f(i-1, false);
  });
}
