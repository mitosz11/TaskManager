-- CreateEnum
CREATE TYPE "Category" AS ENUM ('HOME', 'WORK', 'OTHER');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'OTHER';
