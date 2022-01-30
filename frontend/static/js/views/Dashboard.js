import AbstractView from "./AbstractView.js";

export default class Dashboard extends AbstractView {
    constructor() {
        super();
        this.setTitle('Dashboard');
    }

    async getHtml() {
        return `
            <h1>Welcome to dashboard</h1>

            <p> 
                <a href='/posts' gy-route>View recent posts</a>
            </p>
        `;
    }
}