import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import builtins from "";

export default {
  input: `src/index.js`,
  output: {
    file: `dist/bundle.js`,
    format: "umd",
  },
  plugins: [resolve({preferBuiltins: true}), commonjs(), json()]
};
