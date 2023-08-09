import fs from "fs/promises";
import { resolve } from "path";
import { afterAll, beforeAll, describe, it } from "vitest";

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf("/"));

describe("", () => {
  const randomName = Math.random();
  const rootDir = resolve(__dirname, "tmp", `${randomName}`);

  beforeAll(async () => {
    await fs.mkdir(rootDir, {
      recursive: true,
    });
    for (let i = 0; i < 100000; i++) {
      await fs.writeFile(
        resolve(__dirname, "tmp", `${randomName}`, `file-${i}`),
        "1"
      );
    }
  });

  afterAll(async () => {
    await fs.rm(rootDir, { recursive: true });
  });

  it("2", async () => {
    console.log(1);
  });
});
