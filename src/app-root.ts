import { LitElement } from 'lit';
import { TemplateResult } from 'lit';

import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';

@customElement('app-root')
export class AppRoot extends LitElement {
  static override styles = css`
    :host {
      cursor: pointer;
    }

    simple-greeting {
      display: inline;
    }
  `;

  #xxx = 'blah';

  handleClick(e: Event): void {
    console.log(`🔥 ${this.#xxx} ${e}`);
  }

  override render(): TemplateResult {
    return html`
      Well ...
      <simple-greeting
        @click=${this.handleClick}
        .name=${'Moon'}></simple-greeting>
    `;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'app-root': AppRoot;
//   }
// }
