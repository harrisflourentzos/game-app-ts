export function generateRandomBetween(min: number, max: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum;
}
