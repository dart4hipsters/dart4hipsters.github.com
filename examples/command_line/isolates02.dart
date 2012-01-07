class DoomsDay extends Isolate {
  int _year;

  main () {
    port.receive((message, replyTo) {
      _year = message['year'];
      replyTo.send(this.day());
    });
  }

  day() {
    var march1 = new Date(_year, 3, 1, 0, 0, 0, 0)
      , doom = march1.subtract(new Duration(1)).weekday
      , dow = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

    return dow[doom];
  }
}

main() {
  final doom = new DoomsDay();

  print('Certain doom awaits...');

  doom.spawn().then((port) {
    var year = 2011;
    port.call({'year':year}).receive((message, replyTo) {
      print("Doom in $year is on a $message.");
    });
  });

  doom.spawn().then((port) {
    var year = 2012;
    port.call({'year':year}).receive((message, replyTo) {
      print("Doom in $year is on a $message.");
    });
  });

  doom.spawn().then((port) {
    var year = 2015;
    port.call({'year':year}).receive((message, replyTo) {
      print("Doom in $year is on a $message.");
    });
  });

  doom.spawn().then((port) {
    var year = 2020;
    port.call({'year':year}).receive((message, replyTo) {
      print("Doom in $year is on a $message.");
    });
  });
}
