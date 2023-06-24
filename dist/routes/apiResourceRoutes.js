"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = __importStar(require("../controllers/Service"));
const profileController = __importStar(require("../controllers/Profile"));
const UserValidator_1 = require("../utils/validators/UserValidator");
const router = (0, express_1.Router)();
router.get("/profile", controller.getProfile);
router.put("/update-customerDetails", controller.createCustomer);
router.patch("/update-customerDetails/:customerId", controller.updateCustomer);
router.get("/customers", UserValidator_1.paginationValidator, controller.customers);
router.get("/customers/:id", controller.customerById);
router.put("/customers/:id", controller.updateCustomer);
router.get("/users", UserValidator_1.paginationValidator, controller.users);
router.get("/users/:id", UserValidator_1.getByIdValidator, controller.userById);
router.put("/users/:id", UserValidator_1.getByIdValidator, UserValidator_1.validateUserDetails, controller.updateUser);
router.delete("/users/:id", controller.deleteUserById);
router.get("/profile/:id", profileController.profileById);
exports.default = router;
