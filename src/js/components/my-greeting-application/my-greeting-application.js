/**
 * The my-greeting-application web component module.
 *
 * @author Victor Carlsson <vc222fw@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<h1>Test</h1>
`
customElements.define('my-greeting-application',
  /**
   * Represents a my-greeting-application element.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)
