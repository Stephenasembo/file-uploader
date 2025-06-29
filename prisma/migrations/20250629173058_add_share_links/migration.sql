-- CreateTable
CREATE TABLE "ShareLinks" (
    "id" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "ShareLinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShareLinks_folderId_key" ON "ShareLinks"("folderId");

-- AddForeignKey
ALTER TABLE "ShareLinks" ADD CONSTRAINT "ShareLinks_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareLinks" ADD CONSTRAINT "ShareLinks_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
