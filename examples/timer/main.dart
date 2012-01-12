#import('dart:html');
#import('pretty_stopwatch.dart');
#source('fib_printer.dart');
void main() {
  var list = [5, 40, 39, 32, 6, 41];

  var timer = new PrettyStopwatch.start();
  list.forEach(fib_printer);
  timer.stop();
}
