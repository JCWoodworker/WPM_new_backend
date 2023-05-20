import { MigrationInterface, QueryRunner } from 'typeorm'

export class createProjectsTable1681185483362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE projects (
            projectId UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
            name VARCHAR NOT NULL,
            customerId INTEGER DEFAULT NULL,
            userId VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            quantity INTEGER NOT NULL,
            laborHours INTEGER NOT NULL,
            stage VARCHAR NOT NULL,
            createdAt TIMESTAMP NOT NULL DEFAULT now()
            )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projects`)
  }
}
