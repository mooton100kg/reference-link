import {App, Plugin} from 'obsidian';
import {Parser} from 'utils/Parser';
import {ReferenceContainerView} from 'views/ReferenceContainerView';

import {MetadataService} from '../services/MetadataService';

export class PluginController {
  app: App;
  plugin: Plugin;
  metadataService: MetadataService;

  constructor(app: App, plugin: Plugin) {
    this.app = app;
    this.plugin = plugin;
    this.metadataService = new MetadataService();
  }

  onload() {
    this.plugin.registerMarkdownCodeBlockProcessor(
        'reference', async (source, el) => {
          const references = Parser.parse(source);

          if (references.length === 0) {
            el.createEl('p', {
              text: 'No reference found',
            });

            return;
          }

          const container = new ReferenceContainerView(el);

          for (const reference of references) {
            const card = container.createCard(reference);

            const metadata = await this.metadataService.fetch(reference.url);

            card.update(metadata);
          }
        });
  }

  onunload() {
    document.getElementById('reference-link-styles')?.remove();
  }
}