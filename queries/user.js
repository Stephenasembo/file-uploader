const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient()

async function createUser(username, password) {
  const user = await prisma.users.create({
    data: { username, password }
  })
}

async function findUser(id = null, username = null) {
  const where = {};
  if (id) where.id = id;
  else if (username) where.username = username;

  const user = await prisma.users.findUnique({where})
  return user
}

findUser(null, 'steve')

module.exports = {
  createUser,
  findUser
}