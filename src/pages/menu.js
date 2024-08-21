import { createSkeleton } from './utils.js';
import menuItems from '../data/menu.json';

export default function () {
    const container = createSkeleton('Menu');

    const populateMenu = () => {
        for (const category in menuItems) {
            const categoryDiv = createMenuCategory(category);

            for (const item of menuItems[category]) {
                categoryDiv.appendChild(
                    createMenuItem(item)
                )
            }

            container.appendChild(categoryDiv);
        }
    }

    const createMenuCategory = (category) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category-container');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;

        categoryDiv.appendChild(categoryTitle);

        return categoryDiv;

    }

    const createMenuItem = (item) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-container');

        const itemNameText = document.createElement('h3');
        const itemDescText = document.createElement('p');
        const itemPriceText = document.createElement('p');

        itemNameText.classList.add('item-name');
        itemDescText.classList.add('item-desc');
        itemPriceText.classList.add('item-price');

        itemNameText.textContent = item.item_name;
        itemDescText.textContent = item.description;
        itemPriceText.textContent = `$${item.price}`;

        itemDiv.appendChild(itemNameText);
        itemDiv.appendChild(itemDescText);
        itemDiv.appendChild(itemPriceText);

        return itemDiv;

    }

    populateMenu();

    return container;
}