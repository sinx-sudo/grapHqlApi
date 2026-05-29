/*
  Warnings:

  - You are about to drop the column `userId` on the `department` table. All the data in the column will be lost.
  - Added the required column `depId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "department" DROP CONSTRAINT "department_userId_fkey";

-- AlterTable
ALTER TABLE "department" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "depId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_depId_fkey" FOREIGN KEY ("depId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
