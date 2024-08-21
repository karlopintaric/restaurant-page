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

export { createSkeleton };