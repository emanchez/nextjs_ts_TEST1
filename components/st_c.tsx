export function abc(inp: string): string {
  try {
    console.log(inp);
  } catch (e) {
    return "error";
  }
  return inp;
}
