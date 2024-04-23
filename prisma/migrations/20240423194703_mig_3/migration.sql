-- CreateTable
CREATE TABLE "Templates" (
    "id" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "textColor" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Reach.me!',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Templates_pkey" PRIMARY KEY ("id")
);
