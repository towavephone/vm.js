import { ES2017Map } from "../type";

export const es2017: ES2017Map = {
  AwaitExpression(path) {
    // 暂时不支持 await 表达式
    const { next } = path.ctx;
    next(path.evaluate(path.createChild(path.node.argument))); // call next
  }
};
