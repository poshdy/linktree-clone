-- CreateEnum
CREATE TYPE "PageStyle" AS ENUM ('Custom', 'Theme');

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "styleType" "PageStyle" NOT NULL DEFAULT 'Theme',
ADD COLUMN     "templatesId" TEXT,
ALTER COLUMN "bgColor" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_templatesId_fkey" FOREIGN KEY ("templatesId") REFERENCES "Templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
