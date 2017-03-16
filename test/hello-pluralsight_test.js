var jsdom = require('jsdom'),
    fs = require('fs'),
    assert = require('chai').assert,
    file = fs.readFileSync('index.html').toString();

describe('Your HTML Page', function() {
  var window;
  before(function(next) {
    jsdom.env(
      file,
      ["http://code.jquery.com/jquery.js"],
      function (err, w) {
        if(err) { next(err); }
        window = w;
        next();
      }
    );
  });

  it('should have a title that\'s a child of the head element @title', function() {
    assert.equal(window.$('head > title').length, 1, 'Make sure to create a `title` element.');
  });

  it('should have a title that contains your name @title', function() {
    assert.notEqual(window.$('head > title').text(), '', 'Make sure to set the content of the `title` element to your name.');
  });

  it('should have an h1 element that\'s a child of the body element @h1', function() {
    assert.isAtLeast(window.$('body > h1').length, 1, "Make sure to create an `h1` element that's a child of the `body` element.");
  });

  it('should have content in the h1 element @h1', function() {
    assert.equal(window.$('body > h1').text(), 'Hello, Pluralsight!', "Make sure to set the content of your `h1` element to 'Hello, Pluralsight!'.");
  });

  it('should have a ul that\'s a child of the body element @ul', function() {
    assert.isAtLeast(window.$('body > ul').length, 1, "Make sure to create a `ul` element that's a child of the `body` element.");
  });

  it('should have at least 2 li elements that are children of the ul element @li', function() {
    assert.isAtLeast(window.$('body > ul > li').length, 2, "Make sure to create at least 2 `li` elements that are children of the `ul` element.");
  });

  it('should have content for each of the `li` elements. @li', function() {
    var message = "Make sure that each `li` element contains some text describing one thing you want to learn."
    assert.notEqual(window.$('body > ul > li:first').text(), '', message);
    assert.notEqual(window.$('body > ul > li:last').text(), '', message);
  });
});
