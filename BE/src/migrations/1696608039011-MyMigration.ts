import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696608039011 implements MigrationInterface {
    name = 'MyMigration1696608039011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "likes" ("id" SERIAL NOT NULL, "userId" integer, "threadId" integer, CONSTRAINT "PK_a9323de3f8bced7539a794b4a37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "threads" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "image" character varying, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_d8a74804c34fc3900502cd27275" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follows" ("id" SERIAL NOT NULL, "followerId" integer, "followedId" integer, CONSTRAINT "PK_8988f607744e16ff79da3b8a627" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "replies" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "threadId" integer, CONSTRAINT "PK_08f619ebe431e27e9d206bea132" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "users_id_seq" OWNED BY "users"."id"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('"users_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "full_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_picture"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_picture" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_background"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_background" character varying`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_description" character varying`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_cfd8e81fac09d7339a32e57d904" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_111596eb3f640a4c675ca0b6b9d" FOREIGN KEY ("threadId") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "threads" ADD CONSTRAINT "FK_256dd2e4946d6768c5583caa072" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_fdb91868b03a2040db408a53331" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follows" ADD CONSTRAINT "FK_d5ab44405d07cecac582c6448bf" FOREIGN KEY ("followedId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_e2877ab282e45ccfd2b2d0fd20e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "replies" ADD CONSTRAINT "FK_704ca745ae134000b58ece3dc58" FOREIGN KEY ("threadId") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_704ca745ae134000b58ece3dc58"`);
        await queryRunner.query(`ALTER TABLE "replies" DROP CONSTRAINT "FK_e2877ab282e45ccfd2b2d0fd20e"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_d5ab44405d07cecac582c6448bf"`);
        await queryRunner.query(`ALTER TABLE "follows" DROP CONSTRAINT "FK_fdb91868b03a2040db408a53331"`);
        await queryRunner.query(`ALTER TABLE "threads" DROP CONSTRAINT "FK_256dd2e4946d6768c5583caa072"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_111596eb3f640a4c675ca0b6b9d"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_cfd8e81fac09d7339a32e57d904"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_description" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_background"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_background" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_picture"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_picture" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "full_name" text`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" text`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_id_seq"`);
        await queryRunner.query(`DROP TABLE "replies"`);
        await queryRunner.query(`DROP TABLE "follows"`);
        await queryRunner.query(`DROP TABLE "threads"`);
        await queryRunner.query(`DROP TABLE "likes"`);
    }

}
