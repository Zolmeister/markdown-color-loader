/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author peerigon UG @peerigon
 */

var marked = require('marked');
var hljs = require('highlight.js');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    }
});

module.exports = function(markdown) {
    this.cacheable();
    return marked(markdown);
};
