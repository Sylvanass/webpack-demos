export default function sayHello(name) {
  name = name || 'World';
  console.log('Hello ' + name);
  cosnole.log('I get called from hello.js!');
}
