// @ts-nocheck
import { speak } from "./utils/speak";
const a = { name: "xiaoming", age: 20 };
const b = { ...a };

(async () => {
  // @ts-ignore
  const esm = await import("../esm/index.js");
  console.log(esm);
})();
export default speak;
