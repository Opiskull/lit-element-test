import { customElement, LitElement, html } from "lit-element";

@customElement("my-app")
export class App extends LitElement {

    constructor(){
        super();
    }

    render(){
        return html`
            <div>My TestApp</div>
        `;
    }
}