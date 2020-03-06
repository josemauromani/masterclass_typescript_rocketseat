"use strict";
exports.__esModule = true;
var express_1 = require("express");
var UserControllers_1 = require("./controllers/UserControllers");
var routes = express_1.Router();
routes.get('/users', UserControllers_1["default"].index);
routes.get('/users/create', UserControllers_1["default"].create);
exports["default"] = routes;
