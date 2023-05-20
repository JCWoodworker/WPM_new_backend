import { MigrationInterface, QueryRunner } from "typeorm";

export class createUsersTable1681185357273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "userId" UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
                "firstName" VARCHAR NOT NULL,
                "lastName" VARCHAR NOT NULL,
                "username" VARCHAR NOT NULL UNIQUE,
                "cellPhone" BIGINT DEFAULT NULL,
                "email" VARCHAR NOT NULL,
                "password" VARCHAR NOT NULL,
                "userType" VARCHAR NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "userIp" VARCHAR NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }

}