function oldEnough(age: number): Never | boolean {
  if (age > 59) {
    throw Error("Tool old");
  }
  if (age <= 18) {
    return false;
  }
  return true;
}
