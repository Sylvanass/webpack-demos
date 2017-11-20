import _ from 'lodash';
import './index.css';
import './index.less'
import cat from './cat.jpg';

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
  des.classList.add('highlight');
  parent.appendChild(des)

  var img = new Image();
  img.src = cat;
  parent.appendChild(img);

  return parent;
}

document.body.appendChild(component());
