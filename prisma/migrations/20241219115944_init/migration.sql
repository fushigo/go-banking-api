-- CreateTable
CREATE TABLE `Karyawan` (
    `id_karyawan` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorKaryawan` INTEGER NOT NULL,
    `namaKaryawan` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('SuperAdmin', 'Admin', 'Karyawan') NOT NULL DEFAULT 'Karyawan',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Karyawan_nomorKaryawan_key`(`nomorKaryawan`),
    PRIMARY KEY (`id_karyawan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nasabah` (
    `id_nasabah` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(191) NOT NULL,
    `namaLengkap` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nomorTelepone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Nasabah_nik_key`(`nik`),
    UNIQUE INDEX `Nasabah_email_key`(`email`),
    UNIQUE INDEX `Nasabah_nomorTelepone_key`(`nomorTelepone`),
    PRIMARY KEY (`id_nasabah`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rekening` (
    `id_rekening` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorRekening` INTEGER NOT NULL,
    `jenisRekening` ENUM('Tabungan', 'Giro', 'Deposito') NOT NULL DEFAULT 'Tabungan',
    `jenisTabungan` ENUM('GoSilver', 'GoPlatinum', 'GoPriority') NULL,
    `totalDana` DECIMAL(65, 30) NOT NULL,
    `bonusBunga` DECIMAL(65, 30) NOT NULL,
    `id_nasabah` INTEGER NOT NULL,
    `pin` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Rekening_nomorRekening_key`(`nomorRekening`),
    UNIQUE INDEX `Rekening_pin_key`(`pin`),
    PRIMARY KEY (`id_rekening`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RekeningActivity` (
    `id_rekening_activity` INTEGER NOT NULL AUTO_INCREMENT,
    `jenisActivity` ENUM('DanaKeluar', 'DanaMasuk') NOT NULL,
    `jumlahDana` DECIMAL(65, 30) NOT NULL,
    `id_rekening` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_rekening_activity`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LogActivity` (
    `id_log_activity` INTEGER NOT NULL AUTO_INCREMENT,
    `operation` VARCHAR(191) NOT NULL,
    `id_karyawan` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_log_activity`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Rekening` ADD CONSTRAINT `Rekening_id_nasabah_fkey` FOREIGN KEY (`id_nasabah`) REFERENCES `Nasabah`(`id_nasabah`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RekeningActivity` ADD CONSTRAINT `RekeningActivity_id_rekening_fkey` FOREIGN KEY (`id_rekening`) REFERENCES `Rekening`(`id_rekening`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LogActivity` ADD CONSTRAINT `LogActivity_id_karyawan_fkey` FOREIGN KEY (`id_karyawan`) REFERENCES `Karyawan`(`id_karyawan`) ON DELETE CASCADE ON UPDATE CASCADE;
