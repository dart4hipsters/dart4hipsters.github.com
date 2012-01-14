spawn(fib_solver, list, completer) {
  var done1 = false
    , done2 = false;

  fib_solver.spawn().then((port) {
    port.call(list.getRange(0,3)).receive((message, replyTo) {
      message.forEach((i, answer) {
        print("fib(" + i + ") = " + answer);
      });
      done1 = true;
      if (done2) completer.complete(true);
    });
  });


  fib_solver.spawn().then((port) {
    port.call(list.getRange(3,3)).receive((message, replyTo) {
      message.forEach((i, answer) {
        print("fib(" + i + ") = " + answer);
      });
      done2 = true;
      if (done1) completer.complete(true);
    });
  });
}
