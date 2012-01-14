#import('pretty_stopwatch.dart');
#import('solver_light.dart');
#source('spawn.dart');

main() {
  final fib_solver = new FibSolver();

  var list = [5, 40, 39, 32, 6, 41];

  var timer = new PrettyStopwatch.start()
    , completer = new Completer();

  completer.future.then((args) {
    timer.stop();
  });

  spawn(fib_solver, list, completer);
}
