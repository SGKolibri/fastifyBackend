import { FastifyInstance } from "fastify";
import { createAdminHandler, getAdminsHandler } from "./admin.controller";

export async function adminRoutes(server: FastifyInstance) {
  server.post("/", createAdminHandler);

  server.get("/", getAdminsHandler);
}
