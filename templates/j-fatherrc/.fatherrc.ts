// https://github.com/umijs/father/blob/master/docs/config.md
import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: "cjs"
  },
  esm: {
    output: "esm"
  }
});