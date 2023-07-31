create table profiles
(
    id          uuid                                                   not null
        primary key,
    bio         varchar(255)                                           not null,
    "fullName"  varchar(255)                                           not null,
    email       varchar(255)                                           not null,
    "imageUrl"  varchar(255)                                           not null,
    "jobTitle"  varchar(255)                                           not null,
    role        enum_profiles_role default 'GUEST'::enum_profiles_role not null,
    "createdAt" timestamp with time zone                               not null,
    "updatedAt" timestamp with time zone                               not null
);

alter table profiles
    owner to "default";

