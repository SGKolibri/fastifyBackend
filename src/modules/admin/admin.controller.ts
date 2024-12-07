import { FastifyReply, FastifyRequest } from "fastify";
import { createAdmin, getAdmins } from "./admin.services";
import { CreateAdminInput } from "./admin.schemas";

export async function createAdminHandler(
  request: FastifyRequest<{ Body: CreateAdminInput }>,
  reply: FastifyReply
) {
  const body = request.body; // email, password, name
  try {
    const admin = await createAdmin(body);
    return reply.status(201).send(admin);
  } catch (e) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}

export async function getAdminsHandler(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const admins = await getAdmins();
    return reply.send(admins);
  } catch (e) {
    return reply.status(500).send({ message: "Internal Server Error" });
  }
}
