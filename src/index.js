import _ from 'lodash';

function component() {
  var el = document.createElement('div');
  el.innerHTML = _.join([
    "Hello", 'webpack'
  ], ' ')

  return el;
}

document.body.appendChild(component());
