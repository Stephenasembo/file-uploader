const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient();

async function generateShareLink(userId, folderId, expiresAt) {
  let link = await prisma.shareLinks.findUnique({
    where: { folderId }
  });

  if(!link) {
    link = await prisma.shareLinks.create({
      data: {
        folderId, expiresAt, createdById: userId
      }
    })
  }
  return link
}

async function getShareLink(id) {
  const link = await prisma.shareLinks.findUnique({
    where: { id }
  })
  return link;
}

module.exports = {
  generateShareLink,
  getShareLink,
}