const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient()

async function createUser(username, password) {
  const user = await prisma.users.create({
    data: { username, password }
  })
}

module.exports = {
  createUser,
}