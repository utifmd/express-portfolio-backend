create table profile_data
(
    id          uuid                                                           not null
        primary key,
    description text                                                           not null,
    title       text                                                           not null,
    type        enum_profile_data_type default 'INTRO'::enum_profile_data_type not null,
    "profileId" uuid                                                           not null
        references profiles
            on update cascade on delete cascade,
    "createdAt" timestamp with time zone                                       not null,
    "updatedAt" timestamp with time zone                                       not null
);

alter table profile_data
    owner to "default";

