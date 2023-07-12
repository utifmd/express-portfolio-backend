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

 Date: 11/07/2023 19:21:49
*/


-- ----------------------------
-- Table structure for profile_links
-- ----------------------------
DROP TABLE IF EXISTS "public"."profile_links";
CREATE TABLE "public"."profile_links" (
  "id" uuid NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "github" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "instagram" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "linkedin" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "medium" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "resume" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "stackOverflow" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "twitter" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "profileId" uuid NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;
ALTER TABLE "public"."profile_links" OWNER TO "postgres";

-- ----------------------------
-- Records of profile_links
-- ----------------------------
BEGIN;
INSERT INTO "public"."profile_links" ("id", "email", "github", "instagram", "linkedin", "medium", "resume", "stackOverflow", "twitter", "profileId", "createdAt", "updatedAt") VALUES ('b68a1dd0-1693-42f0-bddf-684ad9473adc', 'mailto:utifmd@gmail.com', 'https://github.com/utifmd/', 'https://instagram/@utifmd', 'https://linkedin.com/in/utifmd', 'https://medium.com/@utifmd', 'https://www.canva.com/design/DAEwDqEOVBQ/E4W4OrSCSwUxUQLkhApu7Q/view?utm_content=DAEwDqEOVBQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', 'https://stackoverflow.com/users/6235678/utif-milkedori', 'https://twitter.com/utifmd/', 'ba4fc46d-b3e0-488c-91e0-a87db1700bbd', '2023-07-07 08:16:20.122+00', '2023-07-11 11:26:24.468+00');
COMMIT;

-- ----------------------------
-- Primary Key structure for table profile_links
-- ----------------------------
ALTER TABLE "public"."profile_links" ADD CONSTRAINT "profile_links_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table profile_links
-- ----------------------------
ALTER TABLE "public"."profile_links" ADD CONSTRAINT "profile_links_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."profiles" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
