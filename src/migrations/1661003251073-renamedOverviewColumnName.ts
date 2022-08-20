import { MigrationInterface, QueryRunner } from "typeorm";

export class renamedOverviewColumnName1661003251073 implements MigrationInterface {
    name = 'renamedOverviewColumnName1661003251073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" RENAME COLUMN "imdb_id" TO "overview"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" RENAME COLUMN "overview" TO "imdb_id"`);
    }

}
