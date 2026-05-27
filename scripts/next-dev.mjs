import { spawn } from "node:child_process";

const child = spawn("next", ["dev", ...process.argv.slice(2)], {
  env: {
    ...process.env,
    NODE_ENV: "development"
  },
  shell: true,
  stdio: "inherit"
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
