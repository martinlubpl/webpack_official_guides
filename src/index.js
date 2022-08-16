import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import myName from './myName';

import Icon from './bear-face.png';
/* 
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);
console.log(yaml.title);
console.log(yaml.owner.name);
console.log(json.title);
console.log(json.owner.name); */


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hellwsswso', 'webpack'], ' ');

  element.textContent = myName('Cody');

  btn.innerHTML = 'Log smthg to console';
  btn.onclick = printMe;

  element.appendChild(btn);

  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // console.log(Data);
  // console.log(Notes);

  return element;
}

document.body.appendChild(component());
