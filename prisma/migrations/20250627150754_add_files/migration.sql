-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "folderId" TEXT,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
