goog.require('goog.dom');

function sayHi() {
    var newHeader = goog.dom.createDom('h1', {
        'style': 'background-color:#EEE'
    }, 'Hello world111!');
    goog.dom.appendChild(document.body, newHeader);
}