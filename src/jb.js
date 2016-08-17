function jb(prop) {
  if (typeof prop === 'function') {
    return jbWindowOnload(prop);
  } else if (typeof prop === 'string') {
    return jbTCI(prop);
  } else if (typeof prop === 'object'){
    if(prop.jb !== true) {
      return new JBee(prop);
    } else {
      return new JBee(prop.parent, prop.type, prop.name);
    }
  }
}

function jbWindowOnload(prop) {
  return window.onload = prop;
}

function jbTCI(prop) {
  let items = prop.split(' ');
  let item;
  let parent = document;
  let jaybee;

  for (let i = 0; i < items.length; i++) {
    item = items[i];

    if (item.indexOf('.') === 0) {
      jaybee = new JBee(parent, 'class', item.slice(1))
    } else if (item.indexOf('#') === 0) {
      jaybee = new JBee(parent, 'id', item.slice(1))
    } else {
      jaybee = new JBee(parent, 'tag', item)
    }

    if(items.length > 1) {
      parent = jaybee.parent;
    }
  }

  return jaybee;
}
