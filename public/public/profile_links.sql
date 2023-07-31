create table profile_links
(
    id              uuid                     not null
        primary key,
    email           varchar(255)             not null,
    github          varchar(255)             not null,
    instagram       varchar(255)             not null,
    linkedin        varchar(255)             not null,
    medium          varchar(255)             not null,
    resume          varchar(255)             not null,
    "stackOverflow" varchar(255)             not null,
    twitter         varchar(255)             not null,
    "profileId"     uuid                     not null
        references profiles
            on update cascade on delete cascade,
    "createdAt"     timestamp with time zone not null,
    "updatedAt"     timestamp with time zone not null
);

alter table profile_links
    owner to "default";

