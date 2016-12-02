/*==========================================
             HTML Grid Manager            
Options
    - themeName (string) :
    - gridWidth (string) :
==========================================*/
(function($) {
    'use strict';
    $.fn.htmlGrid = function(options) {
        //true added to deep merge as we are using objects as options
        var defaults = {
            themeName: "default",
            gridSize: "50",

        };

        var opts = $.extend(true, {}, defaults, options);
        init();
        return this.each(function(index, element) {
            createGrid(element);
        });

        function init() {

        }

        function createGrid(element) {
            var size = opts.gridSize;
            var i,
                height = $(element).outerHeight(),
                width = $(element).outerWidth(),
                ratioW = Math.floor(width / size),
                ratioH = Math.floor(height / size),
                elemoffset = $(element).offset();
            for (i = 0; i <= ratioW; i++) // vertical grid lines
                $('<div />').css({
                    'top': elemoffset.top,
                    'left': (elemoffset.left) + (i * size),
                    'width': 1,
                    'display': 'none',
                    'position': 'absolute',
                    'background-color': '#ccc',
                    'z-index': '-100',
                    'height': height,
                })
                .addClass('gridlines')
                .appendTo($(element));

            for (i = 0; i <= ratioH; i++) // horizontal grid lines
                $('<div />').css({
                    'top': (elemoffset.top) + (i * size),
                    'left': elemoffset.left,
                    'width': width,
                    'display': 'none',
                    'position': 'absolute',
                    'background-color': '#ccc',
                    'z-index': '-100',
                    'height': 1
                })
                .addClass('gridlines')
                .appendTo($(element));

            $('.gridlines').show();
        }
    };
}(jQuery));
