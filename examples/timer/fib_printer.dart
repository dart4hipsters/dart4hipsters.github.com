fib_printer(i) {
  var answer = fib(i)
    , el = new Element.tag('div');

  el.innerHTML = "fib(${i}) = " + answer;
  document.query('#status').nodes.add(el);
}

fib(i) {
  if (i < 2) return i;
  return fib(i-2) + fib(i-1);
}
