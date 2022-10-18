const template1 = { tag: 'div' }; // <div></div>

function templateEngine(block) {

    const element = document.createElement(block.tag);
    return element;
}

const containter = document.querySelector('.container');
containter.appendChild(templateEngine(template1));