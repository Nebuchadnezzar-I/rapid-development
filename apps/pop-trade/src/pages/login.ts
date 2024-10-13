class CDashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot!.innerHTML = `
            <h1>Dashboard</h1>
        `;
    }
}

customElements.define('c-dashboard', CDashboard);
