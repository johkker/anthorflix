import { MigrationInterface, QueryRunner } from "typeorm";

export class next1661018121148 implements MigrationInterface {
    name = 'next1661018121148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_fb3041108e7a2ace111b6114c9a"`);
        await queryRunner.query(`ALTER TABLE "comment" RENAME COLUMN "user" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "comment" RENAME CONSTRAINT "UQ_fb3041108e7a2ace111b6114c9a" TO "UQ_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "UQ_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "UQ_c0354a9a009d3bb45a08655ce3b" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "comment" RENAME CONSTRAINT "UQ_c0354a9a009d3bb45a08655ce3b" TO "UQ_fb3041108e7a2ace111b6114c9a"`);
        await queryRunner.query(`ALTER TABLE "comment" RENAME COLUMN "userId" TO "user"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_fb3041108e7a2ace111b6114c9a" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
