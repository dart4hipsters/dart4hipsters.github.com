#library('light weight isolates for solving fibs');

class FibSolver extends Isolate {
  FibSolver(): super.light();

  main() {
    var answers = {};

    port.receive((message, replyTo) {
      message.forEach((i) {
        answers[i] = fib(i);
      });

      replyTo.send(answers);
    });
  }
}

fib(i) {
  if (i < 2) return i;
  return fib(i-2) + fib(i-1);
}
