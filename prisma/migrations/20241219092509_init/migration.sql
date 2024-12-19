/*
  Warnings:

  - You are about to drop the `rekeningdetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bonusBunga` to the `Rekening` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalDana` to the `Rekening` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `rekeningdetail` DROP FOREIGN KEY `RekeningDetail_id_rekening_fkey`;

-- AlterTable
ALTER TABLE `rekening` ADD COLUMN `bonusBunga` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `totalDana` DECIMAL(65, 30) NOT NULL;

-- DropTable
DROP TABLE `rekeningdetail`;
