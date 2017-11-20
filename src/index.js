import _ from 'lodash';
import './index.css';
import './index.less'

function component() {
  var parent = document.createElement('div');
  parent.classList.add('hello');

  var title = document.createElement('p');
  title.innerHTML = _.join([
    "Hello", 'webpack!', 'Build with configuration file.'
  ], ' ')
  parent.appendChild(title)

  var des = document.createElement('p');
  des.innerHTML = 'Load less';
  parent.appendChild(des)

  return parent;
}

document.body.appendChild(component());
