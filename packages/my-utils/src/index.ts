export function plusOne(num: number): number {
  return num + 1;
}

export async function fetchAs<T>(input: string | URL | Request, init?: RequestInit): Promise<T> {
  const readableStream  = await fetch(input, init);
  return readableStream.json();
}