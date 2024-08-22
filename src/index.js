import './styles.css';
import homePage from './pages/home.js';
import menuPage from './pages/menu.js';
import contactPage from './pages/contact.js';

(function RenderDOM() {
    // Cache buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    const navbar = document.querySelector('nav');
    const pageContent = document.querySelector('#content');

    const pageMap = {
        'home': homePage,
        'menu': menuPage,
        'contact': contactPage
    };

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
        const newPageContent = getRequestedPage(clickTarget.id);

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

    const getRequestedPage = (pageId) => {
        const loadPage =  pageMap[pageId];
        return loadPage ? loadPage() : null;
    }

    initPage();

})();