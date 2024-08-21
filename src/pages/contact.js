import { createSkeleton, createListFromObject } from './utils.js';

export default function () {
    const container = createSkeleton('Contact');
    const contactDiv = document.createElement('div');
    
    const contactTextObj = {
        phone: '(123) 456-7890',
        email: 'info@plateupbistro.vg',
        social: 'Media: @PlateUpBistro on all platforms'
    }

    const contactList = createListFromObject(contactTextObj);
    
    const contactCallToAction = document.createElement('p');
    contactCallToAction.textContent = 'Drop by or get in touch—we\'re always ready to serve you!';

    contactDiv.appendChild(contactList);
    contactDiv.appendChild(contactCallToAction);

    container.appendChild(contactDiv);

    return container;
}