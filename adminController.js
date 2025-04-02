"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCustomClaims = void 0;
const firebaseConfig_1 = require("src/config/firebaseConfig");
const setCustomClaims = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, claims } = req.body;
    try {
        yield firebaseConfig_1.auth.setCustomUserClaims(uid, claims);
        res.status(200).json({ message: `Custom claims set for user: ${uid}` });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.setCustomClaims = setCustomClaims;

