/*
 | ------------------------------------------
 | Plugin jQuery flvnAccordeon
 | ------------------------------------------
 | plugin pour créer un accordeon compatible IE8
 | 
*/
(function($) {

    $.flvnAccordeon = function(element, options) {

        var defaults = {
            duration: 500,
            openPos: 0,
            isOpen: true,
            activeClassName: 'flvnAccordeonActive'
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            $(element).children('div').hide();
            if(plugin.settings.isOpen){
                $(element).children('div').eq(plugin.settings.openPos).show();
                $(element).children('p').eq(plugin.settings.openPos).addClass(plugin.settings.activeClassName);
            }

            $(element).children('p').on('click', runAccordeon);
        }

        var runAccordeon = function() {
            
            if ($(this).attr('class') != plugin.settings.activeClassName){
                // La slide à afficher
                var toShow = this;
                // La hauteur de la slide afficher
                var height = getRealHeight(this);
                // La slide à masquer
                var toHide = $(this).parent().children('p.'+plugin.settings.activeClassName);

                // On masque la slide à masquer
                animateSlideUp(toHide);
                // On affiche la slide à afficher
                animateSlideDown(toShow, height);
            }

        }

        var getRealHeight = function(trigger) {
            var h;
            $(trigger).next('div').show(0);
            h = $(trigger).next('div').height();
            $(trigger).next('div').hide(0);
            return h;
        }

        var animateSlideUp = function(trigger) {
           $(trigger).next('div').stop(true,true).slideUp(plugin.settings.duration);
           $(trigger).removeClass(plugin.settings.activeClassName);
        }

        var animateSlideDown = function(trigger, height) {
            $(trigger).next('div').css('overflow', 'hidden');
            $(trigger).next('div').stop(true,true).show();
            $(trigger).next('div').css('height', 0);
            $(trigger).next('div').animate( {height : height}, {duration : plugin.settings.duration} );
            $(trigger).addClass(plugin.settings.activeClassName);
        }

        plugin.init();

    }

    $.fn.flvnAccordeon = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('flvnAccordeon')) {
                var plugin = new $.flvnAccordeon(this, options);
                $(this).data('flvnAccordeon', plugin);
            }
        });

    }

})(jQuery);