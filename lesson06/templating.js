const template1 = { tag: 'div' }; // <div></div>
const template2 = { tag: 'div', content: { tag: 'div' } }; // <div><div></div></div>
const template3 = undefined;
const template4 = { tag: 'div', content: 'Привет, шаблон!' }; // <div></div>

function templateEngine(block) {

    if ((block === undefined) || (block === null) || (block === false)) {
        return document.createTextNode('');
    }

    if ((typeof block === 'string') || (typeof block === 'number') || (block === true)) {
        return document.createTextNode(block);
    }

    const element = document.createElement(block.tag);
    const content = templateEngine(block.content);
    element.appendChild(content);
    return element;
}

const containter = document.querySelector('.container');
containter.appendChild(templateEngine(template1));
containter.appendChild(templateEngine(template2));
containter.appendChild(templateEngine(template3));
containter.appendChild(templateEngine(template4));