import { MigrationInterface, QueryRunner } from "typeorm";

export class update1661017430649 implements MigrationInterface {
    name = 'update1661017430649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_78bb58aecbc0e3e21ee5b81cd9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "movie_id"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_bbfe153fa60aa06483ed35ff4a7"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "movie" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_e4d2b270631992913a7a0abedac" UNIQUE ("movie")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "user" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_fb3041108e7a2ace111b6114c9a" UNIQUE ("user")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_e4d2b270631992913a7a0abedac" FOREIGN KEY ("movie") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_fb3041108e7a2ace111b6114c9a" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_fb3041108e7a2ace111b6114c9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e4d2b270631992913a7a0abedac"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_fb3041108e7a2ace111b6114c9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_e4d2b270631992913a7a0abedac"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "movie"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_bbfe153fa60aa06483ed35ff4a7" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "movie_id" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_78bb58aecbc0e3e21ee5b81cd9a" UNIQUE ("movie_id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
