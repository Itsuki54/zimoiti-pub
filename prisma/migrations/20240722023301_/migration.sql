-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `salt` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `type` ENUM('ADMIN', 'USER', 'OWNER') NOT NULL DEFAULT 'USER',
    `isSubscribed` BOOLEAN NOT NULL DEFAULT false,
    `storeId` VARCHAR(191) NULL,
    `settingId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_settingId_fkey`(`settingId`),
    INDEX `User_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setting` (
    `id` VARCHAR(191) NOT NULL,
    `recommned` BOOLEAN NOT NULL,
    `ownerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `furigana` VARCHAR(191) NULL,
    `tags` VARCHAR(191) NULL,
    `addressId` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `barrier` BOOLEAN NOT NULL DEFAULT false,
    `light` INTEGER NOT NULL DEFAULT 0,
    `lively` INTEGER NOT NULL DEFAULT 0,
    `location` VARCHAR(191) NULL,
    `lat` DOUBLE NULL,
    `lng` DOUBLE NULL,
    `language` VARCHAR(191) NULL,
    `birthday` BOOLEAN NOT NULL DEFAULT false,
    `mobile` BOOLEAN NOT NULL DEFAULT false,
    `wifi` BOOLEAN NOT NULL DEFAULT false,
    `pet` BOOLEAN NOT NULL DEFAULT false,
    `takeout` BOOLEAN NOT NULL DEFAULT false,
    `smoking` BOOLEAN NOT NULL DEFAULT false,
    `stamp` BOOLEAN NOT NULL DEFAULT false,
    `point` BOOLEAN NOT NULL DEFAULT false,
    `invoice` BOOLEAN NOT NULL DEFAULT false,
    `kids` BOOLEAN NOT NULL DEFAULT false,
    `freeDrink` VARCHAR(191) NULL,
    `otoshi` INTEGER NOT NULL DEFAULT 0,
    `serviceFee` INTEGER NOT NULL DEFAULT 0,
    `bring` INTEGER NOT NULL DEFAULT 0,
    `unlimited` INTEGER NOT NULL DEFAULT 0,
    `buffet` INTEGER NOT NULL DEFAULT 0,
    `outlet` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Store_addressId_key`(`addressId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parking` (
    `id` VARCHAR(191) NOT NULL,
    `inside` BOOLEAN NOT NULL,
    `outside` BOOLEAN NOT NULL,
    `capacity` INTEGER NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Parking_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Menu` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `readyTime` VARCHAR(191) NOT NULL,
    `allergen` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Menu_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `zip` VARCHAR(191) NOT NULL,
    `storeId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Time` (
    `id` VARCHAR(191) NOT NULL,
    `day` VARCHAR(191) NOT NULL,
    `open` VARCHAR(191) NOT NULL,
    `close` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `parkingId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Time_parkingId_fkey`(`parkingId`),
    INDEX `Time_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceTime` (
    `id` VARCHAR(191) NOT NULL,
    `day` VARCHAR(191) NOT NULL,
    `start` VARCHAR(191) NOT NULL,
    `end` VARCHAR(191) NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `menuId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ServiceTime_menuId_fkey`(`menuId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserve` (
    `id` VARCHAR(191) NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `timeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Reserve_timeId_key`(`timeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Course` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Course_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourseMenu` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `allergen` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `CourseMenu_courseId_fkey`(`courseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seat` (
    `id` VARCHAR(191) NOT NULL,
    `madori` VARCHAR(191) NOT NULL,
    `smoking` BOOLEAN NOT NULL,
    `table` BOOLEAN NOT NULL,
    `seats` INTEGER NOT NULL,
    `maximum` INTEGER NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `toiletId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Seat_storeId_fkey`(`storeId`),
    INDEX `Seat_toiletId_fkey`(`toiletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Toilet` (
    `id` VARCHAR(191) NOT NULL,
    `inside` BOOLEAN NOT NULL,
    `outside` BOOLEAN NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Toilet_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ToiletType` (
    `id` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `wayou` BOOLEAN NOT NULL,
    `washlet` BOOLEAN NOT NULL,
    `toiletId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ToiletType_toiletId_fkey`(`toiletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `card` VARCHAR(191) NOT NULL,
    `cash` BOOLEAN NOT NULL,
    `QR` VARCHAR(191) NOT NULL,
    `transit` BOOLEAN NOT NULL,
    `IDPay` BOOLEAN NOT NULL,
    `QuickPay` BOOLEAN NOT NULL,
    `Nanaco` BOOLEAN NOT NULL,
    `Edy` BOOLEAN NOT NULL,
    `WAON` BOOLEAN NOT NULL,
    `Pitapa` BOOLEAN NOT NULL,
    `UNIONPAY` BOOLEAN NOT NULL,
    `storeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Payment_storeId_fkey`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_settingId_fkey` FOREIGN KEY (`settingId`) REFERENCES `Setting`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Parking` ADD CONSTRAINT `Parking_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Time` ADD CONSTRAINT `Time_parkingId_fkey` FOREIGN KEY (`parkingId`) REFERENCES `Parking`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Time` ADD CONSTRAINT `Time_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceTime` ADD CONSTRAINT `ServiceTime_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserve` ADD CONSTRAINT `Reserve_timeId_fkey` FOREIGN KEY (`timeId`) REFERENCES `Time`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseMenu` ADD CONSTRAINT `CourseMenu_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seat` ADD CONSTRAINT `Seat_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Seat` ADD CONSTRAINT `Seat_toiletId_fkey` FOREIGN KEY (`toiletId`) REFERENCES `Toilet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Toilet` ADD CONSTRAINT `Toilet_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ToiletType` ADD CONSTRAINT `ToiletType_toiletId_fkey` FOREIGN KEY (`toiletId`) REFERENCES `Toilet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
