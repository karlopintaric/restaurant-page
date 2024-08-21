import './styles.css';
import homePage from './pages/home.js';
import menuPage from './pages/menu.js';
import aboutPage from './pages/about.js';

(function RenderDOM() {
    // Cache buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    const navbar = document.querySelector('nav');
    const pageContent = document.querySelector('#content');

    const initPage = () => {
        navbar.addEventListener('click', handlePageNav);
        document.querySelector('#home').click();
    }

    const handlePageNav = (e) => {
        const clickTarget = e.target;

        // Do nothing if a tab button is not clicked
        if (!clickTarget.classList.contains('tab-button')) return;

        // Do nothing if button already active
        if (clickTarget.classList.contains('active')) return;

        // Make clicked button active
        inactivateAllButtons();
        clickTarget.classList.add('active');

        // Load new content
        clearContent();
        const newPageContent = getRequestedPage(clickTarget);

        // If page doesn't exist return
        if (!newPageContent) return;

        pageContent.appendChild(newPageContent);
    }

    const inactivateAllButtons = () => {
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove('active');
        }
    }

    const clearContent = () => {
        pageContent.textContent = '';
    }

    const getRequestedPage = (target) => {
        switch (target.id) {
            case 'home':
                return homePage();
            case 'menu':
                return menuPage();
            case 'about':
                return aboutPage();
            default:
                return;
        }
    }

    initPage();

})();