const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient()

async function getUserFolders(usersId) {
  const folders = await prisma.folder.findMany({
    where: { usersId }
  })
  return folders;
}

async function createFolder(name, userId) {
  const folder = await prisma.folder.create({
    data: { name, usersId: userId }
  })
  return folder;
}

async function getFolder(id) {
  const folder = await prisma.folder.findFirst({
    where: { id }
  })
  return folder;
}

module.exports = {
  createFolder,
  getUserFolders,
  getFolder,
}