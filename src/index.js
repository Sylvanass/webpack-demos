import {
  cube
} from './math.js';
import './index.less';
import Cat from './assets/cat.jpg';
import GitHub from './assets/github.png';
import Data from './data/data.xml';
import sayHello from './hello.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var parent = document.createElement('div');
  parent.classList.add('hello');

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

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = sayHello;
  parent.appendChild(btn);

  // tree shaking
  var pre = document.createElement('pre');
  pre.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  parent.appendChild(pre);

  return parent;
}

function render() {
  document.body.appendChild(component());
}

render();

if (module.hot) {
  module.hot.accept('./hello.js', function() {
    console.log('Accepting the updated sayHello module!');
    document.body.innerHTML = '';
    render();
  })
}
