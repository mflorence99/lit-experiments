import { LitElement } from 'lit';

import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static override styles = css`
    p {
      --xyz: 12;

      color: red;
      font-weight: bold;
      text-decoration: underline dotted;
      text-transform: uppercase;
    }
  `;

  @property() name?: string = 'World';

  override render(): any {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}
