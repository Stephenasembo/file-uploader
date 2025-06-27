const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient()

async function createFolder(name, userId) {
  const folder = await prisma.folder.create({
    data: { name, usersId: userId }
  })
  return folder;
}

module.exports = {
  createFolder,
}