class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}
let test = new TestClass();



import angular from 'angular';
import template from './index.tpl.html';
let component = {
    template // Use ES6 enhanced object literals.
}

let app = angular.module('app', [])
    .component('app', component)

    
import '../style/app.scss';


console.log('API Key from Define Plugin:', API_KEY);