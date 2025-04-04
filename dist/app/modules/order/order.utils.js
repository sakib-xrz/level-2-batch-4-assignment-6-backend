"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function generateOrderId() {
    const uuid = (0, uuid_1.v4)();
    const alphanumeric = uuid.replace(/[^a-z0-9]/gi, '');
    return alphanumeric.substring(0, 6).toUpperCase();
}
const calculateDiscountedPrice = (price, discount, discountType) => {
    let finalPrice = price;
    if (discount && discountType) {
        if (discountType === 'PERCENTAGE') {
            finalPrice = price - (price * discount) / 100;
        }
        else if (discountType === 'FLAT') {
            finalPrice = price - discount;
        }
    }
    return finalPrice < 0 ? 0 : finalPrice;
};
function generateTransactionId() {
    const uuid = (0, uuid_1.v4)();
    const alphanumeric = uuid.replace(/[^a-z0-9]/gi, '');
    return `TRX-${alphanumeric.substring(0, 10).toUpperCase()}`;
}
const OrderUtils = {
    generateOrderId,
    calculateDiscountedPrice,
    generateTransactionId,
};
exports.default = OrderUtils;
