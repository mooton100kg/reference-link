import {PluginController} from 'controllers/PluginController';
import {Plugin} from 'obsidian';
import {ReferenceSettingTab} from 'setting';

// Remember to rename these classes and interfaces!

export default class ReferenceLinkPlugin extends Plugin {
  controller!: PluginController;

  async onload() {
    this.addSettingTab(new ReferenceSettingTab(this.app, this));

    this.controller = new PluginController(
        this.app,
        this,
    );
    this.controller.onload();

    this.addCommand({
      id: 'insert-reference-block',
      name: 'Reference block',
      editorCallback: (editor) => {
        editor.replaceSelection(`\n\`\`\`reference
Title : https://example.com
\`\`\`\n`);
      }
    });
  }

  onunload() {
    this.controller.onunload();
  }
}