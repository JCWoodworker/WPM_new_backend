import { MigrationInterface, QueryRunner } from 'typeorm'

export class createProjectsTable1681185483362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "projects" (
        "projectId" UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
        "name" VARCHAR NOT NULL,
        "customerId" INTEGER DEFAULT NULL,
        "userId" UUID NOT NULL,
        "description" VARCHAR NOT NULL,
        "quantity" INTEGER NOT NULL,
        "laborHours" INTEGER NOT NULL,
        "stage" VARCHAR NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
      )
    `)

    await queryRunner.query(`
      ALTER TABLE projects
      ADD CONSTRAINT fk_userId
      FOREIGN KEY ("userId")
      REFERENCES users("userId")
      ON DELETE CASCADE
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE projects`)
  }
}
