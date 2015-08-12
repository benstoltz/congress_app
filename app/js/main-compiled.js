/**
 * Created by ben7664 on 8/12/2015.
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = (function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, [{
        key: "_getAllLegNames",
        value: function _getAllLegNames() {
            var _this = this;

            var url = "https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=88036ea903bf4dffbbdc4a9fa7acb2ad";
            this.legislators = [];
            this.allLegislators = [];

            $.getJSON(url, function (data) {
                _this.allLegislators = data.results;
            });
        }
    }]);

    return App;
})();

//# sourceMappingURL=main-compiled.js.map