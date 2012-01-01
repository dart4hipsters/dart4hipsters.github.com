main() {
  pretty_int(i, [label="Number: "]) {
    print(label + i);
  }

  pretty_int(1);
  pretty_int(42, "Answer to everything: ");
}
