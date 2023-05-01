import { MigrationInterface, QueryRunner } from "typeorm"

export class createProjectsTable1681185483362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE projects (
            projectId UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
            name VARCHAR NOT NULL,
            customerId INT DEFAULT NULL,
            userId VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            quantity INT NOT NULL,
            laborHours INT NOT NULL,
            stage VARCHAR NOT NULL,
            createdAt TIMESTAMP NOT NULL DEFAULT now()
    `);
}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE projects`);
    }

}
