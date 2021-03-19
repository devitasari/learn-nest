"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWS_BUCKET = exports.AWS_REGION = exports.AWS_SECRET_ACCESS_KEY = exports.AWS_ACCESS_KEY_ID = void 0;
require('dotenv').config();
exports.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
exports.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
exports.AWS_REGION = process.env.AWS_REGION;
exports.AWS_BUCKET = process.env.AWS_BUCKET;
//# sourceMappingURL=app.config.js.map