# Harare 

## Prerequisites

- [Postgrest](postgrest.org)
- [Node.js](nodejs.org) >= 10.13.0

## Installation

```bash
$ npm install
```

## Prepare environment

```bash
    create database HarareDb;
    create user HarareUser with encrypted password 'HarareUser';
    grant all privileges on database HarareDb to HarareUser;

    CREATE TABLE public.tickets
    (
        id SERIAL,
        departure_date date NOT NULL,
        arrival_date date NOT NULL,
        departure_city character varying(3) COLLATE pg_catalog."default" NOT NULL,
        arrival_city character varying(3) COLLATE pg_catalog."default" NOT NULL,
        passager_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
        have_hold_luggage boolean NOT NULL,
        price double precision NOT NULL,
        departure_hour time with time zone NOT NULL,
        arrival_hour time with time zone NOT NULL,
        CONSTRAINT air_tickets_pkey PRIMARY KEY (id)
    )
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
