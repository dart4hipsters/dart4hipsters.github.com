class DoomsDay extends Isolate {
  int _year;

  main() {
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

class DoomsDayFinder extends Isolate {
  main() {
    port.receive((century, replyTo) {
      this.find('Wed', century).then((wednesdays) {
        replyTo.send(wednesdays);
      });
    });
  }

  find(day, century) {
    final completer = new Completer<List>()
        , doom = new DoomsDay()
        , matching_years = [];

    var replies = 0;

    for (var i=0; i <100; i++) {
      var year = century + i;
      doom.spawn().then((port) {
        port.call({'year':year}).receive((message, replyTo) {
          replies = replies + 1;

          if (message == 'Wed') matching_years.add(year);

          if (replies >= 100) {
            completer.complete(matching_years);
          }

        });
      });
    }

    return completer.future;
  }
}

main() {
  final doom_finder = new DoomsDayFinder();

  doom_finder.spawn().then((port) {
    port.call(2000).receive((message, replyTo) {
      for (var year in message) print(year);
    });
  });
}
