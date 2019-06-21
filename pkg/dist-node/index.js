'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Keysdown extends Map {
  constructor(target) {
    super();
    this.target = target;
    target.addEventListener('keydown', event => {
      this.set(event.key, event);
    });
    target.addEventListener('keyup', event => {
      this.delete(event.key);
    });
  }

}

exports.default = Keysdown;
