# JBee
JBee - frameform Client-side scripting of HTML

## GetStarted
##### Create JBee object
`
var name = jb('#name');
`

##### Hide element
`
name.hide();
`

##### Show element
`
name.show();
`

##### Append css style
`
name.css({
  'color': 'red',
  'background': 'green'
});
`

##### Set and Get element text
`
name.text('Hello Roman!');

console.log(name.text());
// Hello Roman!
`

##### Set and Get input element value
`
var setName = jb('#setName')
setName.value('Nikolay')

console.log(name.value());
// Nikolay
`

##### Window onload
`
jb(function() {
  // code here
});
`

##### Events
`
name.on('click', function() {
  alert('Hello!');
});
`