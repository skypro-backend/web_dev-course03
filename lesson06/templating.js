const template1 = { tag: 'div' }; // <div></div>
const template2 = { tag: 'div', content: { tag: 'div' } }; // <div><div></div></div>
const template3 = undefined;

function templateEngine(block) {

    if ((block === undefined) || (block === null) || (block === false)) {
        return document.createTextNode('');
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