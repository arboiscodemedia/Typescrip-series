"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const IndexController_1 = __importDefault(require("../controllers/IndexController"));
const register = (app) => {
    app.get("/", IndexController_1.default.Index);
};
exports.register = register;
//# sourceMappingURL=index.js.map