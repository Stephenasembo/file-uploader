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

async function updateFolder(name, id) {
  const folder = await prisma.folder.update({
    where: { id },
    data: { name }
  })
  return folder;
}

module.exports = {
  createFolder,
  getUserFolders,
  getFolder,
  updateFolder,
}