"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const payment_controller_1 = __importDefault(require("./payment.controller"));
const router = express_1.default.Router();
router.post('/intent/:order_id', (0, auth_1.default)('CUSTOMER'), payment_controller_1.default.CreatePaymentIntent);
router.post('/ipn_listener', payment_controller_1.default.VerifyPayment);
exports.PaymentRoutes = router;
