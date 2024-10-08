import { createListFromObject, createSkeleton } from './utils.js';
import homeData from '../data/about.json';

export default function () {
    const container = createSkeleton('PlateUp! Bistro');

    // About section
    const aboutDiv = document.createElement('div');
    aboutDiv.textContent = homeData.description;

    // Hours section
    const hoursDiv = document.createElement('div');

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Hours';
    
    const daysList = createListFromObject(homeData.hours);
    
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(daysList);

    // Location section
    const locationDiv = document.createElement('div');

    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Location';

    const locationText = document.createElement('p');
    locationText.textContent = `${homeData.location.address}, ${homeData.location.city}, ${homeData.location.world}`

    locationDiv.appendChild(locationHeading);
    locationDiv.appendChild(locationText);

    // Append all sections
    container.appendChild(aboutDiv);
    container.appendChild(hoursDiv);
    container.appendChild(locationDiv);

    return container
}