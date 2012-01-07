main() {
  var completer = new Completer<String>();

  var future = completer.future;
  future.then((message) {
    print("Future completed with message: " + message);
  });

  completer.complete("foo");
}
