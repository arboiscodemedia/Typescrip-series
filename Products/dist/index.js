"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
const routes = __importStar(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Setup Layout
app.use(express_ejs_layouts_1.default);
app.set('layout', 'layouts/layout');
// Setting the view engine
app.set('view engine', 'ejs');
// Setting for the root path for views directory
app.set("views", path_1.default.join(__dirname, 'views'));
// Setting for the root path for public directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Configure routes
routes.register(app);
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map