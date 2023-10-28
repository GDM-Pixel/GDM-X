// accordion.js
export function renderAccordion(items) {
    return items.map(({ question, answer }, index) => (
        /*html*/`
        <li class="accordion-item" aria-expanded="false" key=${index}>
            <button type="button" class="accordion-button">
                ${question}
            </button>
            <div class="accordion-content" hidden>
                ${answer}
            </div>
        </li>
        `
    )).join('');
}