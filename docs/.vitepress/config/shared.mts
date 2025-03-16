import { defineConfig, DefaultTheme } from "vitepress";
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url';
import { dirname, basename, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const shared = defineConfig({
  title: "date-manip",
  rewrites: {
    'en/:rest*': ':rest*'
  },
  base: process.env.BASE_URL || '/',
});

export function generateAPISidebar(apiDir: string, linkPath: string): DefaultTheme.SidebarItem[] {
  const exclude = ['internal', 'index', 'modules'];
  return readdirSync(join(__dirname, apiDir))
    .reduce((items, file) => {
      const fnName = basename(file, '.md');
      if(!exclude.includes(fnName)) {
        items.push({
          text: fnName,
          link: `${linkPath}${file}`
        });
      }
      return items;
    }, [] as DefaultTheme.SidebarItem[]);
}