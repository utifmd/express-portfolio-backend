create table experiences
(
    id            uuid                                                                not null
        primary key,
    "demoUrl"     varchar(255),
    description   text                                                                not null,
    "iconUrl"     varchar(255)                                                        not null,
    "imageUrls"   varchar(255)[],
    platform      enum_experiences_platform default 'WEB'::enum_experiences_platform  not null,
    "releasedUrl" varchar(255)                                                        not null,
    stack         varchar(255)[]                                                      not null,
    title         varchar(255)                                                        not null,
    type          enum_experiences_type     default 'BACK-END'::enum_experiences_type not null,
    "createdAt"   timestamp with time zone                                            not null,
    "updatedAt"   timestamp with time zone                                            not null
);

alter table experiences
    owner to "default";

