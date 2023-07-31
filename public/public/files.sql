create table files
(
    id          uuid                     not null
        primary key,
    "mimeType"  varchar(255)             not null,
    size        integer                  not null,
    buffer      bytea                    not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null
);

alter table files
    owner to "default";

