import { MigrationInterface, QueryRunner } from 'typeorm';

export class createHardwoodsTable1681185475372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    `CREATE TABLE "hardwoods" (
            "hardwoodId" UUID PRIMARY KEY,
            "name" VARCHAR NOT NULL,
            "region" VARCHAR NOT NULL,
            "jankaHardness" INTEGER NOT NULL,
            "price" INTEGER NOT NULL,
            "priceType" VARCHAR NOT NULL,
            "imageUrl" VARCHAR NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        )`;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE hardwoods`);
  }
}
