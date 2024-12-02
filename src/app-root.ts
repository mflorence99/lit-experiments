import { LitElement } from 'lit';

import { customElement } from 'lit/decorators.js';
import { html } from 'lit';

@customElement('app-root')
export class AppRoot extends LitElement {
  xxx = 'blah';

  handleClick(e: Event): void {
    console.log(`🔥 ${this.xxx}`);
  }

  override render(): any {
    return html`
      <simple-greeting
        @click=${this.handleClick}
        .name=${'Moon'}></simple-greeting>
    `;
  }
}
