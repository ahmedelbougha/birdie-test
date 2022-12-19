-- MySQL dump 10.13  Distrib 5.7.39, for Linux (x86_64)
--
-- Host: localhost    Database: birdie
-- ------------------------------------------------------
-- Server version	5.7.39-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `payload` json NOT NULL,
  `alert_id` char(36) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.alert_id'))) VIRTUAL,
  `task_instance_id` char(255) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.task_instance_id'))) VIRTUAL,
  `visit_id` char(36) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.visit_id'))) VIRTUAL,
  `caregiver_id` char(36) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.caregiver_id'))) VIRTUAL,
  `payload_as_text` text COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$'))) VIRTUAL,
  `rejected_event_id` char(255) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.rejected_event_id'))) VIRTUAL,
  `observation_event_id` char(255) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.observation_event_id'))) VIRTUAL,
  `timestamp` varchar(50) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.timestamp'))) VIRTUAL,
  `id` char(36) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.id'))) VIRTUAL,
  `event_type` varchar(50) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.event_type'))) VIRTUAL,
  `care_recipient_id` char(36) COLLATE utf8mb4_unicode_ci GENERATED ALWAYS AS (json_unquote(json_extract(`payload`,'$.care_recipient_id'))) VIRTUAL,
  KEY `idx_events_alert_id` (`alert_id`),
  KEY `idx_events_task_instance_id` (`task_instance_id`),
  KEY `idx_events_visit_id` (`visit_id`),
  KEY `idx_caregiver_id` (`caregiver_id`),
  KEY `idx_events_rejected_event_id` (`rejected_event_id`),
  KEY `idx_events_observation_event_id` (`observation_event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--
-- WHERE:  1 limit 5

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` (`payload`) VALUES ('{\"id\": \"00114a9f-00dc-4f39-a6ac-af1b7e0543e7\", \"fluid\": \"caffeinated\", \"observed\": false, \"visit_id\": \"5cc23bf0-8b66-f8a8-4339-688e1d43e11a\", \"timestamp\": \"2019-04-26T07:08:21.758Z\", \"event_type\": \"fluid_intake_observation\", \"caregiver_id\": \"220d9432-b5ed-4c81-8709-434899d2cd1b\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"consumed_volume_ml\": 230}'),('{\"id\": \"006139b8-a387-4529-9280-2d798c500aeb\", \"visit_id\": \"5cd753f0-8b66-f8a8-4591-3f78ca3f9c45\", \"timestamp\": \"2019-05-12T07:23:12.789Z\", \"event_type\": \"task_completed\", \"caregiver_id\": \"5c9090ab-7d5e-4a72-8bf7-197190ad4c98\", \"task_instance_id\": \"dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=\", \"task_schedule_id\": \"f256baea-c812-4cec-9514-0c79b3cfd033\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"task_definition_id\": \"1bf3b81d-40b0-4539-ba96-9ea12ad6110b\", \"task_schedule_note\": \"Please assist me to brush my teeth\", \"task_definition_description\": \"Assist with oral hygiene\"}'),('{\"id\": \"0099ecb2-07bb-4b93-bd56-be485d62f22c\", \"visit_id\": \"5ccb7670-8b66-f8a8-48ca-1c06125a9c4c\", \"timestamp\": \"2019-05-03T07:24:10.276Z\", \"event_type\": \"task_completed\", \"caregiver_id\": \"5c9090ab-7d5e-4a72-8bf7-197190ad4c98\", \"task_instance_id\": \"dHw2ZGRhZGVkMC1lZjk0LTQ1N2ItYjViMi01NDVhM2JkM2Q0YzF8MjAxOS0wNS0wM1QwNzowMDowMC4wMDBafE1PUk5JTkc=\", \"task_schedule_id\": \"6ddaded0-ef94-457b-b5b2-545a3bd3d4c1\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"task_definition_id\": \"9ac88364-79c5-4f1d-9767-5e65f16a0711\", \"task_schedule_note\": \"Empty the bins if required.\", \"task_definition_description\": \"Ensure home is clean and tidy\"}'),('{\"id\": \"00eddd6e-fd70-44a0-9427-bab0c1c28e94\", \"fluid\": \"caffeinated\", \"observed\": false, \"visit_id\": \"5cc8d370-8b66-f8a8-44c5-927e26c9af15\", \"timestamp\": \"2019-05-01T07:25:29.928Z\", \"event_type\": \"fluid_intake_observation\", \"caregiver_id\": \"17541b2e-710d-430f-a0a3-2fb4a3285946\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\", \"consumed_volume_ml\": 230}'),('{\"id\": \"00f22927-0f3b-4b7e-aa7a-4659699ed124\", \"note\": \"[redacted] is well. \", \"visit_id\": \"5cd4b0f0-8b66-f8a8-4900-34da6bf2e11e\", \"timestamp\": \"2019-05-10T15:24:05.419Z\", \"event_type\": \"physical_health_observation\", \"caregiver_id\": \"ca216495-6806-4ecb-974d-e7ece2e9e5b5\", \"care_recipient_id\": \"df50cac5-293c-490d-a06c-ee26796f850d\"}');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 21:41:41
