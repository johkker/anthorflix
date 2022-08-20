import { MigrationInterface, QueryRunner } from "typeorm";

export class fixedMoviesRelationsRules1661006341730 implements MigrationInterface {
    name = 'fixedMoviesRelationsRules1661006341730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rating" DROP CONSTRAINT "FK_1a3badf27affbca3a224f01f7de"`);
        await queryRunner.query(`CREATE TABLE "users" ("ratingId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_3fad95cf78b628c45e8e22274c0" PRIMARY KEY ("ratingId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7c4a3859086c0fc90e7cd009ea" ON "users" ("ratingId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8bf09ba754322ab9c22a215c91" ON "users" ("userId") `);
        await queryRunner.query(`ALTER TABLE "rating" DROP COLUMN "movieId"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "rating" uuid`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "UQ_108100a01e2902b72543af06839" UNIQUE ("rating")`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_108100a01e2902b72543af06839" FOREIGN KEY ("rating") REFERENCES "rating"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7c4a3859086c0fc90e7cd009eab" FOREIGN KEY ("ratingId") REFERENCES "rating"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8bf09ba754322ab9c22a215c919" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8bf09ba754322ab9c22a215c919"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7c4a3859086c0fc90e7cd009eab"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_108100a01e2902b72543af06839"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "UQ_108100a01e2902b72543af06839"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "rating" ADD "movieId" uuid`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8bf09ba754322ab9c22a215c91"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7c4a3859086c0fc90e7cd009ea"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "rating" ADD CONSTRAINT "FK_1a3badf27affbca3a224f01f7de" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
