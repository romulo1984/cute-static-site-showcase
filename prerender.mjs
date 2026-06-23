import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Pre-renderiza a home (e quaisquer outras rotas listadas) em HTML estático
// usando o bundle SSR gerado por `vite build`. O resultado vai para
// `dist/client/`, que é o que o GitHub Pages publica.
const routes = ["/"];

const entry = fileURLToPath(new URL("./dist/server/server.js", import.meta.url));
const mod = await import(entry);
const handler = mod.default ?? mod;
const fetchFn = handler.fetch ?? handler;

for (const route of routes) {
  const res = await fetchFn(new Request("http://localhost" + route), {}, {});
  const html = await res.text();
  const file =
    route === "/" ? "dist/client/index.html" : `dist/client${route}.html`;
  await writeFile(file, html);
  console.log(`✔ ${file} (${html.length} bytes)`);
}

// .nojekyll evita que o GitHub Pages ignore arquivos iniciados com _
await writeFile("dist/client/.nojekyll", "");