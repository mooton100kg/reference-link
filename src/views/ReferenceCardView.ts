import {ReferenceModel} from 'models/ReferenceModel';

export class ReferenceCardView {
  card: HTMLDivElement;

  constructor(container: HTMLElement, reference: ReferenceModel) {
    this.card = container.createDiv({cls: 'reference-card'});

    this.card.onclick = () => {
      window.open(reference.url, '_blank');
    };

    this.card.createDiv({
      text: reference.title,
      cls: 'reference-title',
    });

    this.card.createDiv({
      text: reference.url,
      cls: 'reference-url',
    });
  }

  update(metadata: any) {
    if (metadata.image) {
      const img = this.card.createEl('img');
      img.src = metadata.image;
      img.className = 'reference-image';
    }
  }
}