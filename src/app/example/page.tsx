async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bail() {
  throw new Error("Bail!");
}

export default async function Page() {
  await sleep(5000);
  await bail();

  return <div>Hello, World!</div>;
}
