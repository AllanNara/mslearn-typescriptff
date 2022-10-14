"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const config = dotenv_1.default.config();
if (config.error) {
    throw config.error;
}
;
console.log(config);
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
