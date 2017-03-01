(function (window, undefined) {
    'use strict';

    var fn = {},
        _fn = {},
        document,
        console;

    document = window.document;
    console = window.console;

    fn.init = function () {
        _fn.init();
    };

    _fn.init = function () {
        var paragraphs,
            paragraph;

        paragraphs = window.document.getElementsByTagName('p');
        // for (var i = 0; i < paragraphs.length; i++) {
        //     paragraph = paragraphs.item(i);
        //     paragraph.style.setProperty('color', 'white', null);
        // }
        // d3.selectAll('p').style('color', 'white');

        // d3.select('body').style('background-color', 'black');

        d3.selectAll('p').style('color', function () {
            return 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
        });
    };

    fn.init();
}(this));
