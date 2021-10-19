import { response, Router } from "express";
import { AutheticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

router.post("/autheticate", new AutheticateUserController().handle)

export { router };