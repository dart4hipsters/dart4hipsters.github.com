main () {
  final receiver = new ReceivePort()
      , sender = receiver.toSendPort();

  receiver.receive((message, replyTo) {
    if (message == "bye") receiver.close();

    print("I got a message: '" + message + "'.");
  });

  sender.send("The Sender says howdy!");
  sender.send("Yo.");
  sender.send("bye");
}
