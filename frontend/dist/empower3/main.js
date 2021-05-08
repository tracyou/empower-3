(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tessa\Documents\Git\empower-3\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(username, password, userType, title, description) {
        this.username = username;
        this.password = password;
        this.userType = userType;
        this.title = title;
        this.description = description;
    }
}


/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SignupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Your password should contain at least:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " 8 characters,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " one digit,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " one upper-case,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " one special character (ex: .?!@#$%^&*_=+-).");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isUnique = false;
        this.pattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.?!@#$%^&*_=+-]).{8,}$');
    }
    ngOnInit() {
        this.usersList = this.userService.users;
        console.log(this.usersList);
    }
    newUser() {
        return new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"](this.username, this.password, this.userType, this.title, this.description);
    }
    onSignUp() {
        this.isUsernameUnique();
        if (this.isUnique) {
            if (this.isFilled()) {
                if (!this.pattern.test(this.password)) {
                    alert('Password should be validated');
                }
                else {
                    if (this.confirmPassword === this.password) {
                        const newUser = this.newUser();
                        this.userService.save(newUser);
                        this.navigate();
                    }
                    else {
                        alert('Passwords do not match');
                    }
                }
            }
            else {
                console.log('All fields must be filled');
                alert('All fields must be filled');
            }
        }
        else {
            alert('This username is already taken, try another one.');
        }
    }
    isFilled() {
        return this.username && this.password && this.confirmPassword && this.userType && this.title && this.description;
    }
    isUsernameUnique() {
        for (const user of this.usersList) {
            if (user.username === this.username) {
                console.log('username exists');
                this.isUnique = false;
                break;
            }
            else {
                console.log('username does not exist');
                this.isUnique = true;
            }
        }
    }
    navigate() {
        if (this.userType === 'I am a local initiative') {
            this.router.navigate(['/initiative']);
        }
        else {
            this.router.navigate(['/authority']);
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], inputs: { username: "username", password: "password", confirmPassword: "confirmPassword", userType: "userType", title: "title", description: "description" }, decls: 20, vars: 17, consts: [[1, "wrapper"], ["id", "formContent"], [3, "ngSubmit"], ["type", "text", "name", "username", "placeholder", "new username", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "name", "password", "id", "password", "placeholder", "password", "pattern", "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.?!@#$%^&*_=+-]).{8,}$", 3, "ngModel", "ngModelChange"], ["pwField", "ngModel"], [4, "ngIf"], ["type", "text", "name", "confirmPassword", "placeholder", "confirm password", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "exampleFormControlSelect1", 2, "padding-top", "7px", "color", "dimgrey"], ["id", "exampleFormControlSelect1", 1, "form-control", 2, "width", "380px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "name", "title", "placeholder", "title of initiative or authority", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "name", "description", "placeholder", "brief description", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", "value", "Sign Up"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { return ctx.onSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_6_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SignupComponent_div_8_Template, 10, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_9_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " What type of user are you? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_12_listener($event) { return ctx.userType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "I am a local initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "I am a local authority");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_18_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmPassword)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userType)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding-top: 40px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%] {\r\n  background-color: #009a67;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.passwordValidation[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 90%;\r\n  padding: 0;\r\n  height: 0;\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n  box-sizing: border-box;\r\n  opacity: 1;\r\n  overflow: hidden;\r\n  transition: height 300ms ease-in-out,\r\n              opacity 300ms ease-in-out;\r\n}\r\n\r\n.passwordValidation.active[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  padding: 10px;\r\n  height: 160px;\r\n  overflow: visible;\r\n}\r\n\r\n.passwordValidation[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin: 15px 10px;\r\n  color: red;\r\n}\r\n\r\n.passwordValidation[_ngcontent-%COMP%]    > div.active[_ngcontent-%COMP%] {\r\n  color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUVFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBRWpCLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZiw4Q0FBOEM7RUFFOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUl6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsSUFBSTs7QUFFSjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCO3VDQUNxQztBQUN2Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhNjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qOyovXHJcblxyXG4ucGFzc3dvcmRWYWxpZGF0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnBhc3N3b3JkVmFsaWRhdGlvbi5hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucGFzc3dvcmRWYWxpZGF0aW9uID4gZGl2IHtcclxuICBtYXJnaW46IDE1cHggMTBweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucGFzc3dvcmRWYWxpZGF0aW9uID4gZGl2LmFjdGl2ZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5IG2":
/*!**************************************!*\
  !*** ./src/app/models/initiative.ts ***!
  \**************************************/
/*! exports provided: Initiative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Initiative", function() { return Initiative; });
class Initiative {
    constructor(city, collaboration, date, gaolCreate, gaolFootprint, gaolGreen, gaolImprove, gaolReduce, gridExpertise1, gridExpertise2, gridExpertise3, gridRadios, gridRadios2, gridRadios3, gridRadios4, inputEmail, inputPhone, inputWebsite, name, selectedTheme, state, zip) {
        this.city = city;
        this.collaboration = collaboration;
        this.date = date;
        this.gaolCreate = gaolCreate;
        this.gaolFootprint = gaolFootprint;
        this.gaolGreen = gaolGreen;
        this.gaolImprove = gaolImprove;
        this.gaolReduce = gaolReduce;
        this.gridExpertise1 = gridExpertise1;
        this.gridExpertise2 = gridExpertise2;
        this.gridExpertise3 = gridExpertise3;
        this.gridRadios = gridRadios;
        this.gridRadios2 = gridRadios2;
        this.gridRadios3 = gridRadios3;
        this.gridRadios4 = gridRadios4;
        this.inputEmail = inputEmail;
        this.inputPhone = inputPhone;
        this.inputWebsite = inputWebsite;
        this.name = name;
        this.selectedTheme = selectedTheme;
        this.state = state;
        this.zip = zip;
    }
}


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 5, vars: 0, consts: [[1, "error-text"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An error has occured!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We're sorry. The page you are looking for cannot be found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".error-text[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImVycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItdGV4dHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:8080'
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 39, vars: 0, consts: [["role", "main"], [1, "jumbotron"], [1, "container"], [1, "display-3"], [1, "row"], [1, "col-md-4"], ["href", "#", "role", "button", "routerLink", "/initiative", 1, "btn", "btn-primary", "btn-lg"], ["href", "#", "role", "button", "routerLink", "/authority", 1, "btn", "btn-primary", "btn-lg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EMPOWER!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This toolkit is here to support local authorities and - initiatives in meeting their city's energy transision goals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " It aims to align the city strategies with the local initiatives wishes by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inviting Local Authorities to reflect and to evaluate their own strategies and plans.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Structuring the existing information about on-going programs and projects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Providing an overview of what's already happening in the city. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Facilitating the setting-up and scaling-up of Local Initiatives, injecting support from the Local Authorities when and where needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Offering advice from the EMPOWER partners. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Local Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Are you a Local Initiative? Press the button for more info!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "View details \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Local Authority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Are you a Local Authority? Press the button for more info!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View details \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "E+af":
/*!*************************************************************************!*\
  !*** ./src/app/components/local-authority/local-authority.component.ts ***!
  \*************************************************************************/
/*! exports provided: LocalAuthorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAuthorityComponent", function() { return LocalAuthorityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class LocalAuthorityComponent {
    constructor() { }
    ngOnInit() {
    }
    onSubmitClick() {
        confirm('Your answers are saved!');
    }
}
LocalAuthorityComponent.ɵfac = function LocalAuthorityComponent_Factory(t) { return new (t || LocalAuthorityComponent)(); };
LocalAuthorityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalAuthorityComponent, selectors: [["app-local-authority"]], decls: 56, vars: 0, consts: [[1, "row", "mt-5"], [1, "col-md-9", "mx-auto"], [1, "card", "mt-3", 3, "ngSubmit"], [1, "card-body"], [1, "form"], [1, "form-item"], ["type", "checkbox"], [1, "form-group"], ["for", "exampleFormControlTextarea2"], ["id", "exampleFormControlTextarea2", "rows", "3", 1, "form-control"], ["for", "name"], ["id", "name", "rows", "3", 1, "form-control"], ["for", "label"], ["id", "label", "rows", "3", 1, "form-control"], ["for", "description"], ["id", "description", "rows", "3", 1, "form-control"], ["for", "helpdescription"], ["id", "helpdescription", "rows", "3", 1, "form-control"], ["type", "submit", "id", "sumbitButton", 1, "btn", "btn-secondary"]], template: function LocalAuthorityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Local Authority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LocalAuthorityComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "STRATEGY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "List the high level strategies that your city is following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sustainable Deelopment Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "The Paris Agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "STRUCTURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Which programs does your project contribute to?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "TOOLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "List the on-going or in development tools that your city is using to achieve the aforementioned objectives. in which domail do they fall? Label!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Example textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "What do you need help with? Describe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "help description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".form[_ngcontent-%COMP%] {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n#sumbitButton[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  align-self: center;\r\n  margin: 20px;\r\n  background-color: #009a67;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLWF1dGhvcml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImxvY2FsLWF1dGhvcml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jc3VtYml0QnV0dG9uIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YTY3O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "INea":
/*!*****************************************************************!*\
  !*** ./src/app/components/inspiration/inspiration.component.ts ***!
  \*****************************************************************/
/*! exports provided: InspirationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspirationComponent", function() { return InspirationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class InspirationComponent {
    constructor() { }
    ngOnInit() {
    }
}
InspirationComponent.ɵfac = function InspirationComponent_Factory(t) { return new (t || InspirationComponent)(); };
InspirationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InspirationComponent, selectors: [["app-inspiration"]], decls: 128, vars: 0, consts: [[1, "container", 2, "padding-top", "30px"], [1, "row"], [1, "col-2"], [1, "form-group"], ["id", "inputTools", 1, "form-control"], ["selected", ""], ["id", "inputThemes", 1, "form-control"], ["id", "inputLocation", 1, "form-control"], ["id", "inputLanguage", 1, "form-control"], ["type", "button", "id", "filterButton", 1, "btn-lg", "btn-success"], [1, "row", 2, "padding-top", "5px"], [1, "col-3"], [1, "card"], ["src", "...", "alt", "Picture of Initiative", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary"]], template: function InspirationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tools:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Video Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Theme:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Heating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Solar Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Natural Gas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Public Part.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Water Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Belgium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Denmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Dutch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "French");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Danish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Example Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "A quick introduction about the initiative here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Learn more!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Example Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "A quick introduction about the initiative here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Learn more!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Example Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "A quick introduction about the initiative here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Learn more!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Example Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "A quick introduction about the initiative here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Learn more!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Example Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "A quick introduction about the initiative here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Learn more!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Example Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "A quick introduction about the initiative here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Learn more!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".col-3[_ngcontent-%COMP%]{\r\n  padding-top : 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BpcmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiaW5zcGlyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtM3tcclxuICBwYWRkaW5nLXRvcCA6IDE1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "credit to EMPOWER 2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  background-color: #26272b;\r\n  color: white;\r\n  position: absolute;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjcyYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "QDnW":
/*!**************************************************************************!*\
  !*** ./src/app/components/local-initiative/profile/profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 62, vars: 0, consts: [[1, "row", "mt-5"], [1, "col-md-9", "mx-auto"], [1, "text-left"], [1, "card", "mt-3"], [1, "card-body"], [1, "row"], [1, "col"], [1, "form-group", "row"], [1, "form-group", "col"], [1, "form-group"], ["type", "button", "id", "editButton", "routerLink", "", 1, "btn", "btn-secondary"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "[Name of Local Initiative]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Location of the Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "[City, State and Zip of the Local Initiative]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date of creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "[Date of creation]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "[Chosen theme]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Project goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "[Chosen goals]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Project Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "[Chosen challenges]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "What type of collaboration do we need?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "[Chosen collaboration type]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Community Expertise:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "[Chosen expertise]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "[Email]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "[Website]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "[Phone number]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RXUy":
/*!************************************************!*\
  !*** ./src/app/services/initiative.service.ts ***!
  \************************************************/
/*! exports provided: InitiativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiativeService", function() { return InitiativeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class InitiativeService {
    constructor(http) {
        this.http = http;
        this.initiativeList = [];
        this.getInitiative().subscribe(posts => {
            this.initiativeList.push(...posts);
        });
    }
    getInitiative() {
        return this.http.get('http://localhost:8080/initiative');
    }
    postInitiatative(initiative) {
        return this.http.post('http://localhost:8080/initiative', initiative);
    }
    save(initiative) {
        const index = this.initiativeList.findIndex((item) => item.inputEmail === initiative.inputEmail);
        if (index < 0) {
            this.postInitiatative(initiative).subscribe(data => {
                this.initiativeList.push(data);
                console.log(data);
                return data;
            });
        }
        return initiative;
    }
}
InitiativeService.ɵfac = function InitiativeService_Factory(t) { return new (t || InitiativeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InitiativeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InitiativeService, factory: InitiativeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'empower3';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".main[_ngcontent-%COMP%] {\r\n  padding: 50px;\r\n  min-height: 97.5vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDk3LjV2aDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "UgjE":
/*!******************************************************************!*\
  !*** ./src/app/components/local-initiative/map/map.component.ts ***!
  \******************************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _models_initiative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/initiative */ "5IG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_initiative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/initiative.service */ "RXUy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["mapRef"];
const _c1 = function () { return { standalone: true }; };
class MapComponent {
    constructor(initiativeService, router) {
        this.initiativeService = initiativeService;
        this.router = router;
        this.loadMap = () => {
            const map = new window['google'].maps.Map(this.mapElement.nativeElement, {
                center: { lat: 52.370216, lng: 4.895168 },
                zoom: 8
            });
            const marker = new window['google'].maps.Marker({
                position: { lat: 52.370216, lng: 4.895168 },
                map,
                title: 'Local Initiative',
                draggable: true,
                animation: window['google'].maps.Animation.DROP,
            });
            const contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="thirdHeading" class="thirdHeading">Local Initiative</h3>' +
                '<div id="bodyContent">' +
                '<p>Information will be displayed here</p>' +
                '</div>' +
                '</div>';
            const infowindow = new window['google'].maps.InfoWindow({
                content: contentString
            });
            marker.addListener('click', () => {
                infowindow.open(map, marker);
            });
        };
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.renderMap();
        this.initiativeList = this.initiativeService.initiativeList;
        console.log(this.initiativeList);
    }
    newInitiative() {
        return new _models_initiative__WEBPACK_IMPORTED_MODULE_0__["Initiative"](this.city, this.state, this.zip, this.name, this.date, this.selectTheme, this.goalReduce, this.goalImprove, this.goalGreen, this.goalCreate, this.goalFootprint, this.gridRadios, this.gridRadios2, this.gridRadios3, this.gridRadios4, this.collaboration, this.gridExpertise1, this.gridExpertise2, this.gridExpertise3, this.inputEmail, this.inputWebsite, this.inputPhone);
    }
    // tslint:disable-next-line:typedef
    renderMap() {
        window['initMap'] = () => {
            this.loadMap();
        };
        if (!window.document.getElementById('google-map-script')) {
            const s = window.document.createElement('script');
            s.id = 'google-map-script';
            s.type = 'text/javascript';
            s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCzfVzdH_CJuh0iTGrmw69Sal9ZWDkT69w&callback=initMap';
            window.document.body.appendChild(s);
        }
        else {
            this.loadMap();
        }
    }
    onClickSubmit() {
        if (this.isFilled()) {
            const newInitiative = this.newInitiative();
            this.initiativeService.save(newInitiative);
            this.router.navigate(['/profileInitiative']);
        }
        else {
            alert('All fields must be filled');
        }
    }
    isFilled() {
        return this.city && this.state && this.zip && this.name && this.date && this.selectTheme && (this.goalReduce || this.goalImprove ||
            this.goalGreen || this.goalCreate || this.goalFootprint) && (this.gridRadios || this.gridRadios2 || this.gridRadios3 ||
            this.gridRadios4) && this.collaboration && (this.gridExpertise1 || this.gridExpertise2 || this.gridExpertise3) && this.inputEmail &&
            this.inputWebsite && this.inputPhone;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_initiative_service__WEBPACK_IMPORTED_MODULE_2__["InitiativeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, inputs: { city: "city", state: "state", zip: "zip", name: "name", date: "date", selectTheme: "selectTheme", goalReduce: "goalReduce", goalImprove: "goalImprove", goalGreen: "goalGreen", goalCreate: "goalCreate", goalFootprint: "goalFootprint", gridRadios: "gridRadios", gridRadios2: "gridRadios2", gridRadios3: "gridRadios3", gridRadios4: "gridRadios4", collaboration: "collaboration", gridExpertise1: "gridExpertise1", gridExpertise2: "gridExpertise2", gridExpertise3: "gridExpertise3", inputEmail: "inputEmail", inputWebsite: "inputWebsite", inputPhone: "inputPhone" }, decls: 128, vars: 28, consts: [[1, "row", "mt-5"], [1, "col-md-9", "mx-auto"], [1, "text-left"], [1, "card", "mt-3", 3, "ngSubmit"], [1, "card-body"], [1, "row"], [1, "col-sm"], [1, "form-group"], [1, "form-row"], [1, "col-7"], ["name", "city", "type", "text", "placeholder", "City", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col"], ["name", "state", "type", "text", "placeholder", "State", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "zip", "type", "text", "placeholder", "Zip", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "name", "type", "text", "id", "initiativeName", "aria-describedby", "nameHelp", "placeholder", "Enter name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "row"], [1, "col-10"], ["name", "date", "type", "date", "id", "date-input", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "selectTheme", "id", "inputState", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["selected", ""], [2, "width", "100%", "height", "400px"], ["mapRef", ""], [1, "form-check"], ["name", "goalReduce", "type", "checkbox", "id", "gridCheck1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck1", 1, "form-check-label"], ["name", "goalImprove", "type", "checkbox", "id", "gridCheck2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck2", 1, "form-check-label"], ["name", "goalGreen", "type", "checkbox", "id", "gridCheck3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck3", 1, "form-check-label"], ["name", "goalCreate", "type", "checkbox", "id", "gridCheck4", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck4", 1, "form-check-label"], ["name", "goalFootprint", "type", "checkbox", "id", "gridCheck5", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck5", 1, "form-check-label"], [1, "col-form"], ["name", "gridRadios", "type", "radio", "id", "gridRadios1", "value", "option1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridRadios1", 1, "form-check-label"], ["name", "gridRadios2", "type", "radio", "id", "gridRadios2", "value", "option2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridRadios2", 1, "form-check-label"], ["name", "gridRadios3", "type", "radio", "id", "gridRadios3", "value", "option3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridRadios3", 1, "form-check-label"], ["name", "gridRadios4", "type", "radio", "id", "gridRadios4", "value", "option4", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridRadios4", 1, "form-check-label"], [1, "form-group", "col"], ["name", "collaboration", "id", "inputCollaborate", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "col-sm-10"], ["name", "gridExpertise1", "type", "checkbox", "id", "gridExpertise1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridExpertise1", 1, "form-check-label"], ["name", "gridExpertise2", "type", "checkbox", "id", "gridExpertise2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridExpertise2", 1, "form-check-label"], ["name", "gridExpertise3", "type", "checkbox", "id", "gridExpertise3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridExpertise3", 1, "form-check-label"], ["for", "inputEmail"], ["name", "inputEmail", "type", "email", "id", "inputEmail", "placeholder", "name@example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputWebsite"], ["name", "inputWebsite", "type", "url", "id", "inputWebsite", "placeholder", "www.example.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPhone"], ["name", "inputPhone", "type", "number", "id", "inputPhone", "placeholder", "0612345678", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "sumbitButton", 1, "btn", "btn-secondary"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Local initiative:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MapComponent_Template_form_ngSubmit_4_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Where is the initiative located?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_13_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_15_listener($event) { return ctx.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_17_listener($event) { return ctx.zip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Community/Initiative name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_21_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Date of creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_26_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Project theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_select_ngModelChange_30_listener($event) { return ctx.selectTheme = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Solar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Water usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Heating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Else");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Project goals (choose multiple):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_48_listener($event) { return ctx.goalReduce = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Reduce energy costs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_52_listener($event) { return ctx.goalImprove = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Improve energy usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_56_listener($event) { return ctx.goalGreen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Create/install green energy technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_60_listener($event) { return ctx.goalCreate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Create community value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_64_listener($event) { return ctx.goalFootprint = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Reduce energy footprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Project Challenges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_72_listener($event) { return ctx.gridRadios = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Social - community building ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_76_listener($event) { return ctx.gridRadios2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Economic - investment, funds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_80_listener($event) { return ctx.gridRadios3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Legal - regulations, approvals, policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_84_listener($event) { return ctx.gridRadios4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Technical - infrastructure, technology, installation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "How do you want to collaborate with other initiatives?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_select_ngModelChange_90_listener($event) { return ctx.collaboration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Getting technical support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Giving technical support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Networking/partnership");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Community Expertise (choose multiple):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_102_listener($event) { return ctx.gridExpertise1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Example 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_106_listener($event) { return ctx.gridExpertise2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Example 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_110_listener($event) { return ctx.gridExpertise3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Example 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_117_listener($event) { return ctx.inputEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_121_listener($event) { return ctx.inputWebsite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_input_ngModelChange_125_listener($event) { return ctx.inputPhone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.city)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zip);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectTheme)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.goalReduce);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.goalImprove);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.goalGreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.goalCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.goalFootprint);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridRadios);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridRadios2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridRadios3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridRadios4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.collaboration)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridExpertise1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridExpertise2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gridExpertise3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputWebsite);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputPhone);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".card-body[_ngcontent-%COMP%]{\r\n  float: right;\r\n  width: 100%;\r\n  height: 50%;\r\n}\r\n\r\n.form-item[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n#sumbitButton[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  align-self: center;\r\n  margin: 20px;\r\n  background-color: #009a67;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0IiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5e1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmZvcm0taXRlbSA+IGlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNzdW1iaXRCdXR0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhNjc7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_local_initiative_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/local-initiative/map/map.component */ "UgjE");
/* harmony import */ var _components_inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inspiration/inspiration.component */ "INea");
/* harmony import */ var _components_local_authority_local_authority_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/local-authority/local-authority.component */ "E+af");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_inlogpagina_inlogpagina_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inlogpagina/inlogpagina.component */ "r6i+");
/* harmony import */ var _components_local_initiative_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/local-initiative/profile/profile.component */ "QDnW");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/library/library.component */ "gW4O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'initiative', component: _components_local_initiative_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"] },
    { path: 'authority', component: _components_local_authority_local_authority_component__WEBPACK_IMPORTED_MODULE_6__["LocalAuthorityComponent"] },
    { path: 'inspiration', component: _components_inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_5__["InspirationComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'login', component: _components_inlogpagina_inlogpagina_component__WEBPACK_IMPORTED_MODULE_12__["InlogpaginaComponent"] },
    { path: 'profileInitiative', component: _components_local_initiative_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"] },
    { path: 'library', component: _components_library_library_component__WEBPACK_IMPORTED_MODULE_15__["LibraryComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_local_initiative_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_inspiration_inspiration_component__WEBPACK_IMPORTED_MODULE_5__["InspirationComponent"],
        _components_local_authority_local_authority_component__WEBPACK_IMPORTED_MODULE_6__["LocalAuthorityComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
        _components_inlogpagina_inlogpagina_component__WEBPACK_IMPORTED_MODULE_12__["InlogpaginaComponent"],
        _components_local_initiative_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
        _components_library_library_component__WEBPACK_IMPORTED_MODULE_15__["LibraryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "gW4O":
/*!*********************************************************!*\
  !*** ./src/app/components/library/library.component.ts ***!
  \*********************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
LibraryComponent.ɵfac = function LibraryComponent_Factory(t) { return new (t || LibraryComponent)(); };
LibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibraryComponent, selectors: [["app-library"]], decls: 18, vars: 0, consts: [[1, "pb-video-container"], [1, "col-md-10", "col-md-offset-1"], [1, "text-center"], [1, "row", "pb-row"], [1, "col-md-3", "pb-video"], ["width", "100%", "height", "350", "src", "https://www.youtube.com/embed/kiZNO_Lca8k", "frameborder", "0", "allowfullscreen", "", 1, "pb-video-frame"], ["width", "100%", "height", "350", "src", "https://youtube.com/embed/HyAX4vv6p1M", "frameborder", "0", "allowfullscreen", "", 1, "pb-video-frame"]], template: function LibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Video Library:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pb-video-container[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  margin-left: 240px;\r\n  display: flex;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n}\r\n\r\n.pb-video[_ngcontent-%COMP%] {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 5px;\r\n  background: #bdc3c7;\r\n}\r\n\r\n.pb-video[_ngcontent-%COMP%]:hover {\r\n  background-color: #009a67;\r\n}\r\n\r\n.pb-video-frame[_ngcontent-%COMP%] {\r\n  transition: width 1s, height 1s;\r\n}\r\n\r\n.pb-video-frame[_ngcontent-%COMP%]:hover {\r\n  height: 400px;\r\n}\r\n\r\n.pb-row[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBiLXZpZGVvLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMjQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYi12aWRlbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcclxufVxyXG5cclxuLnBiLXZpZGVvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YTY3O1xyXG59XHJcblxyXG4ucGItdmlkZW8tZnJhbWUge1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzLCBoZWlnaHQgMXM7XHJcbn1cclxuXHJcbi5wYi12aWRlby1mcmFtZTpob3ZlciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLnBiLXJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NavbarComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { user: "user" }, decls: 22, vars: 2, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "navbar-collapse", "collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/inspiration", 1, "nav-link"], ["routerLink", "/authority", 1, "nav-link"], ["routerLink", "/initiative", 1, "nav-link"], ["routerLink", "/library", 1, "nav-link"], [4, "ngIf", "ngIfElse"], ["loggedIn", ""], ["type", "submit", "routerLink", "/signup", 1, "btn", "btn-light", "my-2", "my-sm-0"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-light", "my-2", "my-sm-0"], ["type", "submit", "routerLink", "/profileInitiative", 1, "btn", "btn-light", "my-2", "my-sm-0"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Empower 2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inspiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Local Authority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Local Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Video Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_div_19_Template, 5, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_ng_template_20_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n  background-color: #009a67;\r\n  font-size: 17px;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-right: 23%;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  margin: 0 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhNjc7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMyU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(http) {
        this.http = http;
        this.users = [];
        this.restGetUsers().subscribe(posts => {
            this.users.push(...posts);
        });
    }
    restGetUsers() {
        return this.http.get('http://localhost:8080/users');
    }
    restPostUser(user) {
        return this.http.post('http://localhost:8080/users', user);
    }
    save(user) {
        const index = this.users.findIndex((item) => item.username === user.username);
        if (index < 0) {
            this.restPostUser(user).subscribe(data => {
                this.users.push(data);
                console.log(data);
                return data;
            });
        }
        return user;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "r6i+":
/*!*****************************************************************!*\
  !*** ./src/app/components/inlogpagina/inlogpagina.component.ts ***!
  \*****************************************************************/
/*! exports provided: InlogpaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlogpaginaComponent", function() { return InlogpaginaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InlogpaginaComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.nameExists = false;
    }
    ngOnInit() {
        this.usersList = this.userService.users;
        console.log(this.usersList);
    }
    usernameExists() {
        for (const user of this.usersList) {
            if (user.username === this.username) {
                console.log('username exists');
                this.nameExists = true;
            }
            else {
                console.log('username does not exist');
            }
        }
    }
    correctPassword() {
        this.usernameExists();
        if (this.nameExists) {
            for (const user of this.usersList) {
                if (this.username === user.username && this.password === user.password) {
                    this.inCorrect = false;
                    this.router.navigate(['/home']);
                    break;
                }
                else {
                    this.inCorrect = true;
                }
            }
            if (this.inCorrect) {
                alert('Incorrect password, try again!');
            }
        }
        else {
            alert('This username does not exist!');
        }
    }
    onLogIn() {
        this.correctPassword();
    }
}
InlogpaginaComponent.ɵfac = function InlogpaginaComponent_Factory(t) { return new (t || InlogpaginaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
InlogpaginaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InlogpaginaComponent, selectors: [["app-inlogpagina"]], inputs: { username: "username", password: "password" }, decls: 12, vars: 2, consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], [1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], [3, "ngSubmit"], ["type", "text", "id", "login", "name", "login", "placeholder", "username", 1, "fadeIn", "second", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "name", "login", "placeholder", "password", 1, "fadeIn", "third", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Log In", 1, "fadeIn", "fourth"], ["id", "formFooter"], ["href", "#", 1, "underlineHover"]], template: function InlogpaginaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " //icon foto toevoegen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InlogpaginaComponent_Template_form_ngSubmit_5_listener() { return ctx.onLogIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InlogpaginaComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InlogpaginaComponent_Template_input_ngModelChange_7_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["html[_ngcontent-%COMP%] {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]  {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  animation-name: fadeInDown;\r\n  animation-duration: 1s;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  opacity:0;\r\n  animation:fadeIn ease-in 1;\r\n  animation-fill-mode:forwards;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n  animation-delay: 1s;\r\n}\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n  width:60%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubG9ncGFnaW5hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFJQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCOztBQUlBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBS0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0VBRUUsMEJBQTBCO0VBRTFCLHNCQUFzQjtFQUV0Qix5QkFBeUI7QUFDM0I7O0FBZUE7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFFVixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsa0NBQWtDOztBQUdsQyxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtFQUNFLFNBQVM7RUFHVCwwQkFBMEI7RUFJMUIsNEJBQTRCO0VBSTVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBSUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJpbmxvZ3BhZ2luYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTJiYWRkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBTVFJVQ1RVUkUgKi9cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybUZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBUQUJTICovXHJcblxyXG5oMi5pbmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmgyLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogRk9STSBUWVBPR1JBUEhZKi9cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jaWNvbiB7XHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map