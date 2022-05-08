let renderId = 0;
export function getRenderId() {
    return renderId;
}
export class Component {
    constructor(name) {
        if (!name) {
            throw new TypeError('you should give a name to Component. Did you forget to call super(name)?');
        }
        this._elt = document.createElement(name);
        this._elt.innerHTML = this.getTemplate();
    }
getTemplate() {
        throw new Error('you should override "Component.getTemplate()"');
    }
    /**
     * returns the HTML element that was created for this component out of getTemplate()
     * @returns {HTMLElement}
     */
getElement() {
        return this._elt;
    }
render(outlet) {
        renderId++;
        if (!outlet) {
            throw new TypeError('outlet is null! Did you forget to pass outlet to `super.render(outlet)`?');
        }
        if (outlet.firstChild) {
            outlet.replaceChild(this.getElement(), outlet.firstChild);
        } else {
            outlet.appendChild(this.getElement());
        }
    }
}
