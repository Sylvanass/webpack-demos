import _ from 'lodash';

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

console.log(
  _.join(['Math', 'module', 'loaded!'], ' ')
);
