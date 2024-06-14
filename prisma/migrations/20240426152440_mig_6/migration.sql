-- CreateEnum
CREATE TYPE "Position" AS ENUM ('Top', 'Bottom');

-- CreateTable
CREATE TABLE "Icons" (
    "id" TEXT NOT NULL,
    "position" "Position" NOT NULL DEFAULT 'Top',
    "pageUsername" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Icons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SmLinks" (
    "id" TEXT NOT NULL,
    "iconsId" TEXT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "SmLinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Icons_pageUsername_key" ON "Icons"("pageUsername");

-- AddForeignKey
ALTER TABLE "Icons" ADD CONSTRAINT "Icons_pageUsername_fkey" FOREIGN KEY ("pageUsername") REFERENCES "Page"("username") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SmLinks" ADD CONSTRAINT "SmLinks_iconsId_fkey" FOREIGN KEY ("iconsId") REFERENCES "Icons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
