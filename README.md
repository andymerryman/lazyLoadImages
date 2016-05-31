# Lazy Load Images

This just watches images and replaces their `src` with whatever is in `data-lazy-src`. Often it is used in combination with the [imageSelector](http://github.com/sakabako/imageSelector).

```javascript

var lazyLoadImages = require('lazyLoadImages/lazyLoadImages');

lazyLoadImages( jQueryOrDOM );
```

An optional second argument passes options to [scrollMonitor#allow-multiple-containers](https://github.com/MajorLeagueBaseball/scrollMonitor/tree/allow-multiple-containers):

```javascript

var lazyLoadImages = require('lazyLoadImages/lazyLoadImages');

lazyLoadImages( jQueryOrDOM, {
    $container: someScrollableContainer,
    checkVisibility: true
});
```

