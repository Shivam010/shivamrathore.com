import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby([
        'pages/*.tsx',
        'data/**/*.mdx',
        '!data/*.mdx',
        '!pages/_*.tsx',
        '!pages/api',
        '!pages/404.tsx',
    ]);

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map((page) => {
                return page
                    .replace('pages', '')
                    .replace('data', '')
                    .replace('.tsx', '')
                    .replace('.mdx', '')
                    .replace('/index', '');
            })
            .filter((route) => {
                return !route.endsWith('/draft') && !route.endsWith('/0');
            })
            .map((route) => {
                return `
              <url>
                  <loc>${`https://shivamrathore.com${route}`}</loc>
              </url>
            `;
            })
            .join('')}
    </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html',
    });

    writeFileSync('public/sitemap.xml', formatted);
}

generate();
