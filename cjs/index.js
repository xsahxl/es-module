// const a = require("../esm/index");
// console.log(a);

(async () => {
  const a = await import("../esm/index.js");
  console.log(a);
  a.default();
})();
