import { MigrationInterface, QueryRunner } from "typeorm";

export class commentsRelationsFixed1661009436751 implements MigrationInterface {
    name = 'commentsRelationsFixed1661009436751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_78bb58aecbc0e3e21ee5b81cd9a" UNIQUE ("movie_id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_bbfe153fa60aa06483ed35ff4a7" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_bbfe153fa60aa06483ed35ff4a7"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_78bb58aecbc0e3e21ee5b81cd9a"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
