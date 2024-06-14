-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "visits" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "clicks" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "SmLinks" ADD COLUMN     "clickes" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "viwes" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "links" ADD COLUMN     "clicks" INTEGER DEFAULT 0;
