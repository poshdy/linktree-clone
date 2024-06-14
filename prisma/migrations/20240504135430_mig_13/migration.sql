/*
  Warnings:

  - You are about to drop the column `visible` on the `Icons` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Icons" DROP COLUMN "visible";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "SmLinks" ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT true;
