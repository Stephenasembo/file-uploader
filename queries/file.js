const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

async function getFolderFiles(folderId) {
  const files = await prisma.files.findMany({
    where: { folderId }
  })
  return files;
}

async function createFile({name, size, folderId, storagePath}) {
  const file = await prisma.files.create({
    data: {
      name, size, folderId, storagePath
    }
  })
  return file;
}

async function getFile(id) {
  const file = await prisma.files.findFirst({
    where: { id }
  })
  return file;
}

async function deleteFile(id) {
  const file = await prisma.files.delete({
    where: { id }
  })
}

module.exports = {
  getFolderFiles,
  createFile,
  getFile,
  deleteFile,
}