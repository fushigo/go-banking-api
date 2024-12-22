/*
  Warnings:

  - Added the required column `jenisKelamin` to the `Nasabah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Nasabah` ADD COLUMN `jenisKelamin` ENUM('wanita', 'pria') NOT NULL;
