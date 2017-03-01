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
            paragraph,
            p;

        // paragraphs = window.document.getElementsByTagName('p');
        // for (var i = 0; i < paragraphs.length; i++) {
        //     paragraph = paragraphs.item(i);
        //     paragraph.style.setProperty('color', 'white', null);
        // }
        // d3.selectAll('p').style('color', 'white');

        // d3.select('body').style('background-color', 'black');

        // d3.selectAll('p').style('color', function () {
        //     return 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
        // });

        // d3.selectAll('p').style('color', function (d, i) {
        //     console.log(d);
        //     console.log(i);
        //     return i % 2 ? '#fff' : '#eee';
        // });

        // d3.selectAll('p')
        //     .data([4, 8, 15, 16, 23, 42])
        //     .style('font-size', function (d) {
        //         console.log(d);
        //         return d + 'px';
        //     });

        d3.select('body')
            .selectAll('p')
            .data([4, 8, 15, 16, 23, 42])
            .enter().append('p')
            .text(function (d) {
                return "I'm number " + d + '!';
            });
    };

    fn.init();
}(this));
