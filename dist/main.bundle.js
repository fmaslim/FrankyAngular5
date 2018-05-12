webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/analytics-demo/analytics-demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/analytics-demo/analytics-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  analytics-demo works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/analytics-demo/analytics-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Metric */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnalyticsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Metric = /** @class */ (function () {
    function Metric() {
    }
    return Metric;
}());

// To use this Service, we need to configure the provider to use a factory
// 1. create an implementation that conforms to AnalyticsImplementation
// 2. add it to providers with useFactory
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(implementation) {
        this.implementation = implementation;
    }
    AnalyticsService.prototype.record = function (metric) {
        this.implementation.recordEvent(metric);
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [Object])
    ], AnalyticsService);
    return AnalyticsService;
}());

var AnalyticsDemoComponent = /** @class */ (function () {
    function AnalyticsDemoComponent() {
    }
    AnalyticsDemoComponent.prototype.ngOnInit = function () {
    };
    AnalyticsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-analytics-demo',
            template: __webpack_require__("../../../../../src/app/analytics-demo/analytics-demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/analytics-demo/analytics-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsDemoComponent);
    return AnalyticsDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-routes></app-routes>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__ = __webpack_require__("../../../../../src/app/hello-world/hello-world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_item_user_item_component__ = __webpack_require__("../../../../../src/app/user-item/user-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reddit_reddit_component__ = __webpack_require__("../../../../../src/app/reddit/reddit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inventory_root_inventory_root_component__ = __webpack_require__("../../../../../src/app/inventory-root/inventory-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__price_display_price_display_component__ = __webpack_require__("../../../../../src/app/price-display/price-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_department_product_department_component__ = __webpack_require__("../../../../../src/app/product-department/product-department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_form_sku_demo_form_sku_component__ = __webpack_require__("../../../../../src/app/demo-form-sku/demo-form-sku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demo_form_sku_with_builder_demo_form_sku_with_builder_component__ = __webpack_require__("../../../../../src/app/demo-form-sku-with-builder/demo-form-sku-with-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__analytics_demo_analytics_demo_component__ = __webpack_require__("../../../../../src/app/analytics-demo/analytics-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__simple_http_simple_http_component__ = __webpack_require__("../../../../../src/app/simple-http/simple-http.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_box_search_box_component__ = __webpack_require__("../../../../../src/app/search-box/search-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__youtube_search_youtube_search_component__ = __webpack_require__("../../../../../src/app/youtube-search/youtube-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routes_routes_component__ = __webpack_require__("../../../../../src/app/routes/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__spotify_search_spotify_search_component__ = __webpack_require__("../../../../../src/app/spotify-search/spotify-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__spotify_track_spotify_track_component__ = __webpack_require__("../../../../../src/app/spotify-track/spotify-track.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// 3 main components we use to configure routing in Angular
// a. Routes - describes the routes our application supports
// b. RouterOutlet - a placeholder component that shows Angular where to put the content of each route
// c. RouterLink - a directive used to link to routes.
var routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__["b" /* HelloWorldComponent */] },
    { path: 'article', component: __WEBPACK_IMPORTED_MODULE_8__article_article_component__["b" /* ArticleComponent */] },
    { path: 'sku', component: __WEBPACK_IMPORTED_MODULE_14__demo_form_sku_demo_form_sku_component__["a" /* DemoFormSkuComponent */] },
    { path: 'sku/:id', component: __WEBPACK_IMPORTED_MODULE_14__demo_form_sku_demo_form_sku_component__["a" /* DemoFormSkuComponent */] },
    {
        path: 'skubuilder',
        component: __WEBPACK_IMPORTED_MODULE_15__demo_form_sku_with_builder_demo_form_sku_with_builder_component__["a" /* DemoFormSkuWithBuilderComponent */],
        children: [
            { path: '', redirectTo: 'analytics', pathMatch: 'full' },
            { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_16__analytics_demo_analytics_demo_component__["a" /* AnalyticsDemoComponent */] },
            { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_10__inventory_root_inventory_root_component__["a" /* InventoryRootComponent */] }
        ]
    },
    { path: 'reddit', component: __WEBPACK_IMPORTED_MODULE_6__reddit_reddit_component__["a" /* RedditComponent */] },
    { path: 'searchbox', component: __WEBPACK_IMPORTED_MODULE_19__search_box_search_box_component__["a" /* SearchBoxComponent */] },
    { path: 'searchresult', component: __WEBPACK_IMPORTED_MODULE_20__search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: 'spotify', component: __WEBPACK_IMPORTED_MODULE_24__spotify_search_spotify_search_component__["a" /* SpotifySearchComponent */] },
    { path: 'youtube', component: __WEBPACK_IMPORTED_MODULE_21__youtube_search_youtube_search_component__["a" /* YoutubeSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__["c" /* LoggedInGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__["b" /* HelloWorldComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__["b" /* HelloWorldComponent */],
                __WEBPACK_IMPORTED_MODULE_4__user_item_user_item_component__["a" /* UserItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__reddit_reddit_component__["a" /* RedditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__article_article_component__["b" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_product_component__["b" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_10__inventory_root_inventory_root_component__["a" /* InventoryRootComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__price_display_price_display_component__["a" /* PriceDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_13__product_department_product_department_component__["a" /* ProductDepartmentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__demo_form_sku_demo_form_sku_component__["a" /* DemoFormSkuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__demo_form_sku_with_builder_demo_form_sku_with_builder_component__["a" /* DemoFormSkuWithBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__analytics_demo_analytics_demo_component__["a" /* AnalyticsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__simple_http_simple_http_component__["a" /* SimpleHttpComponent */],
                __WEBPACK_IMPORTED_MODULE_19__search_box_search_box_component__["a" /* SearchBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_20__search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_21__youtube_search_youtube_search_component__["a" /* YoutubeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_23__routes_routes_component__["a" /* RoutesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__spotify_search_spotify_search_component__["a" /* SpotifySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_26__spotify_track_spotify_track_component__["a" /* SpotifyTrackComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["c" /* HttpModule */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_16__analytics_demo_analytics_demo_component__["b" /* AnalyticsService */],
                    useFactory: function () {
                        // create an implementation of that interface that will log the event
                        var loggingImplementation = {
                            recordEvent: function (metric) {
                                console.log('The metric is: ' + metric);
                            }
                        };
                        // Create the new AnalyticsService with the implementation
                        return new __WEBPACK_IMPORTED_MODULE_16__analytics_demo_analytics_demo_component__["b" /* AnalyticsService */](loggingImplementation);
                    }
                },
                __WEBPACK_IMPORTED_MODULE_19__search_box_search_box_component__["c" /* YoutubeServiceInjectables */],
                __WEBPACK_IMPORTED_MODULE_24__spotify_search_spotify_search_component__["b" /* SpotifyService */],
                __WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_3__hello_world_hello_world_component__["c" /* LoggedInGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 50%; padding: 20px;\">\r\n  <div class=\"form-group\">\r\n    {{ article.votes }}\r\n  </div>\r\n  <div class=\"form-group\">\r\n    Points\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" style=\"width: 50%; padding: 20px;\">\r\n  <a class=\"\" href=\"{{ article.link }}\">{{ article.title }}</a>\r\n</div>\r\n<ul>\r\n  <li>\r\n    <a href (click)=\"voteUp()\">\r\n      <i class=\"arrow up icon\">upvote</i>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a href (click)=\"voteDown()\">\r\n      <i class=\"arrow down icon\">downvote</i>\r\n    </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Article = /** @class */ (function () {
    function Article(link, title, votes) {
        this.votes = votes || 0;
        this.link = link;
        this.title = title;
    }
    Article.prototype.voteUp = function () {
        this.votes++;
    };
    Article.prototype.voteDown = function () {
        this.votes--;
    };
    return Article;
}());

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
        // This sets the CSS Class of the host of this component
        this.cssClass = 'row';
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.voteUp = function () {
        // Even though this works, it breaks the encapsulation of the Article class by changing
        // the article's internal properties directly.
        // The problem is that this component knows too much about the internal of the Article class
        // this.article.votes++;
        this.article.voteUp();
        return false;
        // Without "return false", Javascript by default will cause the page to reload, instead of updating the list
        // It's because JS propagates the click event to all the parent components.
        // Because the click event is propagated to parents, our browser is trying to follow the empty link,
        // which tells the browser to reload.
    };
    ArticleComponent.prototype.voteDown = function () {
        if (this.article.votes >= 1) {
            // this.article.votes--;
            this.article.voteDown();
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Article)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__("../../../../../src/app/article/article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo-form-sku-with-builder/demo-form-sku-with-builder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red-border {\r\n  border: 1px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo-form-sku-with-builder/demo-form-sku-with-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n\n  Remember, to create a new FormGroup and FormControl implicitly, use:\n  1. ngForm\n  2. ngModel\n\n  To bind to an existing FormGroup and FormControl, use:\n  1. formGroup\n  2. formControl\n\n-->\n\n<br />\n<div class=\"nav-link\">\n  <a [routerLink]=\"['./analytics']\" [routerLinkActive]=\"['active-link-child']\">Analytics</a> |\n  <a [routerLink]=\"['./inventory']\" [routerLinkActive]=\"['active-link-child']\">Inventory</a>\n</div>\n\n<router-outlet></router-outlet>\n\n<br />\n<h2>Demo Form: SKU with Builder</h2>\n<div class=\"container\">\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n\n    <!-- SKU -->\n    <label for=\"skuInput\">SKU</label>\n    <input type=\"text\"\n            id=\"skuInput\"\n            placeholder=\"SKU\"\n            [formControl]=\"myForm.controls['sku']\"\n            class=\"form-control\">\n    <div class=\"ui error message\" *ngIf=\"sku.value !== 'ABC123'\">\n      SKU is required.\n    </div>\n    <div *ngIf=\"sku.hasError('invalidSku')\">Sku must begin with 123</div>\n    <br />\n\n    <!-- FIRST NAME -->\n    <label for=\"firstName\">First Name: </label>\n    <input type=\"text\"\n            id=\"firstName\"\n            placeholder=\"Enter a first name\"\n            [formControl]=\"myForm.controls['firstName']\"\n            class=\"form-control\"\n            [class.red-border]=\"myForm.controls['firstName'].value === ''\">\n    <br />\n\n    <!-- PRODUCT NAME -->\n    <label for=\"productName\">Product Name: </label>\n    <input type=\"text\"\n            id=\"productName\"\n            placeholder=\"Enter a product name\"\n            [formControl]=\"myForm.controls['productName']\"\n            class=\"form-control\"\n            [class.red-border]=\"myForm.controls['productName'].value === ''\"\n            [(ngModel)]=\"productName\"> <!-- [] and () used both indicates a 2-way data bind -->\n    <br />\n\n    <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/demo-form-sku-with-builder/demo-form-sku-with-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormSkuWithBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoFormSkuWithBuilderComponent = /** @class */ (function () {
    // There are 2 main functions in FormBuilder
    // 1. control - creates a new FormControl
    // 2. group - creates a new FormGroup
    function DemoFormSkuWithBuilderComponent(fb) {
        this.myForm = fb.group({
            'sku': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, this.skuValidator])],
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'productName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        this.sku = this.myForm.controls['sku'];
        // To watch for changes on a control:
        // 1. Get access to the EventEmitter by calling control.valueChanges
        // 2. Add an observer by calling subscribe method
        this.sku.valueChanges.subscribe(function (value) {
            console.log("Value of sku changes to: " + value);
        });
    }
    // To use validators, 2 things need to be done:
    // 1. Assign a validator to the FormControl object
    // 2. Check the status of the validator in the VIEW and take action accordingly
    DemoFormSkuWithBuilderComponent.prototype.ngOnInit = function () {
    };
    DemoFormSkuWithBuilderComponent.prototype.onSubmit = function (value) {
        console.log('Values entered: ' + JSON.stringify(value));
    };
    // A validator takes as its input a FormControl, and returns a StringMap<string, boolean>
    // where the key is "error code" and the value is true if it fails.
    DemoFormSkuWithBuilderComponent.prototype.skuValidator = function (control) {
        if (!control.value.match(/^123/)) {
            return { invalidSku: true };
        }
    };
    DemoFormSkuWithBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-form-sku-with-builder',
            template: __webpack_require__("../../../../../src/app/demo-form-sku-with-builder/demo-form-sku-with-builder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo-form-sku-with-builder/demo-form-sku-with-builder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], DemoFormSkuWithBuilderComponent);
    return DemoFormSkuWithBuilderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo-form-sku/demo-form-sku.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo-form-sku/demo-form-sku.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n  Remember that whenever we make directives available to our view, they will get attached to any element that matches their selector\n  NgForm does something handy but not obvious: it incldes the form tag in its selector (instead of requiring you to explicitly\n  add ngForm as an attribute).\n\n  What this means is that if you import FormsModule, ngForm will get automatically attached to any <form> tags\n  you have in your view.\n\n  2 important functionalities that ngForm gives us:\n  a. A FormGroup named ngForm\n  b. A (ngSubmit) output\n\n  #f=\"ngForm\" - This says that we want to create a local variable, or an alias, for this view.\n  ngModel - This directive specifies a selector of ngModel. This means it can be attached to an input tag by adding this sort of\n            attribute: ngModel=\"whatever\". In this case, it is specified with no attribute value.\n\n            When it is used with no attribute value, that means:\n            1. A one-way data binding\n            2. We want to create a FormControl on this form with the name sku (because of the name attribute on the input tag)\n-->\n<div *ngIf=\"paramHasValue()\">\n  <p>Parameter passed in is: {{ id }}</p>\n</div>\n\n<h2>Demo Form: SKU</h2>\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n  <div class=\"container\">\n    <label for=\"skuInput\">SKU</label>\n    <input type=\"text\" id=\"skuInput\"\n           placeholder=\"SKU\"\n           name=\"sku\"\n           class=\"form-control\"\n           ngModel>\n\n    <br />\n    <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/demo-form-sku/demo-form-sku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFormSkuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// FormsModule gives us Template-driven directives, such as:
// ngModel and ngForm
// ReactiveFormsModule gives us directives, such as:
// formControl and formGroup
var DemoFormSkuComponent = /** @class */ (function () {
    function DemoFormSkuComponent(route) {
        var _this = this;
        this.route = route;
        // route.params is an Observable. We can extract the params into hard values using 'subscribe'
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    DemoFormSkuComponent.prototype.ngOnInit = function () {
    };
    DemoFormSkuComponent.prototype.onSubmit = function (form) {
        console.log('You submitted value: ', form);
    };
    DemoFormSkuComponent.prototype.paramHasValue = function () {
        return this.id && this.id.length > 0;
    };
    DemoFormSkuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demo-form-sku',
            template: __webpack_require__("../../../../../src/app/demo-form-sku/demo-form-sku.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo-form-sku/demo-form-sku.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DemoFormSkuComponent);
    return DemoFormSkuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hello-world/hello-world.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hello-world/hello-world.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <span>Username</span>\n  <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"Enter a username\">\n\n  <br />\n  <span>Password</span>\n  <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Enter a password\">\n\n  <br />\n  <button type=\"button\" (click)=\"submit(username, password)\" class=\"btn btn-primary\">Login</button>\n\n  <br /> <br />\n  <button type=\"button\" (click)=\"isLoggedIn()\" class=\"btn btn-info\">Is Logged In?</button>\n\n  <br /> <br />\n  <button type=\"button\" (click)=\"getUser()\" class=\"btn btn-danger\">Get User</button>\n\n  <br /> <br />\n  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-warning\">Logout</button>\n</div>\n\n<br /><br />\n<div *ngIf=\"loggedIn\">\n  You can only see this if the user is logged in\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hello-world/hello-world.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HelloWorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (username, password) {
        if (username === 'andy' && password === 'pass') {
            // localStorage serves as a flag to indicate whether or not there is an active user.
            // LocalStorage is an HTML5 key/value pair that allows to persist information on the browser.
            // The API is verys imple, and basically allows the setting, retrieval, and deletion of items.
            localStorage.setItem('username', username);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        var currentUser = this.getUser();
        return currentUser !== null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());

var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        if (!isLoggedIn) {
            alert("You don't have permission to view this page");
        }
        return isLoggedIn;
    };
    LoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [AuthService])
    ], LoggedInGuard);
    return LoggedInGuard;
}());

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent(authService) {
        this.authService = authService;
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
        this.username = '';
        this.password = '';
    };
    HelloWorldComponent.prototype.submit = function (username, password) {
        var loggedIn = this.authService.login(username, password);
        if (loggedIn) {
            alert("LocalStorage['username']: " + localStorage['username']);
        }
        else {
            alert("Failed to login user. Username: " + username);
        }
    };
    HelloWorldComponent.prototype.isLoggedIn = function () {
        this.loggedIn = this.authService.isLoggedIn();
        alert("Is user logged in? " + this.loggedIn);
    };
    HelloWorldComponent.prototype.getUser = function () {
        var user = this.authService.getUser();
        alert("Current user: " + user);
    };
    HelloWorldComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    HelloWorldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hello-world',
            template: __webpack_require__("../../../../../src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [AuthService])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inventory-root/inventory-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-border {\r\n  border: 1px solid Red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory-root/inventory-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-product-list [productList]=\"products\"\n                    (productSelected)=\"productWasSelected($event)\">\n  </app-product-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/inventory-root/inventory-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryRootComponent = /** @class */ (function () {
    function InventoryRootComponent() {
        this.products = [
            new __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* Product */]('MYSHOES', // SKU
            'Black Running Shoes', // Name
            '', // Image URL
            ['Men', 'Shoes', 'Running Shoes'], // Department
            109.99),
            new __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* Product */]('NEATOJACKET', // SKU
            'Blue Jacket', // Name
            '', // Image URL
            ['Women', 'Apparel', 'Jackets & Vests'], // Department
            239.99),
            new __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* Product */]('NICEHAT', // SKU
            'A Nice Black Hat', // Name
            '', // Image URL
            ['Men', 'Accessories', 'Hats'], // Department
            29.99),
        ];
    }
    InventoryRootComponent.prototype.ngOnInit = function () {
    };
    InventoryRootComponent.prototype.productWasSelected = function (product) {
        alert('Inside InventoryRootComponent');
        console.log('Product clicked: ' + product);
    };
    InventoryRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inventory-root',
            template: __webpack_require__("../../../../../src/app/inventory-root/inventory-root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inventory-root/inventory-root.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryRootComponent);
    return InventoryRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/price-display/price-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/price-display/price-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  ${{ price }}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/price-display/price-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceDisplayComponent = /** @class */ (function () {
    function PriceDisplayComponent() {
    }
    PriceDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PriceDisplayComponent.prototype, "price", void 0);
    PriceDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-price-display',
            template: __webpack_require__("../../../../../src/app/price-display/price-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/price-display/price-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceDisplayComponent);
    return PriceDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-department/product-department.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-department/product-department.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span *ngFor=\"let name of product.department; let i = index\">\n    <a href=\"#\">{{ name }}</a>\n    <span>{{ i < (product.department.length-1) ? '>' : '' }}</span>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-department/product-department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDepartmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDepartmentComponent = /** @class */ (function () {
    function ProductDepartmentComponent() {
    }
    ProductDepartmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__product_product_component__["a" /* Product */])
    ], ProductDepartmentComponent.prototype, "product", void 0);
    ProductDepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-department',
            template: __webpack_require__("../../../../../src/app/product-department/product-department.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-department/product-department.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDepartmentComponent);
    return ProductDepartmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test-border {\r\n  border: 1px solid Red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container test-border\" *ngFor=\"let product of productList\">\n  <app-product [product]=\"product\" (click)=\"clicked(product)\"></app-product>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = /** @class */ (function () {
    // When we create a new component, we can expose "public events" (component outputs)
    // that allow the component to talk to the outside world
    // 3 things need to be done:
    // a. Specify outputs in the @Component configuration
    // b. Attach an EventEmitter to the output property
    // c. Emit an event from the EventEmitter at the right time.
    function ProductListComponent() {
        this.productSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.productSelected.emit(product);
    };
    ProductListComponent.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "productList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProductListComponent.prototype, "productSelected", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ProductImageComponent goes here -->\n<div class=\"container\">\n  <h1>{{ product.name }}</h1>\n  <div>SKU #: {{ product.sku }}</div>\n  <div>\n    <app-product-department [product]=\"product\"></app-product-department>\n  </div>\n</div>\n<app-price-display [price]=\"product.price\"></app-price-display>\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Product = /** @class */ (function () {
    function Product(sku, name, imageUrl, department, price) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.department = department;
        this.price = price;
    }
    return Product;
}());

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.cssClass = 'item';
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Product)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "cssClass", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reddit/reddit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reddit/reddit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" style=\"width: 50%; padding: 20px;\">\r\n  <h3 class=\"ui header\">Add a link</h3>\r\n\r\n  <div class=\"field form-group\">\r\n    <label for=\"title\">Title: </label>\r\n    <input name=\"title\" class=\"form-control\" placeholder=\"Enter a title\" formControlName=\"title\">\r\n  </div>\r\n  <div class=\"field form-group\">\r\n    <label for=\"link\">Link: </label>\r\n    <input name=\"link\" class=\"form-control\" placeholder=\"Enter a link\" formControlName=\"link\">\r\n  </div>\r\n  <button (click)=\"addArticle(title.value, link.value)\" class=\"btn btn-success\">Submit link</button>\r\n</form>\r\n\r\n<app-article *ngFor=\"let article of articles\" [article]=\"article\"></app-article>\r\n"

/***/ }),

/***/ "../../../../../src/app/reddit/reddit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article_component__ = __webpack_require__("../../../../../src/app/article/article.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedditComponent = /** @class */ (function () {
    function RedditComponent() {
        this.articles = [
            new __WEBPACK_IMPORTED_MODULE_2__article_article_component__["a" /* Article */]('http://angular.io', 'Angular 5', 10),
            new __WEBPACK_IMPORTED_MODULE_2__article_article_component__["a" /* Article */]('http://react.io', 'ReactJS', 10),
            new __WEBPACK_IMPORTED_MODULE_2__article_article_component__["a" /* Article */]('http://vue.io', 'VueJS', 10)
        ];
    }
    RedditComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    RedditComponent.prototype.createForm = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: this.title,
            link: this.link
        });
    };
    RedditComponent.prototype.createFormControls = function () {
        this.title = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('');
        this.link = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('');
    };
    RedditComponent.prototype.addArticle = function (myTitle, myLink) {
        this.articles.unshift(new __WEBPACK_IMPORTED_MODULE_2__article_article_component__["a" /* Article */](myLink, myTitle));
    };
    RedditComponent.prototype.sortedArticles = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reddit',
            template: __webpack_require__("../../../../../src/app/reddit/reddit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reddit/reddit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedditComponent);
    return RedditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/routes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active-link {\r\n  font-weight: bolder;\r\n  color: orangered;\r\n}\r\n\r\n.active-link-child {\r\n  font-weight: bolder;\r\n  color: limegreen;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/routes.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1>Router Example</h1>\n  <div class=\"nav-link\">\n    <a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active-link']\">Home</a> |\n    <a [routerLink]=\"['/article']\" [routerLinkActive]=\"['active-link']\">Article</a> |\n    <a [routerLink]=\"['/sku']\" [routerLinkActive]=\"['active-link']\">SKU</a> |\n    <a [routerLink]=\"['/skubuilder']\" [routerLinkActive]=\"['active-link']\">SKU with Builder</a> |\n    <a [routerLink]=\"['/reddit']\" [routerLinkActive]=\"['active-link']\">Reddit</a> |\n    <a [routerLink]=\"['/searchbox']\" [routerLinkActive]=\"['active-link']\">Search Box</a> |\n    <a [routerLink]=\"['/searchresult']\" [routerLinkActive]=\"['active-link']\">Search Result</a> |\n    <a [routerLink]=\"['/spotify']\" [routerLinkActive]=\"['active-link']\">Spotify</a> |\n    <a [routerLink]=\"['/youtube']\" [routerLinkActive]=\"['active-link']\">Youtube</a>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/routes/routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoutesComponent = /** @class */ (function () {
    function RoutesComponent() {
    }
    RoutesComponent.prototype.ngOnInit = function () {
    };
    RoutesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-routes',
            template: __webpack_require__("../../../../../src/app/routes/routes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/routes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoutesComponent);
    return RoutesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-box/search-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-box/search-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <label>Search</label>\r\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/search-box/search-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchResult; });
/* unused harmony export YouTubeSearchService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return YoutubeServiceInjectables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var SearchResult = /** @class */ (function () {
    function SearchResult(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
}());

var YOUTUBE_API_KEY = '';
var YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
var YouTubeSearchService = /** @class */ (function () {
    function YouTubeSearchService(http, apiKey, apiURL) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiURL = apiURL;
    }
    YouTubeSearchService.prototype.search = function (query) {
        var params = [
            "q=" + query,
            "key=" + this.apiKey,
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join('&');
        var queryURL = this.apiURL + "?" + params;
        return this.http.get(queryURL).map(function (response) {
            return response['items'].map(function (item) {
                return new SearchResult({
                    id: item.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    YouTubeSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(YOUTUBE_API_KEY)),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(YOUTUBE_API_URL)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, String])
    ], YouTubeSearchService);
    return YouTubeSearchService;
}());

var YoutubeServiceInjectables = [
    { provide: YouTubeSearchService, useClass: YouTubeSearchService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent(youtube, elm) {
        this.youtube = youtube;
        this.elm = elm;
        // These 2 Outputs will be emitted from this component.
        // We can use "(output)='callback()'" in the view to listen to events in this component.
        this.loading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // ElementRef elm - this is the parent component this is attached to.
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        // This is a good place to do initialization (vs the constructor) because inputs
        // set on a component are not available in the constructor.
        var _this = this;
        // Convert the "keyup" event into an observable stream
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(this.elm.nativeElement, 'keyup')
            .map(function (e) { return e.target.value; }) // extract the value of the input
            .filter(function (text) { return text.length > 1; }) // filter out search term if empty
            .debounceTime(400) // only once every 400ms
            .do(function () { return _this.loading.emit(true); }) // enable loading
            .map(function (query) { return _this.youtube.search(query); })
            .switch()
            .subscribe(// act on the return of the search
        // on success
        function (results) {
            _this.loading.emit(false);
            _this.results.emit(results);
        }, 
        // on error
        function (err) {
            console.log(err);
            _this.loading.emit(err);
        }, 
        // on completion
        function () {
            _this.loading.emit(false);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SearchBoxComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SearchBoxComponent.prototype, "results", void 0);
    SearchBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-box',
            template: __webpack_require__("../../../../../src/app/search-box/search-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-box/search-box.component.css")]
        }),
        __metadata("design:paramtypes", [YouTubeSearchService, __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img src=\"{{ result.thumbnailUrl }}\">\n  <div>\n    <h3>{{ result.title }}</h3>\n    <p>{{ result.description }}</p>\n    <p>\n      <a href=\"{{ result.videoUrl }}\" class=\"btn btn-warning\" role=\"button\">Watch</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_box_search_box_component__ = __webpack_require__("../../../../../src/app/search-box/search-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__search_box_search_box_component__["b" /* SearchResult */])
    ], SearchResultComponent.prototype, "result", void 0);
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-result',
            template: __webpack_require__("../../../../../src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/simple-http/simple-http.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simple-http/simple-http.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Basic Request</h2>\n<button type=\"button\" (click)=\"makeRequest()\" class=\"btn btn-success\">Make Request</button>\n<div *ngIf=\"loading\">loading...</div>\n\n\n<br />\n<pre>{{ data | json }}</pre>\n"

/***/ }),

/***/ "../../../../../src/app/simple-http/simple-http.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleHttpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleHttpComponent = /** @class */ (function () {
    function SimpleHttpComponent(http) {
        this.http = http;
    }
    SimpleHttpComponent.prototype.ngOnInit = function () {
    };
    SimpleHttpComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.get('https://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (data) {
            _this.data = data;
            _this.loading = false;
        });
    };
    SimpleHttpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-http',
            template: __webpack_require__("../../../../../src/app/simple-http/simple-http.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simple-http/simple-http.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SimpleHttpComponent);
    return SimpleHttpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spotify-search/spotify-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spotify-search/spotify-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Spotify Search</h1>\n\n<p class=\"container\">\n  <input type=\"text\"\n         [value]=\"query\"\n         class=\"form-control\"\n         placeholder=\"Enter a search string\"\n         (keydown.enter)=\"submit(newquery.value)\" #newquery>\n\n  <button type=\"button\" (click)=\"submit(newquery.value)\" class=\"btn btn-info\">Search</button>\n  <br />\n  <button type=\"button\" (click)=\"getEnvironmentVariable()\" class=\"btn btn-warning\">Environment.Google</button>\n</p>\n\n<div *ngIf=\"results\">\n  <div *ngIf=\"!results.length\">\n    No tracks were found with the term '{{ query }}'\n  </div>\n\n\n  <div *ngIf=\"results.length\">\n    <div *ngFor=\"let t of results\">\n      <div class=\"thumbnail\">\n        <div class=\"content\">\n\n          <img src=\"{{ t.album.images[0].url }}\" class=\"img-responsive\">\n\n          <div class=\"caption\">\n            <h3>\n              <a [routerLink]=\"['/artists', t.artists[0].id]\">\n                {{ t.artists[0].name }}\n              </a>\n            </h3>\n            <br />\n            <p>\n              <a [routerLink]=\"['/tracks', t.id]\">\n                {{ t.name }}\n              </a>\n            </p>\n          </div>\n\n          <div class=\"attribution\">\n            <a [routerLink]=\"['/albums', t.album.id]\">\n              {{ t.album.name }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spotify-search/spotify-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpotifyService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        // The first method to implement is searchTrack, which will search for a track, given a search term
        this.spotifyURL = 'https://api.spotify.com/v1';
    }
    SpotifyService.prototype.query = function (URL, params) {
        var queryURL = "" + this.spotifyURL + URL;
        if (params) {
            queryURL = queryURL + "?" + params.join('&');
        }
        var apiKey = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].spotifyApiKey;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            Authorization: "Bearer " + apiKey
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.request(queryURL, options)
            .map(function (response) { return response.json(); });
    };
    SpotifyService.prototype.search = function (query, type) {
        return this.query("/search", [
            "q=" + query,
            "type=" + type
        ]);
    };
    SpotifyService.prototype.searchTrack = function (query) {
        // const params = [
        //   `q=${query}`,
        //   `type=track`
        // ].join('&');
        // const url = `${this.spotifyURL}?${params}`;
        // This performs a GET request to the URL, passing the query as the search term
        // This returns an Observable, and uses the RXJS function 'map' to transform the result
        // then parsing it as JSON, resulting on an object.
        // Any function that calls this will have to use the Observable API and subscribe to the response
        // return this.http.request(url).map(response => response.json());
        return this.search(query, 'track');
    };
    SpotifyService.prototype.getTrack = function (id) {
        return this.query("/tracks/" + id);
    };
    SpotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SpotifyService);
    return SpotifyService;
}());

var SpotifySearchComponent = /** @class */ (function () {
    function SpotifySearchComponent(spotifyService, router, route) {
        var _this = this;
        this.spotifyService = spotifyService;
        this.router = router;
        this.route = route;
        // Note that queryParams is different from route.params
        // route.params matches parameters in the route
        // queryparams matches parameters in the query string
        this.route.queryParams.subscribe(function (params) { return _this.query = params['query'] || ''; });
    }
    SpotifySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search();
        this.spotifyService.getTrack(this.id).subscribe(function (response) { return _this.renderTrack(response); });
    };
    SpotifySearchComponent.prototype.submit = function (term) {
        // We're manually telling the router to navigate to the search route, and providing a query parameter
        // then performing the actual search
        var _this = this;
        // Doing things this way gives us a great benefit: if we reload the browser, we're going to see the same
        // search result rendered. We can say that we're persisting the search term on the URL
        this.router.navigate(['search'], { queryParams: { query: this.query } }).then(function () { return _this.search(); });
    };
    SpotifySearchComponent.prototype.search = function () {
        var _this = this;
        console.log('this.query', this.query);
        if (!this.query) {
            return;
        }
        this.spotifyService.searchTrack(this.query).subscribe(function (response) { return _this.renderResults(response); });
    };
    SpotifySearchComponent.prototype.renderResults = function (response) {
        this.results = null;
        if (response && response.tracks && response.tracks.items) {
            this.results = response.tracks.items;
        }
    };
    SpotifySearchComponent.prototype.renderTrack = function (response) {
        this.tracks = null;
        if (response && response.tracks && response.tracks.items) {
        }
    };
    SpotifySearchComponent.prototype.getEnvironmentVariable = function () {
        alert('Environment.Google: ' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].google);
    };
    SpotifySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spotify-search',
            template: __webpack_require__("../../../../../src/app/spotify-search/spotify-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spotify-search/spotify-search.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [SpotifyService,
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SpotifySearchComponent);
    return SpotifySearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/spotify-track/spotify-track.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spotify-track/spotify-track.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"track\">\n  <h1>{{ track.name }}</h1>\n\n  <p>\n    <img src=\"{{ track.album.images[1].url }}\">\n  </p>\n\n  <p>\n    <audio controls src=\"{{ track.preview_url }}\"></audio>\n  </p>\n\n  <p>\n    <a href (click)=\"back()\">Back</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spotify-track/spotify-track.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyTrackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpotifyTrackComponent = /** @class */ (function () {
    function SpotifyTrackComponent() {
    }
    SpotifyTrackComponent.prototype.ngOnInit = function () {
    };
    SpotifyTrackComponent.prototype.back = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SpotifyTrackComponent.prototype, "track", void 0);
    SpotifyTrackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spotify-track',
            template: __webpack_require__("../../../../../src/app/spotify-track/spotify-track.component.html"),
            styles: [__webpack_require__("../../../../../src/app/spotify-track/spotify-track.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpotifyTrackComponent);
    return SpotifyTrackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-item/user-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-item/user-item.component.html":
/***/ (function(module, exports) {

module.exports = "Hello {{ name }}\n"

/***/ }),

/***/ "../../../../../src/app/user-item/user-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], UserItemComponent.prototype, "name", void 0);
    UserItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-item',
            template: __webpack_require__("../../../../../src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-item/user-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let name of names\">\n    <app-user-item [name]=\"name\"></app-user-item>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/youtube-search/youtube-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/youtube-search/youtube-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Youtube Search</h1>\n  <label *ngIf=\"loading\">Loading...</label>\n\n  <div class=\"row\">\n    <app-search-box\n      (loading)=\"loading=$event\"\n      (results)=\"updateResult($event)\"></app-search-box>\n  </div>\n\n  <div class=\"row\">\n    <app-search-result\n      *ngFor=\"let result of results\"\n      [result]=\"result\"></app-search-result>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/youtube-search/youtube-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeSearchComponent = /** @class */ (function () {
    function YoutubeSearchComponent() {
    }
    YoutubeSearchComponent.prototype.ngOnInit = function () {
    };
    YoutubeSearchComponent.prototype.updateResult = function (results) {
        this.results = results;
    };
    YoutubeSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-youtube-search',
            template: __webpack_require__("../../../../../src/app/youtube-search/youtube-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/youtube-search/youtube-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YoutubeSearchComponent);
    return YoutubeSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    spotifyApiKey: '',
    google: 'http://www.google.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map