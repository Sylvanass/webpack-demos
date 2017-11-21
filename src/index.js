import _ from 'lodash';
import './index.less';
import Cat from './assets/cat.jpg';
import GitHub from './assets/github.png';
import Data from './data/data.xml';

function component() {
  var parent = document.createElement('div');
  parent.classList.add('hello');

  // basic
  var title = document.createElement('p');
  title.innerHTML = _.join([
    "Hello", 'webpack!', 'Build with configuration file.'
  ], ' ')
  parent.appendChild(title)

  // less
  var des = document.createElement('p');
  des.innerHTML = 'Load less';
  des.classList.add('highlight');
  parent.appendChild(des);

  // font
  var location = document.createElement('p');
  location.innerHTML = 'Shanghai, China';
  location.classList.add('icon-location2');
  parent.appendChild(location);

  // data
  var github = new Image();
  github.src = GitHub;
  parent.appendChild(github);
  var data = document.createElement('span');
  data.innerHTML = JSON.stringify(Data);
  parent.appendChild(data);

  // image
  var div = document.createElement('div');
  var cat = new Image();
  cat.src = Cat;
  div.appendChild(cat);
  parent.appendChild(div);

  return parent;
}

document.body.appendChild(component());
