main() {
  var year = 2012
    , march1 = new Date(year, 3, 1, 0, 0, 0, 0)
    , doom = march1.subtract(new Duration(1)).weekday
    , dow = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    , doom_dow = dow[doom];

  print("Doom in $year is on a $doom_dow.");
}
