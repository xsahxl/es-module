# https://zhuanlan.zhihu.com/p/337796076 学习小记

# ES module vs CommonJS

- (node:30434) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
- require is not defined in ES module scope, you can use import instead
- require() of ES Module /Users/shihuali/workspace/my/es-module/esm/index.js from /Users/shihuali/workspace/my/es-module/cjs/index.js not supported.
  Instead change the require of /Users/shihuali/workspace/my/es-module/esm/index.js in /Users/shihuali/workspace/my/es-module/cjs/index.js to a dynamic import() which is available in all CommonJS modules.

# 定义包的入口有两种方式，在 package.json 中定义 main 字段或者 exports 字段：

需要注意的是，当 exports 字段被定义后，包的所有子路径都将被封装，子路径的文件不可再被导入。

# 两个模块机制在执行时机上的区别

- ES Modules 导入的模块会被预解析，以便在代码运行前导入;
- 在 CommonJS 中，模块将在运行时解析；
