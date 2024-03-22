export const getRandom = (start: number, end: number) => {
  return Math.ceil(Math.random() * (end - start) + start)
}
