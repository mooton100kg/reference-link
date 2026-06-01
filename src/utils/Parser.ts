import {ReferenceModel} from 'models/ReferenceModel';

export class Parser {
  static parse(source: string): ReferenceModel[] {
    const lines = source.split('\n').map((line) => line.trim()).filter(Boolean);

    const items: ReferenceModel[] = [];

    for (const line of lines) {
      const match = line.match(/^(.+?)\s*:\s*(https?:\/\/\S+)$/);

      if (!match) continue;

      const [, title, url] = match;
      if (!url || !title) continue;

      items.push({
        title: title,
        url: url,
      });
    }

    return items;
  }
}