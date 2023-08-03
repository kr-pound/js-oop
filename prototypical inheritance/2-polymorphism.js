function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(items.indexOf(item), 1);
    }
    this.render = function() {
        let html = this.items.map(item => `\t<option>${item}</option>`);
        return `<select>\n${html.join('\n')}\n</select>`;
    }
}

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
];

for (let element of elements) {
    console.log(element.render());
}
