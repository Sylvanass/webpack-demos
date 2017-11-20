import _ from 'lodash';

function component() {
  var el = document.createElement('div');
  el.innerHTML = _.join([
    "Hello", 'webpack!', 'Build with configuration file.'
  ], ' ')

  return el;
}

document.body.appendChild(component());
