import { Plugin } from 'obsidian';
import { PluginController } from "controllers/PluginController";

// Remember to rename these classes and interfaces!

export default class ReferenceLinkPlugin extends Plugin {
	controller!: PluginController;

	async onload() {
		this.controller = new PluginController(
			this.app,
			this,
		);
		this.controller.onload();
	}

	onunload() {
		this.controller.onunload();
	}
}