/*
 * page_visibility - v1.0.0
 * js plugin to detect whether the browser page is visible
 * and to be able to react on each change in visibility
 *
 * https://github.com/peterfriz/yii2-page-visibility
 *
 * based on https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
 * and http://www.html5rocks.com/en/tutorials/pagevisibility/intro
 *
 * Author: Piet de Vries  <peterfriz@pietdevries.nl>
 *
 */

var pageVisibility = (function() {

    var hiddenProp = undefined;
    var hiddenProps = [
        {prop: 'hidden', event: 'visibilitychange'},
        {prop: 'mozHiddenhidden', event: 'mozvisibilitychange'},
        {prop: 'msHidden', event: 'msvisibilitychange'},
        {prop: 'webkitHidden', event: 'webkitvisibilitychange'},
        {prop: 'oHidden', event: 'ovisibilitychange'}
    ];

    function getHiddenProp()
    {
        if (hiddenProp === undefined) {
            hiddenProp = null;
            var len = hiddenProps.length;
            for (i = 0; i < len; i++) {
                if (hiddenProps[i].prop in document) {
                    hiddenProp = hiddenProps[i];
                    break;
                }
            }
        }
        return hiddenProp;
    }

    function pageIsHidden()
    {
        var prop = getHiddenProp();
        if (!prop) return false;
        return document[prop.prop];
    }

    var visibleFunction = undefined;
    var hiddenFunction = undefined;

    function pageVisibilityHandler()
    {
        if (pageIsHidden()) {
            if (hiddenFunction) hiddenFunction();
        } else {
            if (visibleFunction) visibleFunction();
        }
    }

    if (prop = getHiddenProp()) {
        document.addEventListener(prop.event, pageVisibilityHandler);
    }

    return {
        init: function(visible, hidden) {
            visibleFunction = visible;
            hiddenFunction = hidden;
            pageVisibilityHandler();
        },

        setVisible: function(visible) {
            visibleFunction = visible;
        },

        setHidden: function(hidden) {
            hiddenFunction = hidden;
        },

        handleEvent: function() {
            pageVisibilityHandler();
        }

    }

})();
