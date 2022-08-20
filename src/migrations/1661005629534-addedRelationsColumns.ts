import { MigrationInterface, QueryRunner } from "typeorm";

export class addedRelationsColumns1661005629534 implements MigrationInterface {
    name = 'addedRelationsColumns1661005629534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_aea4918c888422550a85e257894"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`CREATE TABLE "genres" ("movieId" uuid NOT NULL, "genreId" uuid NOT NULL, CONSTRAINT "PK_a5fe541ef2114c18e3024182c91" PRIMARY KEY ("movieId", "genreId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dbc1bc65c783b4cdab9c178d26" ON "genres" ("movieId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8e3e2a59aac7ee7889b047fdc0" ON "genres" ("genreId") `);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "movieId"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "movie_id" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "genres" ADD CONSTRAINT "FK_dbc1bc65c783b4cdab9c178d26c" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "genres" ADD CONSTRAINT "FK_8e3e2a59aac7ee7889b047fdc0c" FOREIGN KEY ("genreId") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "genres" DROP CONSTRAINT "FK_8e3e2a59aac7ee7889b047fdc0c"`);
        await queryRunner.query(`ALTER TABLE "genres" DROP CONSTRAINT "FK_dbc1bc65c783b4cdab9c178d26c"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_78bb58aecbc0e3e21ee5b81cd9a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "movie_id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "movieId" uuid`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8e3e2a59aac7ee7889b047fdc0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dbc1bc65c783b4cdab9c178d26"`);
        await queryRunner.query(`DROP TABLE "genres"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_aea4918c888422550a85e257894" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
