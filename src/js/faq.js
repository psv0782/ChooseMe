import Accordion from "accordion-js";
// import "accordion-js/dist/accordion.min.css";

new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
    openOnInit: [0],
    beforeOpen: toggleIcon,
    beforeClose: toggleIcon,
});

function toggleIcon(currentElement) {
    const arrowIcon = currentElement.querySelector('.arrow-icon');

    arrowIcon.classList.toggle('transform');
}