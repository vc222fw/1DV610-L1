/**
 * The my-greeting-application web component module.
 *
 * @author Victor Carlsson <vc222fw@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
  .container {
      text-align: center;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 300px;
      background-color: rgb(204, 255, 255);
  }

  input, select {
      padding: 8px;
      width: 48%;
      box-sizing: border-box;
  }

  button {
      padding: 10px 20px;
      margin-top: 10px;
      width: 100%;
  }

  #greeting {
      margin-top: 20px;
      font-size: 1.2em;
      color: #333;
  }
</style>

<div class="container">
    <h2>Greeting App</h2>
    <form id="greetingForm">
        <input type="text" id="name" placeholder="Enter your name" required />
        <select id="language">
            <option value="english">English</option>
            <option value="swedish">Swedish</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    <div id="greeting"></div>
</div>
`
customElements.define('my-greeting-application',
  /**
   * Represents a my-greeting-application element.
   */
  class extends HTMLElement {
    /**
     * The form element.
     */
    #form

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.#form = this.shadowRoot.querySelector('form')

      this.#form.addEventListener('submit', (event) => this.#onSubmit(event))
    }

    /**
     * Called when the form get submitted.
     *
     * @param {SubmitEvent} event - The submit event.
     */
    async #onSubmit (event) {
      event.preventDefault()

      const name = this.shadowRoot.querySelector('#name').value
      const language = this.shadowRoot.querySelector('#language').value
      const greetingElement = this.shadowRoot.querySelector('#greeting')
      let greetingText = ''

      switch (language) {
        case 'english':
          greetingText = `Hello ${name}, welcome!`
          break
        case 'swedish':
          greetingText = `Hej ${name}, välkommen!`
          break
        case 'spanish':
          greetingText = `Hola ${name}, bienvenido!`
          break
        case 'german':
          greetingText = `Hallo ${name}, willkommen!`
          break
        default:
          greetingText = `Hello ${name}, welcome!`
      }

      greetingElement.textContent = greetingText
    }
  }
)
