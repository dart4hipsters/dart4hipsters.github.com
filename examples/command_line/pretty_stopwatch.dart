#library('A very pretty stop watch class');

class PrettyStopwatch {
  Stopwatch timer;

  PrettyStopwatch() {
    timer = new Stopwatch();
  }

  PrettyStopwatch.start() {
    timer = new Stopwatch.start();
  }

  start() {
    timer.start();
  }

  stop() {
    timer.stop();
    print("Elapsed time: " + timer.elapsedInMs() + "ms");
  }
}
