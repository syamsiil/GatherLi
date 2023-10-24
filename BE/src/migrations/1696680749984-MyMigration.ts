import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696680749984 implements MigrationInterface {
    name = 'MyMigration1696680749984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" ADD "title" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "title"`);
    }

}
