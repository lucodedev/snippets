import { promises as fs } from 'fs';
import * as path from 'path';
import { Glob } from 'bun';

const ROOT = path.join(import.meta.dir, '..');

interface Snippet {
    prefix: string | string[];
    body: string[];
    description: string;
}

/**
 * Parse a single markdown file into a snippet JSON object.
 */
async function processFile(filePath: string) {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split(/\r?\n/);
    const snippets: Record<string, Snippet> = {};

    let current: Snippet | null = null;
    let inCodeBlock = false;

    for (const line of lines) {
        // Heading: ## `prefix`: Name
        const headingMatch = line.match(/^##\s+`(.+?)`:\s*(.+)$/);
        if (headingMatch) {
            const [, prefix, name] = headingMatch;
            // if prefix have commas, split into array
            const prefixParts = prefix.split(',').map((p) => p.trim());

            current = {
                prefix: prefixParts.length > 1 ? prefixParts : prefixParts[0],
                body: [],
                description: name,
            };
            snippets[name] = current;
            inCodeBlock = false;
            continue;
        }

        // Description line: > text
        if (current && !inCodeBlock) {
            const descMatch = line.match(/^>\s*(.+)$/);
            if (descMatch) {
                current.description = descMatch[1].trim();
                continue;
            }
        }

        // Code fence start/end
        if (current && line.startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            if (!inCodeBlock) {
                // Done with this snippet
                current = null;
            }
            continue;
        }

        // Inside code block collect body
        if (current && inCodeBlock) {
            current.body.push(line);
        }
    }

    // Write output JSON
    const fileName = path.basename(filePath, path.extname(filePath));
    const outName = `snippets-${fileName}.json`;
    const outPath = path.join(import.meta.dir, '../snippets', outName);
    await fs.writeFile(outPath, JSON.stringify(snippets, null, 2), 'utf-8');
    
    console.log(`   - Generated: ${path.relative(ROOT, outPath)}`);
}

async function run() {
    const globber = new Glob(path.join(import.meta.dir, '/snippets/*.md'));

    for await (const filePath of globber.scan()) {
        const relativeFilePath = path.relative(ROOT, filePath);
        
        console.log(`📄 Processing snippets from: ${relativeFilePath}`);
        await processFile(filePath);
    }
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
