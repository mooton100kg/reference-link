import { ReferenceModel } from "models/ReferenceModel";

export class Parser {
    static parse(
        source: string
    ): ReferenceModel[] {
        const lines = source
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

        const items: ReferenceModel[] = [];

        for (const line of lines) {
            const match = line.match(/^(https?:\/\/\S+)\s*:\s*(.+)$/);

            if (!match) continue;

            const [, url, title] = match;
            if (!url || !title) continue;

            items.push({
                url: url,
                title: title,
            });
        }

        return items;
    }
}