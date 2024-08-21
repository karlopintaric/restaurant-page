function createSkeleton(title) {
    // Create container element
    const container = document.createElement('div');
    container.classList.add('container');

    // Create title element
    const titleDiv = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = title;

    titleDiv.appendChild(heading);
    container.appendChild(titleDiv);

    return container
}

function createListFromObject(obj) {
    const list = document.createElement('ul');

    for (const item in obj) {
        const listItem = document.createElement('li');

        const listItemName = document.createElement('span');
        listItemName.textContent = item.charAt(0).toUpperCase() + item.slice(1) + ': ';
        
        const listItemText = document.createTextNode(obj[item]);

        listItem.appendChild(listItemName);
        listItem.appendChild(listItemText);

        list.appendChild(listItem);
    }

    return list;
}

export { 
    createSkeleton,
    createListFromObject    
};