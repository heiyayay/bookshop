(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-style-module"],{

/***/ "./src/app/routes/style/color.service.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/style/color.service.ts ***!
  \***********************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorService = /** @class */ (function () {
    function ColorService() {
        this.APP_COLORS = {
            primary: '#1890ff',
            success: '#52c41a',
            error: '#f5222d',
            warning: '#fadb14',
            red: '#f5222d',
            volcano: '#fa541c',
            orange: '#fa8c16',
            gold: '#faad14',
            yellow: '#fadb14',
            lime: '#a0d911',
            green: '#52c41a',
            cyan: '#13c2c2',
            blue: '#1890ff',
            geekblue: '#2f54eb',
            purple: '#722ed1',
            magenta: '#eb2f96',
        };
    }
    Object.defineProperty(ColorService.prototype, "names", {
        get: function () {
            return Object.keys(this.APP_COLORS).filter(function (name, index) { return index > 3; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorService.prototype, "brands", {
        get: function () {
            return ['primary', 'success', 'error', 'warning'];
        },
        enumerable: true,
        configurable: true
    });
    ColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ColorService);
    return ColorService;
}());



/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\n  <h1>\n    Colors\n    <small>Color Palettes</small>\n  </h1>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"list\">\n  <div nz-col [nzMd]=\"24\">\n    <nz-card nzTitle=\"Classic colors\">\n      <div nz-row *ngFor=\"let c of c.brands\">\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{c}}-light p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{c}}-light</p>\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{c}}-light</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{c}} p-lg\">\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{c}}</p>\n            <p (click)=\"onCopy('text-' + c)\">.text-{{c}}</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{c}}-dark p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{c}}-dark</p>\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{c}}-dark</p>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"list\">\n  <div nz-col [nzMd]=\"24\">\n    <nz-card nzTitle=\"Name colors\">\n      <div nz-row *ngFor=\"let c of c.names\">\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{c}}-light p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-light')\">.bg-{{c}}-light</p>\n            <p (click)=\"onCopy('text-' + c + '-light')\">.text-{{c}}-light</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{c}} p-lg\">\n            <p (click)=\"onCopy('bg-' + c)\">.bg-{{c}}</p>\n            <p (click)=\"onCopy('text-' + c)\">.text-{{c}}</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <div class=\"bg-{{c}}-dark p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-dark')\">.bg-{{c}}-dark</p>\n            <p (click)=\"onCopy('text-' + c + '-dark')\">.text-{{c}}-dark</p>\n          </div>\n        </div>\n      </div>\n      <div nz-row>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-darker p-lg\">\n            <p (click)=\"onCopy('bg-grey-darker')\">.bg-grey-darker</p>\n            <p (click)=\"onCopy('text-grey-darker')\">.text-grey-darker</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-dark p-lg\">\n            <p (click)=\"onCopy('bg-grey-dark')\">.bg-grey-dark</p>\n            <p (click)=\"onCopy('text-grey-dark')\">.text-grey-dark</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"4\">\n          <div class=\"bg-grey p-lg\">\n            <p (click)=\"onCopy('bg-grey')\">.bg-grey</p>\n            <p (click)=\"onCopy('text-grey')\">.text-grey</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-light p-lg\">\n            <p (click)=\"onCopy('bg-grey-light')\">.bg-grey-light</p>\n            <p (click)=\"onCopy('text-grey-light')\">.text-grey-light</p>\n          </div>\n        </div>\n        <div nz-col [nzSpan]=\"5\">\n          <div class=\"bg-grey-lighter p-lg\">\n            <p (click)=\"onCopy('bg-grey-lighter')\">.bg-grey-lighter</p>\n            <p (click)=\"onCopy('text-grey-lighter')\">.text-grey-lighter</p>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\" class=\"list\">\n  <div nz-col [nzMd]=\"24\">\n    <nz-card nzTitle=\"Full Colors\">\n      <div nz-row>\n        <div nz-col [nzSpan]=\"4\" *ngFor=\"let c of c.names\">\n          <div *ngFor=\"let i of nums\" class=\"bg-{{c}}-{{i}} p-lg\">\n            <p (click)=\"onCopy('bg-' + c + '-' + i)\">.bg-{{c}}-{{i}}</p>\n            <p (click)=\"onCopy('bg-' + c + '-' + i + '-h')\">.bg-{{c}}-{{i}}-h</p>\n            <p (click)=\"onCopy('text-' + c + '-' + i)\">.text-{{c}}-{{i}}</p>\n          </div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.less":
/*!***********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .list p {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n:host ::ng-deep .list p:first-child {\n  margin-bottom: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3N0eWxlL2NvbG9ycy9EOi93b3Jrc3BhY2UvbmctYWxhaW4tbWFzdGVyL25nLWFsYWluLW1hc3Rlci9zcmMvYXBwL3JvdXRlcy9zdHlsZS9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvc3R5bGUvY29sb3JzL2NvbG9ycy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FER1E7RUFDRSxrQkFBQTtBQ0RWIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3N0eWxlL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmxpc3Qge1xuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCA6Om5nLWRlZXAgLmxpc3QgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAubGlzdCBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/style/colors/colors.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/style/colors/colors.component.ts ***!
  \*********************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");





var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(c, msg) {
        this.c = c;
        this.msg = msg;
        this.nums = Array(10)
            .fill(1)
            .map(function (v, i) { return v + i; });
    }
    ColorsComponent.prototype.onCopy = function (str) {
        var _this = this;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(str).then(function () { return _this.msg.success("Copied Success!"); });
    };
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/routes/style/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.less */ "./src/app/routes/style/colors/colors.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\n  <h1>\n    Grid Masonry\n    <small>Pure CSS and mobile first with a fallback to inline grid, Supported from IE10,\n      <a href=\"//caniuse.com/#feat=multicolumn\"\n        target=\"_blank\">browser compatibility</a>\n    </small>\n  </h1>\n</div>\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Ipsum do ullamco laboris excepteur. Do incididunt commodo adipisicing officia sunt tempor. Deserunt exercitation proident\n        enim veniam laboris fugiat ipsum veniam dolore duis sit duis. In deserunt ut nulla ad eu.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Veniam non sunt quis ex consequat ea esse duis esse. Ut incididunt eiusmod occaecat esse aute adipisicing culpa. Voluptate\n        ullamco labore laboris et do in.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Esse elit et aute do aliqua ipsum cillum consectetur deserunt deserunt cupidatat aute aliqua aute. Aliquip ad incididunt\n        dolor cupidatat quis officia cillum sit ex. Irure ut sit Lorem sunt nulla excepteur ipsum ipsum dolore cillum cupidatat\n        ipsum. Do amet aliquip sunt consectetur nulla. Cupidatat ad consectetur veniam aliqua non ullamco laboris eiusmod.\n        In voluptate officia aliquip dolore sit qui consectetur fugiat aliqua duis occaecat. Non mollit elit nisi ea mollit\n        anim excepteur ut qui exercitation.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Ullamco incididunt do deserunt cillum veniam cillum amet ad. Deserunt laborum cupidatat mollit proident adipisicing\n        in culpa consequat adipisicing et non. Aliqua ea elit voluptate esse aliqua dolor ipsum. Ut officia officia fugiat\n        sint esse qui incididunt Lorem occaecat.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Ea non irure qui fugiat aliquip esse adipisicing. Cillum aliquip dolor non fugiat ad aliqua. In voluptate et non irure\n        elit. Tempor qui sunt incididunt amet tempor sint et voluptate sunt qui sit culpa proident ipsum. Sunt duis pariatur\n        officia ut magna pariatur fugiat dolor cillum laboris eu. Qui incididunt minim nostrud exercitation aliquip.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Fugiat commodo ad consectetur reprehenderit. Officia fugiat ea proident exercitation occaecat mollit laboris fugiat\n        consequat deserunt anim ipsum magna ex. Esse do amet cillum aute ut ea.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Magna id fugiat laborum elit ullamco deserunt do laboris non qui. Duis et exercitation nulla labore cupidatat nostrud\n        pariatur reprehenderit in nostrud. Consequat consequat consectetur mollit adipisicing. Laborum amet sit sint aliquip\n        fugiat adipisicing enim reprehenderit. Voluptate nisi reprehenderit voluptate sit enim aute deserunt cupidatat et\n        dolore labore voluptate id dolore.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Reprehenderit non ullamco quis non excepteur irure excepteur anim ullamco labore. Sit occaecat consectetur laborum\n        consequat elit sint sit sunt. Duis aliquip magna ipsum consequat eiusmod officia.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Magna nostrud ex cupidatat id in non labore ad voluptate est irure tempor. Nostrud aliqua magna laborum incididunt\n        deserunt veniam nulla nulla labore cillum. Id laboris Lorem dolore minim reprehenderit eu proident aliqua magna id\n        aute aute. Aliqua est et nulla eu duis id laborum magna.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Sint pariatur eiusmod id sit est exercitation laboris mollit pariatur minim. Ex aliquip commodo nulla reprehenderit\n        et laboris consequat pariatur culpa culpa proident ullamco laboris. Ex aliquip deserunt labore aliquip ea est sit\n        quis amet tempor sunt amet. Id reprehenderit do elit sit consectetur. Aute amet sint tempor ipsum sint laboris est\n        do culpa tempor. Pariatur fugiat aute officia et laboris voluptate sit nisi in anim excepteur amet eu.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Incididunt ut eu fugiat do deserunt voluptate id et est aliqua eu sint. Ad dolore excepteur ipsum nulla proident dolore\n        aute sunt. Aute enim do dolor laborum id eiusmod sit.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Amet elit et ad amet nulla minim deserunt mollit adipisicing. Laboris non ipsum ad laborum non magna velit tempor cillum\n        cillum. Proident dolore eiusmod ex elit cillum. Cupidatat duis pariatur ut id deserunt laboris. Culpa excepteur est\n        deserunt eiusmod do do ut est labore eiusmod. Eu eu veniam excepteur mollit anim est velit nisi. Velit quis tempor\n        laboris culpa.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Nostrud nulla nisi laboris officia anim nostrud nulla cupidatat veniam ea duis. Pariatur ea ullamco irure laborum.\n        Consectetur labore in occaecat ullamco est fugiat nisi sunt deserunt. Non sunt dolor elit culpa dolore adipisicing.\n        Fugiat mollit ex voluptate nulla deserunt dolore ea sunt commodo et qui laborum.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Quis pariatur ea nisi excepteur mollit nulla reprehenderit labore. Exercitation pariatur eu pariatur tempor deserunt\n        ad occaecat ad in pariatur id et dolore. Enim veniam aute magna fugiat eiusmod velit quis. Laborum sit consequat\n        dolore qui minim culpa aliqua pariatur cillum velit. Nostrud enim aliqua ut nisi consectetur pariatur fugiat do esse\n        fugiat enim et tempor ad. Eiusmod ut incididunt proident labore sint sit culpa excepteur id. Fugiat mollit qui eu\n        eu fugiat proident.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Tempor do officia magna do sunt. Nulla cillum anim excepteur adipisicing commodo culpa. Adipisicing pariatur qui voluptate\n        consectetur mollit quis sunt enim veniam ullamco. Duis nostrud anim aliqua adipisicing fugiat aute excepteur deserunt\n        enim occaecat pariatur ad. Qui aliquip aute labore minim ipsum in aute et. Aliqua laboris magna aute incididunt esse\n        ex. Eu ipsum occaecat aliquip enim aute.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Labore cillum id non anim eiusmod officia. Nostrud laboris sint aliquip cillum magna. Minim sit labore proident culpa\n        non nisi cillum non officia est. Proident elit sit adipisicing est cupidatat ex cupidatat labore aliqua ad.\n      </p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Officia tempor ea adipisicing ad sit qui dolore consequat irure veniam. Est sit magna deserunt sint aute commodo fugiat\n        fugiat irure sint dolore commodo amet. Duis cillum dolor quis consectetur dolor et et culpa id elit. Amet ut nulla\n        sunt non in non duis sit fugiat consequat. Velit incididunt ullamco sunt deserunt nulla ad adipisicing. In fugiat\n        ullamco deserunt amet. Ex voluptate amet magna minim ut incididunt veniam.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Occaecat anim do cillum est dolore sint. Do ut proident exercitation est incididunt irure duis ea laborum minim cillum\n        est. Mollit irure non qui veniam labore eu elit veniam ea amet nisi esse labore. Elit ut nulla exercitation fugiat\n        cupidatat non cupidatat sint id minim.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Voluptate incididunt tempor nulla voluptate esse dolor Lorem veniam voluptate adipisicing laborum in aliqua. Proident\n        voluptate exercitation mollit consectetur qui commodo minim. Ea esse veniam velit minim reprehenderit incididunt\n        reprehenderit do laborum aliqua. In quis et excepteur cupidatat qui duis. Pariatur Lorem laborum ut consectetur deserunt\n        consectetur officia tempor commodo aliqua aliqua ipsum.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Ullamco officia esse ex reprehenderit reprehenderit cupidatat. Sunt excepteur sint consectetur ex aliqua excepteur.\n        Laborum id cupidatat ea reprehenderit sit eiusmod ad exercitation ullamco nostrud. Nulla tempor voluptate magna amet\n        culpa exercitation ad laborum in. Aliqua voluptate deserunt pariatur excepteur. Ullamco voluptate est dolore velit\n        aliquip tempor nostrud deserunt. Minim excepteur dolor nulla commodo incididunt ex ullamco excepteur cillum veniam\n        quis reprehenderit.</p>\n    </div>\n  </div>\n</div>\n<h3 class=\"my-md\">Masonry with any kind of element</h3>\n<div class=\"row-masonry row-masonry-xl-8 row-masonry-lg-5 row-masonry-md-4 row-masonry-sm-3 row-masonry-xs-2\">\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg1.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Proident est cillum magna qui pariatur. Deserunt ut voluptate sint aliquip anim nisi consequat. Elit laboris anim anim\n        dolor incididunt. Nostrud qui labore qui cillum excepteur mollit excepteur consequat esse anim enim ad enim. Esse\n        qui mollit et minim mollit laboris reprehenderit laborum fugiat do id. Mollit labore proident cupidatat aliqua dolore\n        exercitation consectetur commodo sint mollit nostrud esse sunt. Nostrud fugiat duis sit excepteur excepteur mollit.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg2.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg3.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg4.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg5.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg6.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Dolore consequat elit est qui dolore dolore tempor amet magna adipisicing non in commodo. Veniam sint et proident duis\n        eu nulla commodo sunt duis aliquip eiusmod. Occaecat incididunt deserunt consectetur non aliquip velit ullamco eu\n        sit labore proident exercitation. Cillum deserunt voluptate eu eiusmod sint in esse. Velit anim non Lorem proident\n        eu sit nisi Lorem aute do sit ea. Esse nostrud amet excepteur occaecat incididunt amet laborum aliqua qui mollit\n        ullamco. Labore incididunt ullamco non ipsum Lorem duis commodo adipisicing in.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Amet est dolor id esse veniam duis eu ex velit. Id qui deserunt voluptate veniam. Voluptate ea ipsum in eiusmod enim\n        do velit commodo nulla sint. Fugiat ipsum esse pariatur voluptate exercitation magna ut proident consectetur et.\n        Sint qui elit exercitation anim duis nulla commodo aliqua excepteur pariatur.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg7.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg8.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <div class=\"box-placeholder\">\n      <h2 class=\"text-grey text-md mb-sm\">Masonry Item</h2>\n      <p>Culpa amet adipisicing consequat nisi dolore sunt amet labore officia aliquip elit tempor officia aliqua. Deserunt\n        laborum enim ut laboris duis. Cillum non proident dolor ullamco cillum nostrud in sint aliqua cillum. Proident magna\n        incididunt occaecat eiusmod cillum dolor tempor Lorem adipisicing nisi adipisicing mollit ex exercitation. Magna\n        nostrud est sunt incididunt culpa. Duis nulla elit ut ea adipisicing duis esse ullamco.</p>\n    </div>\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg9.jpg\" alt=\"\" />\n  </div>\n  <div class=\"col-masonry\">\n    <img src=\"assets/tmp/img/bg10.jpg\" alt=\"\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .box-placeholder {\n  margin-bottom: 15px;\n  padding: 20px;\n  border: 1px dashed #ddd;\n  background: #fafafa;\n  color: #444;\n}\n:host ::ng-deep .box-placeholder > :last-child {\n  margin-bottom: 0;\n}\n:host ::ng-deep .box-placeholder-lg {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3N0eWxlL2dyaWRtYXNvbnJ5L0Q6L3dvcmtzcGFjZS9uZy1hbGFpbi1tYXN0ZXIvbmctYWxhaW4tbWFzdGVyL3NyYy9hcHAvcm91dGVzL3N0eWxlL2dyaWRtYXNvbnJ5L2dyaWRtYXNvbnJ5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvc3R5bGUvZ3JpZG1hc29ucnkvZ3JpZG1hc29ucnkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FKO0FETkE7RUFRTSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc3R5bGUvZ3JpZG1hc29ucnkvZ3JpZG1hc29ucnkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuYm94LXBsYWNlaG9sZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNkZGQ7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjb2xvcjogIzQ0NDtcbiAgICA+IDpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgICYtbGcge1xuICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuYm94LXBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZGQ7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGNvbG9yOiAjNDQ0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ib3gtcGxhY2Vob2xkZXIgPiA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJveC1wbGFjZWhvbGRlci1sZyB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/routes/style/gridmasonry/gridmasonry.component.ts ***!
  \*******************************************************************/
/*! exports provided: GridMasonryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMasonryComponent", function() { return GridMasonryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridMasonryComponent = /** @class */ (function () {
    function GridMasonryComponent() {
    }
    GridMasonryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridmasonry',
            template: __webpack_require__(/*! ./gridmasonry.component.html */ "./src/app/routes/style/gridmasonry/gridmasonry.component.html"),
            styles: [__webpack_require__(/*! ./gridmasonry.component.less */ "./src/app/routes/style/gridmasonry/gridmasonry.component.less")]
        })
    ], GridMasonryComponent);
    return GridMasonryComponent;
}());



/***/ }),

/***/ "./src/app/routes/style/style-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/style/style-routing.module.ts ***!
  \******************************************************/
/*! exports provided: StyleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoutingModule", function() { return StyleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");






var routes = [
    { path: 'gridmasonry', component: _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_3__["GridMasonryComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"] },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"] },
];
var StyleRoutingModule = /** @class */ (function () {
    function StyleRoutingModule() {
    }
    StyleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StyleRoutingModule);
    return StyleRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/style/style.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/style/style.module.ts ***!
  \**********************************************/
/*! exports provided: StyleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleModule", function() { return StyleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _style_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-routing.module */ "./src/app/routes/style/style-routing.module.ts");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.service */ "./src/app/routes/style/color.service.ts");
/* harmony import */ var _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gridmasonry/gridmasonry.component */ "./src/app/routes/style/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/routes/style/typography/typography.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/routes/style/colors/colors.component.ts");








var COMPONENTS = [
    _gridmasonry_gridmasonry_component__WEBPACK_IMPORTED_MODULE_5__["GridMasonryComponent"],
    _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"],
    _colors_colors_component__WEBPACK_IMPORTED_MODULE_7__["ColorsComponent"],
];
var COMPONENTS_NOROUNT = [];
var StyleModule = /** @class */ (function () {
    function StyleModule() {
    }
    StyleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _style_routing_module__WEBPACK_IMPORTED_MODULE_3__["StyleRoutingModule"]],
            providers: [_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT,
        })
    ], StyleModule);
    return StyleModule;
}());



/***/ }),

/***/ "./src/app/routes/style/typography/typography.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/routes/style/typography/typography.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\n  <h1>\n    Typography\n  </h1>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Headings\">\n      <h1 class=\"h1\">\n        class=\"h1\"\n        <small>Sub-heading</small>\n      </h1>\n      <h2 class=\"h2\">\n        class=\"h2\"\n        <small>Sub-heading</small>\n      </h2>\n      <h3 class=\"h3\">\n        class=\"h3\"\n        <small>Sub-heading</small>\n      </h3>\n      <h4 class=\"h4\">\n        class=\"h4\"\n        <small>Sub-heading</small>\n      </h4>\n      <h5 class=\"h5\">\n        class=\"h5\"\n        <small>Sub-heading</small>\n      </h5>\n      <h6 class=\"h6\">\n        class=\"h6\"\n        <small>Sub-heading</small>\n      </h6>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Paragraphs\">\n      <p>\n        <small>This is an example of small, fine print text.</small>\n      </p>\n      <p class=\"mt-sm\">\n        <strong>This is an example of strong, bold text.</strong>\n      </p>\n      <p class=\"mt-sm\">\n        <em>This is an example of emphasized, italic text.</em>\n      </p>\n      <h4 class=\"mt-sm\">Alignment & Sizing Helpers</h4>\n      <p class=\"mt-sm text-left text-sm\">class=\"text-left text-sm\"</p>\n      <p class=\"mt-sm text-center text-md\">class=\"text-center text-md\"</p>\n      <p class=\"text-right text-lg\">class=\"text-right text-lg\"</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Text Colors\">\n      <p *ngFor=\"let color of c.names\" class=\"pb-0 text-{{color}}\">class=\"text-{{color}} bg-{{color}}\"</p>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Formatting\">\n      <h4>text-nowrap</h4>\n      <p class=\"pt-sm text-nowrap\">[class=\"text-nowrap\"].Ad eiusmod eu velit veniam laborum voluptate duis aliqua esse eiusmod.</p>\n      <h4 class=\"pt-sm\">text-truncate</h4>\n      <p class=\"pt-sm text-truncate\">[class=\"text-truncate\"].Officia nulla velit minim mollit laborum et irure ullamco nisi dolore qui. Sint aute aliqua\n        tempor commodo officia sunt non do id laborum mollit ex ea cupidatat. Amet ad non fugiat magna. Ut cupidatat labore\n        pariatur esse reprehenderit esse sint in proident elit minim sunt enim sit. Enim sint deserunt exercitation duis.\n        Aliquip cillum irure do incididunt do eu eiusmod excepteur culpa ex consectetur nulla duis sit. Ex officia excepteur\n        officia ea ea cupidatat veniam officia officia est.</p>\n      <h4 class=\"pt-sm\">Transformation</h4>\n      <p class=\"pt-sm text-lowercase\">class=\"text-lowercase\"</p>\n      <p class=\"pt-sm text-uppercase\">class=\"text-uppercase\"</p>\n      <p class=\"pt-sm text-capitalize\">class=\"text-capitalize\"</p>\n      <p class=\"pt-sm text-deleted\">class=\"text-deleted\"</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Border\">\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border border-primary\">class=\"border border-primary\"</div>\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-top-1 border-success rounded-circle\">class=\"border-top-1 border-success rounded-circle\"</div>\n      <div class=\"p-sm m-sm text-center width-sm d-inline-block border-bottom-1 border-error\">class=\"border-bottom-1 border-error\"</div>\n      <div class=\"p-sm m-sm text-center width-md d-inline-block border-right-1 border-warning\">class=\"border-right-1 border-warning\"</div>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Padding & Margin\">\n      <strong>清除间距</strong>\n      <p>\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?0</code>\n      </p>\n      <p>eg: p0, pt0, mb0, mt0</p>\n      <strong>间距</strong>\n      <p>\n        <code>[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]</code>\n      </p>\n      <p>eg: p-sm, pb-sm, mt-md, mr-md</p>\n    </nz-card>\n  </div>\n</div>\n<div nz-row [nzGutter]=\"16\">\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Display\">\n      <p class=\"display-1\">class=\"display-1\"</p>\n      <p class=\"display-2\">class=\"display-2\"</p>\n      <p class=\"display-3\">class=\"display-3\"</p>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Code\">\n      <p>This is an example of an inline code element within body copy. Wrap inline code within a\n        <code>...</code>tag.</p>\n      <pre class=\"mt-sm\"><code>This is an example of preformatted text.</code></pre>\n    </nz-card>\n  </div>\n  <div nz-col [nzMd]=\"8\">\n    <nz-card nzTitle=\"Lists\">\n      <h4>list styled</h4>\n      <ol class=\"mt-sm list-styled\">\n        <li>List Item</li>\n        <li>List Item</li>\n        <li>List Item</li>\n      </ol>\n      <h4 class=\"mt-sm\">Unstyled List</h4>\n      <ul class=\"mt-sm list-unstyled\">\n        <li>List Item</li>\n        <li>List Item</li>\n        <li>List Item</li>\n      </ul>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/style/typography/typography.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/style/typography/typography.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color.service */ "./src/app/routes/style/color.service.ts");



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(c) {
        this.c = c;
    }
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/routes/style/typography/typography.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=style-style-module.js.map