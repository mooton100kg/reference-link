import {App, PluginSettingTab, Setting} from 'obsidian';

import ReferenceLinkPlugin from './main';

export class ReferenceSettingTab extends PluginSettingTab {
  plugin: ReferenceLinkPlugin;

  constructor(app: App, plugin: ReferenceLinkPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const {containerEl} = this;

    containerEl.empty();

    // Introduction
    containerEl.createEl('h2', {text: 'Reference Link'});
    containerEl.createEl(
        'p', {text: 'Create beautiful reference cards from URLs.'});

    // Usage instructions
    containerEl.createEl('h3', {text: 'How to use'});

    const pre = containerEl.createEl('pre', {cls: 'reference-example-code'});

    const code = pre.createEl('code');

    code.setText(`​\`\`\`reference
OpenAI : https://openai.com
Google : https://google.com
\`\`\``);

    // Quick insert instructions
    containerEl.createEl('h3', {text: 'Commands'});

    const commandList = containerEl.createEl('ul');

    commandList.createEl('li', {
      text:
          '/Reference - Insert a reference block template at the cursor position.'
    });

    // Card preview
    containerEl.createEl('h3', {text: 'Card preview'});
    const preview = containerEl.createDiv({cls: 'reference-container'});

    const examples = [
      {title: 'OpenAI', url: 'https://openai.com'},
      {title: 'Google', url: 'https://google.com'}
    ];

    examples.forEach((item) => {
      const card = preview.createDiv({cls: 'reference-card'});

      card.createEl('div', {cls: 'reference-title', text: item.title});
      card.createEl('div', {cls: 'reference-url', text: item.url});
      const img = card.createEl('img', {cls: 'reference-image'});

      img.src = 'https://placehold.co/600x300';
    });
  }
}