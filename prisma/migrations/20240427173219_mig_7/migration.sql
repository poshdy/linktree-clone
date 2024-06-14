/*
  Warnings:

  - Made the column `pageUsername` on table `Icons` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Icons" DROP CONSTRAINT "Icons_pageUsername_fkey";

-- AlterTable
ALTER TABLE "Icons" ALTER COLUMN "pageUsername" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Icons" ADD CONSTRAINT "Icons_pageUsername_fkey" FOREIGN KEY ("pageUsername") REFERENCES "Page"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
