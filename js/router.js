class Router {
    constructor() {
        this.routes = {
            '/': this.loadPage.bind(this, 'home'),
            '/about': this.loadPage.bind(this, 'about'),
            '/services': this.loadPage.bind(this, 'services'),
            '/showcase': this.loadPage.bind(this, 'showcase'),
            '/faq': this.loadPage.bind(this, 'faq'),
            '/reviews': this.loadPage.bind(this, 'reviews'),
            '/contact': this.loadPage.bind(this, 'contact')
        };

        window.addEventListener('popstate', () => this.handleRoute());
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });
    }

    async handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/'];
        await route();
    }

    async navigateTo(url) {
        window.history.pushState(null, null, url);
        await this.handleRoute();
    }

    async loadPage(pageName) {
        const pageContent = document.getElementById('page-content');
        pageContent.className = 'page-transition page-enter';
        
        try {
            const page = await window[`load${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page`]();
            pageContent.innerHTML = page;
            
            requestAnimationFrame(() => {
                pageContent.classList.remove('page-enter');
            });
        } catch (error) {
            console.error('Error loading page:', error);
        }
    }
}

const router = new Router();