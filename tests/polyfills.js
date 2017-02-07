/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

var rootPath = window.location.href.replace(/\/(\w|-)+\/tests\/.*/g, '');
// Includes CustomEvent polyfill.
document.write('<script src="' + rootPath + '/webcomponents-platform/webcomponents-platform.js"></script>');

// document.baseURI polyfill.
// TODO(valdrin) move it to a separate polyfill.
if (!document.baseURI) {
  Object.defineProperty(document, 'baseURI', {
    get: function() {
      const base = /** @type {HTMLBaseElement} */ (document.querySelector('base'));
      return base ? base.href : window.location.href;
    },
    configurable: true
  });
}
