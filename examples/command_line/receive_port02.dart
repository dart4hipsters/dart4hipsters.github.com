main () {
  final receiver = new ReceivePort()
      , sender = receiver.toSendPort();

  receiver.receive((message, replyTo) {
    if (replyTo != null) {
      print("replying...");
      replyTo.send("Howdy back at ya!");
    }

    print("I got a message: '" + message + "'.");
  });

  sender.call("The Sender says howdy!").receive((message, replyTo) {
    print("Reply: " + message);
  });
  sender.send("Yo.");
  sender.send("bye");
}
