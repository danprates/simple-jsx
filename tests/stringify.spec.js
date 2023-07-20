const { strictEqual } = require("node:assert");
const { stringify } = require("../lib/stringify");

module.exports = () => {
  // should stringify a string child
  {
    const child = "Hello, world!";
    strictEqual(stringify(child), "Hello, world!");
  }

  // should stringify an array of string children
  {
    const children = ["Hello, ", "world!"];
    strictEqual(stringify(children), "Hello, world!");
  }

  // should stringify a number child
  {
    const child = 42;
    strictEqual(stringify(child), "42");
  }

  // should stringify a function child
  {
    const child = () => console.log("Hello, world!");
    strictEqual(stringify(child), '() => console.log("Hello, world!")');
  }

  // should stringify a empty child
  {
    const child = "";
    strictEqual(stringify(child), "");
  }

  // should stringify a boolean child
  {
    strictEqual(stringify(false), "false");
    strictEqual(stringify(true), "true");
  }

  // should stringify a nullish child
  {
    strictEqual(stringify(null), "");
    strictEqual(stringify(undefined), "");
  }

  // should stringify an object child
  {
    strictEqual(stringify({ foo: "bar" }), '{"foo":"bar"}');
    strictEqual(stringify({ foo: { bar: "baz" } }), '{"foo":{"bar":"baz"}}');
    strictEqual(
      stringify({ foo: [{ bar: "baz" }] }),
      '{"foo":[{"bar":"baz"}]}'
    );
  }
};
