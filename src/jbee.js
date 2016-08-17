class JBee {
  constructor(parent, type, name) {
    this.jb = true;
    this.parent = parent;
    this.type = type;
    this.name = name;

    this.element = this.getElement(this.type, this.name);
  }

  getElement(type, name) {
    if (type == 'id') {
      return this.parent.getElementById(name);
    } else if (type === 'class') {
      return this.parent.getElementsByClassName(name)[0];
    } else if (type === 'tag') {
      return this.parent.getElementsByTagName(name)[0];      
    } else {
      return this.parent;
    }
  }

  text(value) {
    if (value === undefined) {
      return this.element.innerHTML;
    } else {
      this.element.innerHTML = value;
      return this;
    }
  }

  val(value) {
    if (value === undefined) {
      return this.element.value;
    } else {
      this.element.value = value;
      return this;
    }
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show() {
    this.element.style.display = 'block';
    return this;
  }

  on(name, callback) {
    switch(name) {
      case 'mousedown':       this.element.onmousedown     = callback; break;
      case 'mouseup':         this.element.onmouseup       = callback; break;
      case 'mouseover':       this.element.onmouseover     = callback; break;
      case 'mouseout':        this.element.onmouseout      = callback; break;
      case 'mousemove':       this.element.onmousemove     = callback; break;
      case 'click':           this.element.onclick         = callback; break;
      case 'contextmenu':     this.element.oncontextmenu   = callback; break;
      case 'dblclick':        this.element.ondblclick      = callback; break;
      case 'mousedown':       this.element.onmousedown     = callback; break;
      case 'selectstart':     this.element.onselectstart   = callback; break;
      case 'scroll':          this.element.onwheel         = callback; break;
      case 'keyup':           this.element.onkeyup         = callback; break;
      case 'keydown':         this.element.onkeydown       = callback; break;
      case 'keypress':        this.element.onkeypress      = callback; break;
      case 'onload':          this.element.ononload        = callback; break;
      case 'unload':          this.element.onunload        = callback; break;
      case 'beforeunload':    this.element.onbeforeunload  = callback; break;
      case 'change':          this.element.onchange        = callback; break;
    }
    return this;
  }

  css(obj) {
    let objKeys = Object.keys(obj)
    let objKey;
    for (let i = 0; i < objKeys.length; i++) {
      objKey = objKeys[i];

      this.element.style[objKey] = obj[objKey];
    }
    return this;
  }
}