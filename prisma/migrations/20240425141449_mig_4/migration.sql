-- CreateTable
CREATE TABLE "links" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "pageUsername" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_pageUsername_fkey" FOREIGN KEY ("pageUsername") REFERENCES "Page"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
