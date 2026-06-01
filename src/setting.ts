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
    new Setting(containerEl)
        .setName('Reference Link')
        .setHeading()
        .setDesc('A plugin to create reference cards from URLs.');

    // Usage instructions
    new Setting(containerEl).setName('Usage').setHeading();

    const pre = containerEl.createEl('pre', {cls: 'reference-example-code'});

    const code = pre.createEl('code');

    code.setText(`​\`\`\`reference
OpenAI : https://openai.com
Google : https://google.com
\`\`\``);

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

    // Quick insert instructions
    new Setting(containerEl).setName('Commands').setHeading();

    const commandList = containerEl.createEl('ul');

    commandList.createEl('li', {
      text:
          '/Reference - Insert a reference block template at the cursor position.'
    });
  }
}