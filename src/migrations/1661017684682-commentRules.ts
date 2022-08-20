import { MigrationInterface, QueryRunner } from "typeorm";

export class commentRules1661017684682 implements MigrationInterface {
    name = 'commentRules1661017684682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e4d2b270631992913a7a0abedac"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_e4d2b270631992913a7a0abedac"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_e4d2b270631992913a7a0abedac" FOREIGN KEY ("movie") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e4d2b270631992913a7a0abedac"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_e4d2b270631992913a7a0abedac" UNIQUE ("movie")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_e4d2b270631992913a7a0abedac" FOREIGN KEY ("movie") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
