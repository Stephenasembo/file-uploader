const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

async function createFile({name, size, uploadedAt, folderId}) {
  const file = await prisma.files.create({
    data: {
      name, size, folderId
    }
  })
  return file;
}

module.exports = {
  createFile,
}