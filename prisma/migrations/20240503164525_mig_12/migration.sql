/*
  Warnings:

  - A unique constraint covering the columns `[pageUsername]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Store_pageUsername_key" ON "Store"("pageUsername");
