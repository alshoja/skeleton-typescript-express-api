import { Request, Response } from "express";
import { logger } from "../utils/logging/logger";
import { LogLevel } from "../utils/logging/constants";
import { getDirectories } from "./controller-initializer";

export let index = (request: Request, response: Response): void => {
    logger(LogLevel.DEBUG, "ping:pong");
    response.json({ status: "alive" });
}
