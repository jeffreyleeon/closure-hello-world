goog.require('goog.dom');

function sayHi() {
    var newHeader = goog.dom.createDom('h1', {
        'style': 'background-color:#EEE'
    }, 'Hello world111!');
    goog.dom.appendChild(goog.dom.$('header'), newHeader);
}

function sayBye() {
    var newFooter = goog.dom.createDom('h3', {'style': 'background-color:#EEE'}, 'bye world!');
    goog.dom.appendChild(goog.dom.$('footer'), newFooter);
}