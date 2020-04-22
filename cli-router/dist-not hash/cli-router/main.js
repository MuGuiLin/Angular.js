(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/news/news.component */ "./src/app/views/news/news.component.ts");
/* harmony import */ var _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/news/news-list/news-list.component */ "./src/app/views/news/news-list/news-list.component.ts");
/* harmony import */ var _views_news_news_info_news_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/news/news-info/news-info.component */ "./src/app/views/news/news-info/news-info.component.ts");
/* harmony import */ var _views_goods_goods_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/goods/goods.component */ "./src/app/views/goods/goods.component.ts");
/* harmony import */ var _views_goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/goods/goods-list/goods-list.component */ "./src/app/views/goods/goods-list/goods-list.component.ts");
/* harmony import */ var _views_goods_goods_info_goods_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/goods/goods-info/goods-info.component */ "./src/app/views/goods/goods-info/goods-info.component.ts");
/* harmony import */ var _views_dish_dish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/dish/dish.component */ "./src/app/views/dish/dish.component.ts");
/* harmony import */ var _views_dish_dishlist_dishlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/dish/dishlist/dishlist.component */ "./src/app/views/dish/dishlist/dishlist.component.ts");
/* harmony import */ var _views_dish_dishinfo_dishinfo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/dish/dishinfo/dishinfo.component */ "./src/app/views/dish/dishinfo/dishinfo.component.ts");
/* harmony import */ var _modules_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/user/user.component */ "./src/app/modules/user/user.component.ts");
/* harmony import */ var _modules_user_components_address_address_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/user/components/address/address.component */ "./src/app/modules/user/components/address/address.component.ts");
/* harmony import */ var _modules_system_system_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/system/system.component */ "./src/app/modules/system/system.component.ts");
















var routes = [
    {
        path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'news', component: _views_news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"],
        children: [
            {
                path: 'newslist', component: _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__["NewsListComponent"]
            },
            {
                path: 'newsinfo', component: _views_news_news_info_news_info_component__WEBPACK_IMPORTED_MODULE_6__["NewsInfoComponent"]
            },
            {
                path: '**', redirectTo: 'newslist'
            }
        ]
    },
    {
        path: 'goods', component: _views_goods_goods_component__WEBPACK_IMPORTED_MODULE_7__["GoodsComponent"],
        children: [
            {
                path: 'goodslist', component: _views_goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_8__["GoodsListComponent"]
            },
            {
                path: 'goodsinfo', component: _views_goods_goods_info_goods_info_component__WEBPACK_IMPORTED_MODULE_9__["GoodsInfoComponent"]
            },
            {
                path: '**', redirectTo: 'goodslist'
            }
        ]
    },
    {
        path: 'dish', component: _views_dish_dish_component__WEBPACK_IMPORTED_MODULE_10__["DishComponent"],
        children: [
            {
                path: 'dishlist', component: _views_dish_dishlist_dishlist_component__WEBPACK_IMPORTED_MODULE_11__["DishlistComponent"]
            },
            {
                path: 'dishinfo/:id', component: _views_dish_dishinfo_dishinfo_component__WEBPACK_IMPORTED_MODULE_12__["DishinfoComponent"]
            },
            {
                path: '**', redirectTo: 'dishlist'
            },
        ]
    },
    {
        path: 'system', component: _modules_system_system_component__WEBPACK_IMPORTED_MODULE_15__["SystemComponent"]
    },
    {
        path: 'user', component: _modules_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
        children: [
            {
                path: 'address', component: _modules_user_components_address_address_component__WEBPACK_IMPORTED_MODULE_14__["AddressComponent"]
            }
        ]
    },
    {
        path: '**', redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- 自定度模块中的根组件 -->\n<!-- <app-user></app-user>\n<app-system></app-system> -->\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cli-router';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user/user.module */ "./src/app/modules/user/user.module.ts");
/* harmony import */ var _modules_system_system_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/system/system.module */ "./src/app/modules/system/system.module.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/news/news.component */ "./src/app/views/news/news.component.ts");
/* harmony import */ var _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/news/news-list/news-list.component */ "./src/app/views/news/news-list/news-list.component.ts");
/* harmony import */ var _views_news_news_info_news_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/news/news-info/news-info.component */ "./src/app/views/news/news-info/news-info.component.ts");
/* harmony import */ var _views_goods_goods_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/goods/goods.component */ "./src/app/views/goods/goods.component.ts");
/* harmony import */ var _views_goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/goods/goods-list/goods-list.component */ "./src/app/views/goods/goods-list/goods-list.component.ts");
/* harmony import */ var _views_goods_goods_info_goods_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/goods/goods-info/goods-info.component */ "./src/app/views/goods/goods-info/goods-info.component.ts");
/* harmony import */ var _views_dish_dish_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/dish/dish.component */ "./src/app/views/dish/dish.component.ts");
/* harmony import */ var _views_dish_dishlist_dishlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/dish/dishlist/dishlist.component */ "./src/app/views/dish/dishlist/dishlist.component.ts");
/* harmony import */ var _views_dish_dishinfo_dishinfo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/dish/dishinfo/dishinfo.component */ "./src/app/views/dish/dishinfo/dishinfo.component.ts");

// 内置模块



// 路由模块

// 自定义模块(当组件太多(上百个)时，会导至页面变慢，所以需要进模块化，按需加载)


// 自定义公共服务

// 根组件

// 自定义公共组件



// 项目页面组件










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _views_news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
                _views_goods_goods_component__WEBPACK_IMPORTED_MODULE_16__["GoodsComponent"],
                _views_news_news_info_news_info_component__WEBPACK_IMPORTED_MODULE_15__["NewsInfoComponent"],
                _views_goods_goods_info_goods_info_component__WEBPACK_IMPORTED_MODULE_18__["GoodsInfoComponent"],
                _views_goods_goods_list_goods_list_component__WEBPACK_IMPORTED_MODULE_17__["GoodsListComponent"],
                _views_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_14__["NewsListComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _views_dish_dish_component__WEBPACK_IMPORTED_MODULE_19__["DishComponent"],
                _views_dish_dishlist_dishlist_component__WEBPACK_IMPORTED_MODULE_20__["DishlistComponent"],
                _views_dish_dishinfo_dishinfo_component__WEBPACK_IMPORTED_MODULE_21__["DishinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
                _modules_user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _modules_system_system_module__WEBPACK_IMPORTED_MODULE_6__["SystemModule"]
            ],
            providers: [
                // { provide: LocationStrategy, useClass: HashLocationStrategy },
                _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <ul>\r\n        <li> \r\n            <i class=\"glyphicon glyphicon-copyright-mark\"></i><a href=\"https://github.com/twbs/bootstrap\"> GitHub仓库</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://v3.bootcss.com/getting-started/#examples\">实例</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"http://www.youzhan.org\">优站精选</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"https://v3.bootcss.com/about/\">关于</a>\r\n        </li>\r\n    </ul>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 100%;\n  height: 60px;\n  border-top: 2px solid #0092db;\n  background: #323337; }\n  .footer ul {\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .footer ul li {\n      margin: 0 20px;\n      font-size: 16px;\n      color: white; }\n  .footer ul li a:hover {\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXGFuZ3VsYXJcXEFuZ3VsYXJcXGNsaS1yb3V0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0Isb0JBQW1CLEVBZXRCO0VBbkJEO0lBTVEsYUFBWTtJQUNaLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsb0JBQW1CLEVBU3RCO0VBbEJMO01BV1ksZUFBYztNQUNkLGdCQUFlO01BQ2YsYUFBWSxFQUlmO0VBakJUO1FBZWUsYUFBWSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMDA5MmRiO1xyXG4gICAgYmFja2dyb3VuZDogIzMyMzMzNztcclxuICAgIHVse1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav>\n    <img src=\"../../../assets/logo.jpg\" alt=\"\" />\n    <a *ngFor=\"let o of nav\" [routerLink]=\"[ o.path ]\" routerLinkActive=\"active\"><i class=\"glyphicon glyphicon-tasks\" aria-hidden=\"true\"></i> {{o.name}}</a>\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 60px;\n  border-bottom: 2px solid #0092db;\n  background: #563d7c; }\n  .header nav img {\n    margin: 0 71px;\n    height: 58px; }\n  .header nav a {\n    padding: 17px 40px;\n    display: inline-block;\n    font-size: 18px;\n    color: white; }\n  .header nav a i {\n      vertical-align: text-top; }\n  .header nav .active {\n    background: white;\n    color: #563d7c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXGFuZ3VsYXJcXEFuZ3VsYXJcXGNsaS1yb3V0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGlDQUFnQztFQUNoQyxvQkFBbUIsRUF1QnRCO0VBMUJEO0lBT1ksZUFBYztJQUNkLGFBQVksRUFDZjtFQVRUO0lBV1ksbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLGFBQVksRUFLZjtFQW5CVDtNQWlCZ0IseUJBQXdCLEVBQzNCO0VBbEJiO0lBc0JZLGtCQUFpQjtJQUNqQixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwOTJkYjtcclxuICAgIGJhY2tncm91bmQ6ICM1NjNkN2M7XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA3MXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxN3B4IDQwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU2M2Q3YztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.nav = [];
        this.nav = [
            { name: '首页', path: '/home' },
            { name: '新闻', path: '/news' },
            { name: '产品', path: '/goods' },
            { name: '菜品', path: '/dish' },
            { name: '系统', path: '/system' },
            { name: '我的', path: '/user' },
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <menu>\n    <a *ngFor=\"let o of menu\" [routerLink]=\"[ o.path ]\" routerLinkActive=\"active\">{{o.name}} <i class=\"glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></i></a>\n  </menu>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  width: 200px;\n  height: 100%;\n  min-height: 100vh;\n  background: #f0f0f0;\n  border-right: 1px solid #563d7c; }\n  .menu menu {\n    margin: 0;\n    padding: 20px 0 0; }\n  .menu menu a {\n      position: relative;\n      padding-left: 30px;\n      display: block;\n      line-height: 50px;\n      font-size: 16px;\n      color: #563d7c;\n      font-weight: bold;\n      border-bottom: 1px solid white; }\n  .menu menu a i {\n        position: absolute;\n        top: 18px;\n        right: 60px; }\n  .menu menu :hover,\n    .menu menu .active {\n      background: #563d7c;\n      color: white;\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0Q6XFxhbmd1bGFyXFxBbmd1bGFyXFxjbGktcm91dGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsb0JBQThCO0VBQzlCLGdDQUErQixFQTZCbEM7RUFsQ0Q7SUFRUSxVQUFTO0lBQ1Qsa0JBQWlCLEVBd0JwQjtFQWpDTDtNQVlZLG1CQUFrQjtNQUNsQixtQkFBa0I7TUFDbEIsZUFBYztNQUNkLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLGVBQWM7TUFDZCxrQkFBaUI7TUFDakIsK0JBQThCLEVBTWpDO0VBekJUO1FBcUJnQixtQkFBa0I7UUFDbEIsVUFBUztRQUNULFlBQVcsRUFDZDtFQXhCYjs7TUE2Qlksb0JBQW1CO01BQ25CLGFBQVk7TUFDWixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU2M2Q3YztcclxuXHJcbiAgICBtZW51IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTYzZDdjO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3ZlcixcclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU2M2Q3YztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        console.log(this.menu);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "menu", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/system/system.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/system/system.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"user\">\n<h1>自定义模块中的user根组件 -> system works!</h1>\n\n<pre>\n  <code>\n   我是自定义模块中的user根组件\n  </code>\n</pre>\n</section>\n\n"

/***/ }),

/***/ "./src/app/modules/system/system.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/system/system.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3lzdGVtL3N5c3RlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/system/system.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/system/system.component.ts ***!
  \****************************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SystemComponent = /** @class */ (function () {
    function SystemComponent() {
    }
    SystemComponent.prototype.ngOnInit = function () {
    };
    SystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system',
            template: __webpack_require__(/*! ./system.component.html */ "./src/app/modules/system/system.component.html"),
            styles: [__webpack_require__(/*! ./system.component.scss */ "./src/app/modules/system/system.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SystemComponent);
    return SystemComponent;
}());



/***/ }),

/***/ "./src/app/modules/system/system.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/system/system.module.ts ***!
  \*************************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system.component */ "./src/app/modules/system/system.component.ts");




var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"]],
            exports: [
                _system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SystemModule);
    return SystemModule;
}());



/***/ }),

/***/ "./src/app/modules/user/components/address/address.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/user/components/address/address.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  address works!\n  ng g c modules/user/components/address\n</p>\n"

/***/ }),

/***/ "./src/app/modules/user/components/address/address.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/user/components/address/address.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user/components/address/address.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/components/address/address.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/modules/user/components/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/modules/user/components/address/address.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/components/wallet/wallet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/components/wallet/wallet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  wallet works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/user/components/wallet/wallet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/components/wallet/wallet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9jb21wb25lbnRzL3dhbGxldC93YWxsZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/user/components/wallet/wallet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/user/components/wallet/wallet.component.ts ***!
  \********************************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WalletComponent = /** @class */ (function () {
    function WalletComponent() {
    }
    WalletComponent.prototype.ngOnInit = function () {
    };
    WalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/modules/user/components/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/modules/user/components/wallet/wallet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/services/storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/user/services/storage.service.ts ***!
  \**********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/modules/user/user.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/user/user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"system\">\n  <h1>自定义模块中的user根组件 -> user works!</h1>\n\n  <pre>\n    <code>\n      // 创建自定义模块\n      ng g m modules/user\n\n      // 创建自定义模块中的 公共服务\n      ng g s modules/user/services/storage\n\n      // 创建自定义模块中的 组件\n      ng g s modules/user/components/menu\n\n      // 创建自定义模块中的 页面\n      ng g s modules/user/views/order\n\n    </code>\n  </pre>\n\n  <app-address></app-address>\n  <app-order></app-order>\n  <app-wallet></app-wallet>\n\n</section>"

/***/ }),

/***/ "./src/app/modules/user/user.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/user/user.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user/user.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/user/user.component.ts ***!
  \************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/modules/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/modules/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/modules/user/services/storage.service.ts");
/* harmony import */ var _components_address_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/address/address.component */ "./src/app/modules/user/components/address/address.component.ts");
/* harmony import */ var _components_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wallet/wallet.component */ "./src/app/modules/user/components/wallet/wallet.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "./src/app/modules/user/user.component.ts");
/* harmony import */ var _views_order_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/order/order.component */ "./src/app/modules/user/views/order/order.component.ts");
/* harmony import */ var _views_collect_collect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/collect/collect.component */ "./src/app/modules/user/views/collect/collect.component.ts");



// 自定义模块中的公共服务模块

// 公共组件


// 根页面组件

// 页面组件


var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // user模块中的页面、组件
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _components_address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"],
                _views_order_order_component__WEBPACK_IMPORTED_MODULE_7__["OrderComponent"],
                _components_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__["WalletComponent"], _views_collect_collect_component__WEBPACK_IMPORTED_MODULE_8__["CollectComponent"]
            ],
            // 向外暴露模块、页面、组件，这样在根组件等就可以引用了
            exports: [
                _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _components_address_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            // 引入模块
            providers: [
                _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/modules/user/views/collect/collect.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user/views/collect/collect.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  collect works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/user/views/collect/collect.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user/views/collect/collect.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci92aWV3cy9jb2xsZWN0L2NvbGxlY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/user/views/collect/collect.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user/views/collect/collect.component.ts ***!
  \*****************************************************************/
/*! exports provided: CollectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectComponent", function() { return CollectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollectComponent = /** @class */ (function () {
    function CollectComponent() {
    }
    CollectComponent.prototype.ngOnInit = function () {
    };
    CollectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collect',
            template: __webpack_require__(/*! ./collect.component.html */ "./src/app/modules/user/views/collect/collect.component.html"),
            styles: [__webpack_require__(/*! ./collect.component.scss */ "./src/app/modules/user/views/collect/collect.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollectComponent);
    return CollectComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/views/order/order.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/views/order/order.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/user/views/order/order.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/views/order/order.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci92aWV3cy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user/views/order/order.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/views/order/order.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/modules/user/views/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/modules/user/views/order/order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/services/ajax.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/ajax.service.ts ***!
  \******************************************/
/*! exports provided: AjaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxService", function() { return AjaxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");




var AjaxService = /** @class */ (function () {
    function AjaxService(http, api) {
        this.http = http;
        this.api = api;
    }
    AjaxService.prototype.get = function (o) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.api.__URL__ + o.api).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    AjaxService.prototype.post = function (o) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.api.__URL__ + o.api, {}).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ;
    AjaxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AjaxService);
    return AjaxService;
}());

;


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApiService = /** @class */ (function () {
    function ApiService() {
        this.__URL__ = 'http://a.itying.com/';
    }
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/views/dish/dish.component.html":
/*!************************************************!*\
  !*** ./src/app/views/dish/dish.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"views dish\">\n\n  <app-menu [menu]=\"menu\"></app-menu>\n\n  <div class=\"main\">\n\n    <router-outlet></router-outlet>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/dish/dish.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/dish/dish.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rpc2gvZGlzaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/dish/dish.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/dish/dish.component.ts ***!
  \**********************************************/
/*! exports provided: DishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishComponent", function() { return DishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");



var DishComponent = /** @class */ (function () {
    function DishComponent(ajax) {
        this.ajax = ajax;
        this.menu = [];
    }
    DishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ajax.get({ api: 'api/productlist' }).then(function (res) {
            console.log(res);
            res.result.forEach(function (item) {
                _this.menu.push(
                // { name: item.title, path: '/dish/dishlist' }
                );
            });
            _this.menu = [{ name: '菜单列表', path: '/dish/dishlist' }, { name: '菜单详情', path: '/dish/dishinfo' }];
        }, function (err) {
            console.log('API数据请求失败！');
        });
        return;
        this.ajax.post({ api: 'api/productlist' }).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log('API数据请求失败！');
        });
    };
    DishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dish',
            template: __webpack_require__(/*! ./dish.component.html */ "./src/app/views/dish/dish.component.html"),
            styles: [__webpack_require__(/*! ./dish.component.scss */ "./src/app/views/dish/dish.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"]])
    ], DishComponent);
    return DishComponent;
}());



/***/ }),

/***/ "./src/app/views/dish/dishinfo/dishinfo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/dish/dishinfo/dishinfo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"dishinfo\">\n  <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <img [src]=\"ajax.api.__URL__ + info.img_url\" class=\"img-thumbnail\" />\n        <div class=\"carousel-caption\">\n          1\n        </div>\n      </div>\n      <div class=\"item\">\n        <img [src]=\"ajax.api.__URL__ + info.img_url\" class=\"img-thumbnail\" />\n        <div class=\"carousel-caption\">\n          2\n        </div>\n      </div>\n      <div class=\"item\">\n        <img [src]=\"ajax.api.__URL__ + info.img_url\" class=\"img-thumbnail\" />\n        <div class=\"carousel-caption\">\n          3\n        </div>\n      </div>\n    </div>\n\n    <!-- Controls -->\n    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <div class=\"detail\">\n\n    <div class=\"jumbotron\">\n      <h1>{{info.title}}</h1>\n      <hr>\n      <h4 class=\"price\">\n        <i class=\"glyphicon glyphicon-bullhorn\"></i>\n        促销价：￥{{info.price | number:'1.2' }}元\n        <span><i class=\"glyphicon glyphicon-thumbs-down\"></i> 原价：<s>￥{{info.price * 1.25 | number:'1.2' }}元</s></span>\n      </h4>\n      <ul class=\"bg-info\">\n        <li>菜品类别：{{info.catename}}</li>\n        <li>菜品库存：{{info.num}}</li>\n        <li>菜品编号：{{info.product_bar_code}}</li>\n        <li>菜品描述：{{info.description}}</li>\n      </ul>\n      <br>\n      <button type=\"button\" class=\"btn btn-success btn-lg\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n        <i class=\"glyphicon glyphicon-send\"></i> 立即购买</button>\n\n      <button type=\"button\" class=\"btn btn-danger btn-lg\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n        <i class=\"glyphicon glyphicon-shopping-cart\"></i>加入购物车</button>\n    </div>\n\n    <div class=\"panel panel-warning\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">菜品详情：</h3>\n      </div>\n      <div class=\"panel-body\">\n        <article [innerHTML]=\"info.content\"></article>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n              aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\" id=\"exampleModalLabel\">订单信息：</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"recipient-name\" class=\"control-label\">最终价格:</label>\n              <input type=\"text\" class=\"form-control\" [value]=\"info.price | number:'1.2'\" disabled id=\"recipient-name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name-text\" class=\"control-label\">您的姓名:</label>\n              <input type=\"text\" class=\"form-control\" id=\"name-text\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"mobile-text\" class=\"control-label\">联系电话:</label>\n              <input type=\"text\" class=\"form-control\" id=\"mobile-name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"message-text\" class=\"control-label\">收货地址:</label>\n              <textarea class=\"form-control\" id=\"message-text\"></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取 消</button>\n          <button type=\"button\" class=\"btn btn-primary\">确 定</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</section>"

/***/ }),

/***/ "./src/app/views/dish/dishinfo/dishinfo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/dish/dishinfo/dishinfo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dishinfo .carousel {\n  margin: auto;\n  position: relative; }\n  .dishinfo .carousel .carousel-inner img {\n    width: 100%;\n    min-width: 800px;\n    max-height: 500px; }\n  .dishinfo .detail {\n  margin-top: 50px; }\n  .dishinfo .detail .jumbotron {\n    padding: 30px; }\n  .dishinfo .detail .jumbotron h1 {\n      color: #00bd00;\n      letter-spacing: 12px; }\n  .dishinfo .detail .jumbotron h4 {\n      font-size: 20px;\n      color: #ff0076;\n      line-height: 50px; }\n  .dishinfo .detail .jumbotron h4 span {\n        padding-left: 30px;\n        font-size: 16px;\n        color: gray; }\n  .dishinfo .detail .jumbotron ul {\n      padding: 20px; }\n  .dishinfo .detail .jumbotron ul li {\n        color: #666;\n        font-size: 16px;\n        line-height: 32px; }\n  .dishinfo .detail .jumbotron button {\n      margin-right: 20px; }\n  .dishinfo .detail .panel-body {\n    line-height: 40px;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGlzaC9kaXNoaW5mby9EOlxcYW5ndWxhclxcQW5ndWxhclxcY2xpLXJvdXRlci9zcmNcXGFwcFxcdmlld3NcXGRpc2hcXGRpc2hpbmZvXFxkaXNoaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGFBQVk7RUFDWixtQkFBa0IsRUFRckI7RUFYTDtJQU1nQixZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQUNwQjtFQVRiO0VBY1EsaUJBQWdCLEVBa0NuQjtFQWhETDtJQWdCWSxjQUFhLEVBMkJoQjtFQTNDVDtNQWtCZ0IsZUFBYztNQUNkLHFCQUFvQixFQUN2QjtFQXBCYjtNQXNCZ0IsZ0JBQWU7TUFDZixlQUFjO01BQ2Qsa0JBQWlCLEVBTXBCO0VBOUJiO1FBMEJvQixtQkFBa0I7UUFDbEIsZ0JBQWU7UUFDZixZQUFXLEVBQ2Q7RUE3QmpCO01BaUNnQixjQUFhLEVBTWhCO0VBdkNiO1FBbUNvQixZQUFXO1FBQ1gsZ0JBQWU7UUFDZixrQkFBaUIsRUFDcEI7RUF0Q2pCO01BeUNnQixtQkFBa0IsRUFDckI7RUExQ2I7SUE2Q1ksa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGlzaC9kaXNoaW5mby9kaXNoaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNoaW5mbyB7XHJcbiAgICAuY2Fyb3VzZWwge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBiZDAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwNzY7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtYm9keXtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/dish/dishinfo/dishinfo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/dish/dishinfo/dishinfo.component.ts ***!
  \***********************************************************/
/*! exports provided: DishinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishinfoComponent", function() { return DishinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");




var DishinfoComponent = /** @class */ (function () {
    function DishinfoComponent(aRouter, ajax) {
        this.aRouter = aRouter;
        this.ajax = ajax;
    }
    DishinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aRouter.params.subscribe(function (par) {
            if (par.id) {
                _this.ajax.get({ api: "api/productcontent?id=" + par.id }).then(function (res) {
                    _this.info = res.result[0];
                });
            }
        });
    };
    DishinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dishinfo',
            template: __webpack_require__(/*! ./dishinfo.component.html */ "./src/app/views/dish/dishinfo/dishinfo.component.html"),
            styles: [__webpack_require__(/*! ./dishinfo.component.scss */ "./src/app/views/dish/dishinfo/dishinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"]])
    ], DishinfoComponent);
    return DishinfoComponent;
}());



/***/ }),

/***/ "./src/app/views/dish/dishlist/dishlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/dish/dishlist/dishlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"dishlist\">\n  <dl *ngFor=\"let o of list\">\n    <dt>\n      <h4>{{o.title}}</h4>\n    </dt>\n    <dd *ngFor=\"let o of o.list\">\n      <a [routerLink]=\"[ '/dish/dishinfo', o._id ]\">\n        <img [src]=\"ajax.api.__URL__ + o.img_url\" alt=\"\" class=\"img-thumbnail\" />\n        <p>￥：{{o.price}}</p>\n        <h4>{{o.title}}</h4>\n      </a>\n    </dd>\n  </dl>\n</section>"

/***/ }),

/***/ "./src/app/views/dish/dishlist/dishlist.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/dish/dishlist/dishlist.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dishlist dl dt h4 {\n  color: #555;\n  line-height: 40px;\n  font-weight: bold;\n  border-bottom: 1px solid #563d7c; }\n\n.dishlist dl dd {\n  margin: 20px;\n  padding: 10px;\n  display: inline-block;\n  border: 1px solid white;\n  border-radius: 3px; }\n\n.dishlist dl dd img {\n    width: 160px;\n    height: 160px; }\n\n.dishlist dl dd p {\n    font-weight: bold;\n    color: #09b509;\n    line-height: 40px; }\n\n.dishlist dl dd h3 {\n    font-weight: 500; }\n\n.dishlist dl dd:hover {\n  border: 1px solid #00c200;\n  box-shadow: 0 0 8px 0 #d1d1d1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGlzaC9kaXNobGlzdC9EOlxcYW5ndWxhclxcQW5ndWxhclxcY2xpLXJvdXRlci9zcmNcXGFwcFxcdmlld3NcXGRpc2hcXGRpc2hsaXN0XFxkaXNobGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtnQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixpQ0FBZ0MsRUFDbkM7O0FBVGI7RUFZWSxhQUFZO0VBQ1osY0FBYTtFQUNiLHNCQUFxQjtFQUNyQix3QkFBdUI7RUFDdkIsbUJBQWtCLEVBYXJCOztBQTdCVDtJQWtCZ0IsYUFBWTtJQUNaLGNBQWEsRUFDaEI7O0FBcEJiO0lBc0JnQixrQkFBaUI7SUFDakIsZUFBYztJQUNkLGtCQUFpQixFQUNwQjs7QUF6QmI7SUEyQmUsaUJBQWdCLEVBQ2xCOztBQTVCYjtFQStCWSwwQkFBZ0M7RUFDaEMsOEJBQXdDLEVBQzNDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZGlzaC9kaXNobGlzdC9kaXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNobGlzdCB7XHJcbiAgICBkbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHQge1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzU2M2Q3YztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzA5YjUwOTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRkOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE5NCwgMCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2IoMjA5LCAyMDksIDIwOSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/dish/dishlist/dishlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/dish/dishlist/dishlist.component.ts ***!
  \***********************************************************/
/*! exports provided: DishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishlistComponent", function() { return DishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ajax.service */ "./src/app/services/ajax.service.ts");



var DishlistComponent = /** @class */ (function () {
    function DishlistComponent(ajax) {
        this.ajax = ajax;
        this.list = [];
    }
    DishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ajax.get({ api: 'api/productlist' }).then(function (res) {
            _this.list = res.result;
        }, function (err) {
            console.log('API数据请求失败！');
        });
    };
    DishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dishlist',
            template: __webpack_require__(/*! ./dishlist.component.html */ "./src/app/views/dish/dishlist/dishlist.component.html"),
            styles: [__webpack_require__(/*! ./dishlist.component.scss */ "./src/app/views/dish/dishlist/dishlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"]])
    ], DishlistComponent);
    return DishlistComponent;
}());



/***/ }),

/***/ "./src/app/views/goods/goods-info/goods-info.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/goods/goods-info/goods-info.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  goods-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/goods/goods-info/goods-info.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/goods/goods-info/goods-info.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dvb2RzL2dvb2RzLWluZm8vZ29vZHMtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/goods/goods-info/goods-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/goods/goods-info/goods-info.component.ts ***!
  \****************************************************************/
/*! exports provided: GoodsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsInfoComponent", function() { return GoodsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodsInfoComponent = /** @class */ (function () {
    function GoodsInfoComponent() {
    }
    GoodsInfoComponent.prototype.ngOnInit = function () {
    };
    GoodsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goods-info',
            template: __webpack_require__(/*! ./goods-info.component.html */ "./src/app/views/goods/goods-info/goods-info.component.html"),
            styles: [__webpack_require__(/*! ./goods-info.component.scss */ "./src/app/views/goods/goods-info/goods-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoodsInfoComponent);
    return GoodsInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/goods/goods-list/goods-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/goods/goods-list/goods-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  goods-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/goods/goods-list/goods-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/goods/goods-list/goods-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dvb2RzL2dvb2RzLWxpc3QvZ29vZHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/goods/goods-list/goods-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/goods/goods-list/goods-list.component.ts ***!
  \****************************************************************/
/*! exports provided: GoodsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsListComponent", function() { return GoodsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodsListComponent = /** @class */ (function () {
    function GoodsListComponent() {
    }
    GoodsListComponent.prototype.ngOnInit = function () {
    };
    GoodsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goods-list',
            template: __webpack_require__(/*! ./goods-list.component.html */ "./src/app/views/goods/goods-list/goods-list.component.html"),
            styles: [__webpack_require__(/*! ./goods-list.component.scss */ "./src/app/views/goods/goods-list/goods-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoodsListComponent);
    return GoodsListComponent;
}());



/***/ }),

/***/ "./src/app/views/goods/goods.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/goods/goods.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"views goods\">\n\n  <app-menu [menu]=\"menu\"></app-menu>\n\n  <div class=\"main\">\n\n    <router-outlet></router-outlet>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/goods/goods.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/goods/goods.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dvb2RzL2dvb2RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/goods/goods.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/goods/goods.component.ts ***!
  \************************************************/
/*! exports provided: GoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsComponent", function() { return GoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodsComponent = /** @class */ (function () {
    function GoodsComponent() {
        this.menu = [];
        this.menu = [
            { name: '产品列表', path: '/goods/goodslist' },
            { name: '产品详情', path: '/goods/goodsinfo' }
        ];
    }
    GoodsComponent.prototype.ngOnInit = function () {
    };
    GoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goods',
            template: __webpack_require__(/*! ./goods.component.html */ "./src/app/views/goods/goods.component.html"),
            styles: [__webpack_require__(/*! ./goods.component.scss */ "./src/app/views/goods/goods.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoodsComponent);
    return GoodsComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"views home\">\n  <!-- <div class=\"menu\">\n    <menu>\n      <a *ngFor=\"let o of menu\" [routerLink]=\"[ o.path ]\" routerLinkActive=\"active\">{{o.name}}</a>\n    </menu>\n  </div> -->\n\n  <div class=\"main\">\n    <div class=\"jumbotron masthead\">\n      <div class=\"container\">\n        <h1>Bootstrap</h1>\n        <h2>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</h2>\n        <p class=\"masthead-button-links\">\n          <a class=\"btn btn-lg btn-primary btn-shadow\" href=\"https://v3.bootcss.com/\" target=\"_blank\" role=\"button\"\n            onclick=\"_hmt.push(['_trackEvent', 'masthead', 'click', 'masthead-Bootstrap3中文文档'])\">Bootstrap3中文文档(v3.3.7)</a>\n        </p>\n        <ul class=\"masthead-links\">\n          <li>\n            <a href=\"https://v2.bootcss.com/\" target=\"_blank\" role=\"button\"\n              onclick=\"_hmt.push(['_trackEvent', 'masthead', 'click', 'masthead-Bootstrap2中文文档'])\">Bootstrap2中文文档(v2.3.2)</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  flex: 1;\n  margin-top: 63px; }\n  .main .jumbotron {\n    position: relative;\n    padding: 200px;\n    color: #fff;\n    text-align: center;\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.075);\n    background: #020031;\n    background: linear-gradient(45deg, #020031, #6d3353);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#020031\",endColorstr=\"#6d3353\",GradientType=1);\n    box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.2), inset 0 -3px 7px rgba(0, 0, 0, 0.2); }\n  .main .jumbotron a {\n    color: #fff;\n    color: rgba(255, 255, 255, 0.5);\n    transition: all 0.2s ease-in-out; }\n  .main .jumbotron a:hover {\n    color: #fff;\n    text-shadow: 0 0 10px rgba(255, 255, 255, 0.25); }\n  .main .jumbotron .container {\n    position: relative;\n    z-index: 2; }\n  .main .jumbotron:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: url('bs-docs-masthead-pattern.png') repeat 50%;\n    opacity: 0.4; }\n  .main .jumbotron .btn-primary.btn-shadow {\n    box-shadow: inset 0 -4px 0 #23527c;\n    border: 0;\n    color: #fff; }\n  .main .jumbotron .btn-lg.btn-shadow {\n    padding: 13px 35px 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9EOlxcYW5ndWxhclxcQW5ndWxhclxcY2xpLXJvdXRlci9zcmNcXGFwcFxcdmlld3NcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxRQUFPO0VBS1AsaUJBQWdCLEVBcURuQjtFQTVERDtJQVVRLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsWUFBVztJQUNYLG1CQUFrQjtJQUNsQix5RUFBd0U7SUFDeEUsb0JBQW1CO0lBQ25CLHFEQUFvRDtJQUNwRCxpSEFBZ0g7SUFDaEgsb0ZBQW1GLEVBQ3RGO0VBbkJMO0lBc0JRLFlBQVc7SUFDWCxnQ0FBNkI7SUFDN0IsaUNBQWdDLEVBQ25DO0VBekJMO0lBNEJRLFlBQVc7SUFDWCxnREFBNkMsRUFDaEQ7RUE5Qkw7SUFpQ1EsbUJBQWtCO0lBQ2xCLFdBQVUsRUFDYjtFQW5DTDtJQXNDUSxZQUFXO0lBQ1gsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sU0FBUTtJQUNSLFVBQVM7SUFDVCxRQUFPO0lBQ1AsMkRBQXdFO0lBQ3hFLGFBQVksRUFDZjtFQS9DTDtJQW1EWSxtQ0FBa0M7SUFDbEMsVUFBUztJQUNULFlBQVcsRUFDZDtFQXREVDtJQXlEWSx3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDYzcHg7XHJcblxyXG4gICAgLmp1bWJvdHJvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSwgMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAyMDAzMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMjAwMzEsICM2ZDMzNTMpO1xyXG4gICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjMDIwMDMxXCIsZW5kQ29sb3JzdHI9XCIjNmQzMzUzXCIsR3JhZGllbnRUeXBlPTEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IDAgLTNweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5qdW1ib3Ryb24gYSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmp1bWJvdHJvbiBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAuanVtYm90cm9uOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9icy1kb2NzLW1hc3RoZWFkLXBhdHRlcm4ucG5nKSByZXBlYXQgNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICAuanVtYm90cm9uIHtcclxuICAgICAgICAuYnRuLXByaW1hcnkuYnRuLXNoYWRvdyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAwICMyMzUyN2M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWxnLmJ0bi1zaGFkb3cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDM1cHggMTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.menu = [];
        this.menu = [
            { name: '新闻中心', path: '/news' },
            { name: '产品实例', path: '/goods' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/news/news-info/news-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/news/news-info/news-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  news-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/news/news-info/news-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/news/news-info/news-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ld3MvbmV3cy1pbmZvL25ld3MtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/news/news-info/news-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/news/news-info/news-info.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsInfoComponent", function() { return NewsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsInfoComponent = /** @class */ (function () {
    function NewsInfoComponent() {
    }
    NewsInfoComponent.prototype.ngOnInit = function () {
    };
    NewsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-info',
            template: __webpack_require__(/*! ./news-info.component.html */ "./src/app/views/news/news-info/news-info.component.html"),
            styles: [__webpack_require__(/*! ./news-info.component.scss */ "./src/app/views/news/news-info/news-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsInfoComponent);
    return NewsInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/news/news-list/news-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/news/news-list/news-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  news-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/news/news-list/news-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/news/news-list/news-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/news/news-list/news-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/news/news-list/news-list.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsListComponent = /** @class */ (function () {
    function NewsListComponent() {
    }
    NewsListComponent.prototype.ngOnInit = function () {
    };
    NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/views/news/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.scss */ "./src/app/views/news/news-list/news-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/views/news/news.component.html":
/*!************************************************!*\
  !*** ./src/app/views/news/news.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"views news\">\n  \n  <app-menu [menu]=\"menu\"></app-menu>\n\n  <div class=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/views/news/news.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/news/news.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.menu = [];
        this.menu = [
            { name: '新闻列表', path: '/news/newslist' },
            { name: '新闻详情', path: '/news/newsinfo' }
        ];
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/views/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/views/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\Angular\cli-router\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map