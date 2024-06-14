/*
  Warnings:

  - You are about to drop the column `buttonColor` on the `Page` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ButtonType" AS ENUM ('Fill', 'Outline', 'Shadow');

-- CreateEnum
CREATE TYPE "ButtonStyle" AS ENUM ('fullyRounded', 'Rectangle', 'Rounded');

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "buttonColor",
ADD COLUMN     "buttonId" TEXT;

-- CreateTable
CREATE TABLE "Button" (
    "id" TEXT NOT NULL,
    "type" "ButtonType" NOT NULL DEFAULT 'Fill',
    "color" TEXT,
    "textColor" TEXT,
    "borderColor" TEXT,
    "shadowColor" TEXT,
    "style" "ButtonStyle" DEFAULT 'fullyRounded',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Button_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_buttonId_fkey" FOREIGN KEY ("buttonId") REFERENCES "Button"("id") ON DELETE SET NULL ON UPDATE CASCADE;
