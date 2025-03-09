import express from "express";
import { login, logout, signin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin",signin);
router.get("/login",login);
router.get("/logout",logout) ;

export default router;