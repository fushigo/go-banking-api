/*
  Warnings:

  - You are about to drop the column `nomorPegawai` on the `karyawan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomorKaryawan]` on the table `Karyawan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nomorKaryawan` to the `Karyawan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Karyawan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Karyawan` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Karyawan_nomorPegawai_key` ON `karyawan`;

-- AlterTable
ALTER TABLE `karyawan` DROP COLUMN `nomorPegawai`,
    ADD COLUMN `nomorKaryawan` INTEGER NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `rekening` ADD COLUMN `jenisTabungan` ENUM('GoSilver', 'GoPlatinum', 'GoPriority') NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Karyawan_nomorKaryawan_key` ON `Karyawan`(`nomorKaryawan`);
