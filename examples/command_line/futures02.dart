main() {
  var completer = new Completer<String>();

  var future = completer.future;
  future.then((message) {
    print("Future completed with message: " + message);
  });
  future.handleException((e) {
    print("Handled: " + e);
    return true;
  });


  var exception = new Exception("Too awesome");
  completer.completeException(exception);
}
