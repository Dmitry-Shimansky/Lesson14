function DomElement (selector, height, width, bg, fontSize, content) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.content = content;
    this.elementCreater(selector);
    
};

DomElement.prototype.elementCreater = function (selector){
    let a;
    if (selector.startsWith('.')) {
        a = document.createElement('div');
        a.className = selector.slice(1);
    } else if (selector.startsWith('#')) {
        a = document.createElement('p');
        a.id = selector.slice(1);
    }else{
        return;
    }
    a.style.cssText = 'height: ' + this.height + 'px' + ';' + ' width: ' + this.width + 'px' + ';' + ' background-color: ' + this.bg + ';' + ' fontSize: ' + this.fontSize + ';';
    a.textContent = this.content;
    document.querySelector('h1').append(a);
};

let object = new DomElement('.chips', 30, 150, 'yellow', 12, 'VELCOME');

console.log(object);
console.log(document.querySelector('h1'));