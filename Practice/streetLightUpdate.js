function updateLight(current) {
  return current == "red"
    ? "green"
    : current == "green"
    ? "yellow"
    : current == "yellow"
    ? "red"
    : null;
}
