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

 Date: 11/07/2023 19:22:00
*/


-- ----------------------------
-- Table structure for profiles
-- ----------------------------
DROP TABLE IF EXISTS "public"."profiles";
CREATE TABLE "public"."profiles" (
  "id" uuid NOT NULL,
  "bio" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "fullName" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "imageUrl" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "jobTitle" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "role" "public"."enum_profiles_role" NOT NULL DEFAULT 'GUEST'::enum_profiles_role,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;
ALTER TABLE "public"."profiles" OWNER TO "postgres";

-- ----------------------------
-- Records of profiles
-- ----------------------------
BEGIN;
INSERT INTO "public"."profiles" ("id", "bio", "fullName", "email", "imageUrl", "jobTitle", "role", "createdAt", "updatedAt") VALUES ('ba4fc46d-b3e0-488c-91e0-a87db1700bbd', 'sebab kau terlalu indah dari sekedar kata dunia berhenti sejenak menikmati indahmu', 'Virgoun last child', 'utifmd@gmail.com', 'http://127.0.0.1:5000/images/e475c565-f287-45fa-90aa-59b0b2ff1d4f.png', 'Saat kau telah mengerti', 'OWNER', '2023-07-07 07:44:06.572+00', '2023-07-11 11:26:06.42+00');
COMMIT;

-- ----------------------------
-- Primary Key structure for table profiles
-- ----------------------------
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");
