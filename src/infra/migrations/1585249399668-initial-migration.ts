import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1585249399668 implements MigrationInterface {
    name = 'initialMigration1585249399668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE public.air_tickets( id SERIAL NOT NULL, departure_date date NOT NULL, arrival_date date NOT NULL, departure_city character varying(3) COLLATE pg_catalog."default" NOT NULL, arrival_city character varying(3) COLLATE pg_catalog."default" NOT NULL, passager_name character varying(255) COLLATE pg_catalog."default" NOT NULL, have_hold_luggage boolean NOT NULL, price double precision NOT NULL, departure_hour time with time zone NOT NULL, arrival_hour time with time zone NOT NULL,CONSTRAINT air_tickets_pkey PRIMARY KEY (id));`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "air_ticket"`);
    }

}
