import { FastifyInstance } from "fastify";
import {
  createAdminHandler,
  getAdminsHandler,
  logniAdminHandler,
} from "./admin.controller";

export async function adminRoutes(server: FastifyInstance) {
  server.post("/", createAdminHandler);

  server.get("/", getAdminsHandler);

  server.post("/login", logniAdminHandler);
}
