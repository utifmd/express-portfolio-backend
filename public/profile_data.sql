/*
 Navicat Premium Data Transfer

 Source Server         : db-postgres
 Source Server Type    : PostgreSQL
 Source Server Version : 150003 (150003)
 Source Host           : 0.0.0.0:5432
 Source Catalog        : portfolio_dev_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150003 (150003)
 File Encoding         : 65001

 Date: 11/07/2023 19:17:39
*/


-- ----------------------------
-- Table structure for profile_data
-- ----------------------------
DROP TABLE IF EXISTS "public"."profile_data";
CREATE TABLE "public"."profile_data" (
  "id" uuid NOT NULL,
  "description" text COLLATE "pg_catalog"."default" NOT NULL,
  "title" text COLLATE "pg_catalog"."default" NOT NULL,
  "type" "public"."enum_profile_data_type" NOT NULL DEFAULT 'INTRO'::enum_profile_data_type,
  "profileId" uuid NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;
ALTER TABLE "public"."profile_data" OWNER TO "postgres";

-- ----------------------------
-- Records of profile_data
-- ----------------------------
BEGIN;
INSERT INTO "public"."profile_data" ("id", "description", "title", "type", "profileId", "createdAt", "updatedAt") VALUES ('9b718037-20c9-45c5-bbad-87401dec6cae', 'Some of the projects we are building include android mobile application, web application, multi platform development such as react by facebook and so on, but for now we are focusing on developing android applications, telah habis sudah cinta ini.', 'Stuff I do', 'HABIT', 'ba4fc46d-b3e0-488c-91e0-a87db1700bbd', '2023-07-07 07:46:11.255+00', '2023-07-11 11:28:31.489+00');
INSERT INTO "public"."profile_data" ("id", "description", "title", "type", "profileId", "createdAt", "updatedAt") VALUES ('28cd921f-18ff-41d3-b2cd-c5b356ecda21', 'I am a self-taught generalist software engineer with strong passion to learn new things. I am familiar with a few Java, Kotlin android using android studio & Node JS frameworks as a cross mobile platform, and I also have developed backend API for a production system using native & framework. Currently I am interested and learning about Machine learning development using python. I also enjoy to play guitar on my spare time.', 'Who I am', 'INTRO', 'ba4fc46d-b3e0-488c-91e0-a87db1700bbd', '2023-07-07 07:47:20.292+00', '2023-07-11 11:26:47.234+00');
COMMIT;

-- ----------------------------
-- Primary Key structure for table profile_data
-- ----------------------------
ALTER TABLE "public"."profile_data" ADD CONSTRAINT "profile_data_pkey" PRIMARY KEY ("id");
