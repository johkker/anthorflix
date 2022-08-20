import { MigrationInterface, QueryRunner } from "typeorm";

export class addImageUrlToMovies1661002089271 implements MigrationInterface {
    name = 'addImageUrlToMovies1661002089271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "image_url" character varying NOT NULL DEFAULT 'https://source.unsplash.com/random'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "image_url"`);
    }

}
