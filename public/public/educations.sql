create table educations
(
    id          uuid                     not null
        primary key,
    title       varchar(255)             not null,
    "desc"      text                     not null,
    content     text                     not null,
    "fileUrl"   varchar(255)             not null,
    "imageUrl"  varchar(255)             not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null
);

alter table educations
    owner to "default";

