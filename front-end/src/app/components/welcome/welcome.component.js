import { Component } from "../../utils/component";
import template from  "./welcome.component.html"
export class WelcomeComponent extends Component {
    constructor(){
        super("welcome");
    }
    getTemplate() {
        return template;
      }
    init() {
        const form = document.querySelector('form.form-signin');

        form.addEventListener('submit', (event) => {   

            event.preventDefault();
            if (form.checkValidity() === false) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                const name = event.srcElement.querySelector('#nickname').value;
                const size = parseInt(event.srcElement.querySelector('#size').value);
                _startGame(name, size);
            }
        }, false);
        return this;
    }  
}
    function _startGame(name, size) { window.location.hash = `game?name=${name}=name&size=${size}`;}


