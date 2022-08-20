import { MigrationInterface, QueryRunner } from "typeorm";

export class fixedRatingsRules1661006794904 implements MigrationInterface {
    name = 'fixedRatingsRules1661006794904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rating" ALTER COLUMN "likes" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rating" ALTER COLUMN "dislikes" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rating" ALTER COLUMN "dislikes" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "rating" ALTER COLUMN "likes" DROP DEFAULT`);
    }

}
