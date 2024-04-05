import { Window } from 'happy-dom-without-node';

const window = new Window({ url: 'https://ncode.syosetu.com/n4234iq/' });
const document = window.document;

const container = document.querySelector('#novel_ex').textContent;

console.log(container);