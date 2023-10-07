import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696681637762 implements MigrationInterface {
    name = 'MyMigration1696681637762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" ADD "title" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "title"`);
    }

}
