import { MigrationInterface, QueryRunner } from "typeorm";

export class Autho1753664138568 implements MigrationInterface {
    name = 'Autho1753664138568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "drugsId"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "drugsId" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "drugsId"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "drugsId" integer NOT NULL`);
    }

}
