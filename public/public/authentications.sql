create table authentications
(
    id          uuid default '7172fee2-1b07-4346-b839-9efcb4e4711f'::uuid not null
        primary key,
    email       varchar(255)                                              not null,
    password    varchar(255)                                              not null,
    "createdAt" timestamp with time zone                                  not null,
    "updatedAt" timestamp with time zone                                  not null
);

alter table authentications
    owner to "default";

