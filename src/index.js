import _ from 'lodash';
import './index.css';

function component() {
  var el = document.createElement('div');
  el.innerHTML = _.join([
    "Hello", 'webpack!', 'Build with configuration file.'
  ], ' ')
  el.classList.add('hello');

  return el;
}

document.body.appendChild(component());
