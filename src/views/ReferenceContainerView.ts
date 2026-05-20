import { ReferenceModel } from "models/ReferenceModel";
import { ReferenceCardView } from "./ReferenceCardView";

export class ReferenceContainerView {
    container: HTMLDivElement;

    constructor(el: HTMLElement) {
        this.container = el.createDiv({ cls: "reference-container" });
    }

    createCard(reference: ReferenceModel) {
        return new ReferenceCardView(
            this.container,
            reference
        );
    }
}