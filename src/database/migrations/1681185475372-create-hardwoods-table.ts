import { MigrationInterface, QueryRunner } from 'typeorm'

export class createHardwoodsTable1681185475372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE "hardwoods" (
            "hardwoodId" UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
            "name" VARCHAR NOT NULL,
            "region" VARCHAR NOT NULL,
            "jankaHardness" INTEGER NOT NULL,
            "imageUrl" VARCHAR NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE hardwoods`)
  }
}
