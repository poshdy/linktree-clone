-- CreateTable
CREATE TABLE "Page" (
    "username" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,
    "location" TEXT,
    "bgColor" TEXT NOT NULL DEFAULT '#000'
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_username_key" ON "Page"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Page_userId_key" ON "Page"("userId");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
