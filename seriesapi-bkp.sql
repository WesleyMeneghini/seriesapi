CREATE DATABASE  IF NOT EXISTS `seriesapi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `seriesapi`;
-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: seriesapi
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sinopse` varchar(500) NOT NULL,
  `ano_lancamento` year(4) NOT NULL,
  `temporadas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (31,'Vikings','A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.',2013,6),(32,'Ragnarök','Ragnarök Online é um MMORPG desenvolvido pela empresa sul-coreana Gravity Corp. Os cenários, mitos e lendas do jogo, foram baseados, inicialmente, no manhwa Ragnarök de Lee Myung-Jin. Ragnarök Online foi o primeiro jogo online coreano a ser exportado com sucesso a outros países. ',2002,1),(33,'Grey\'s Anatomy','Um grupo de jovens médicos do Hospital Seattle Grace e suas carreiras como residentes. Um dos médicos, que se esforça para se relacionar com seus colegas, é a filha de um famoso cirurgião.',2005,16),(34,'O Mundo Sombrio de Sabrina','Chilling Adventures of Sabrina é uma série de televisão americana de terror sobrenatural desenvolvida por Roberto Aguirre-Sacasa para a Netflix, sendo baseada na série de histórias em quadrinhos de mesmo nome. A série é produzida pela Warner Bros. Television, em associação com a Berlanti Productions e a Archie Comics.',2018,2),(35,'The Act','The Act é uma série de televisão de drama criminal americana que estreou em 20 de março de 2019, no Hulu.',2019,1),(36,'Locke & Key','Locke & Key é uma série americana de televisão sobrenatural de drama de terror desenvolvida por Carlton Cuse, Meredith Averill e Aron Eli Coleite, baseada na série de quadrinhos de mesmo nome de Joe Hill e Gabriel Rodríguez, que estreou no Netflix em 7 de fevereiro de 2020.',2020,1),(42,'Fear the Walking Dead','Ambientada em Los Angeles, a série mostra o começo do apocalipse zumbi e a temível desintegração da sociedade pelos olhos de uma família disfuncional, que precisa se unir para tentar sobreviver ao caos do fim dos tempos.',2015,4),(43,'Prison Break','Michael Scofield é um homem desesperado numa situação desesperadora. Seu irmão, Lincoln Burrows, que foi condenado por um crime que não cometeu, é colocado no corredor da morte.',2005,5),(44,'wesley teste','sdkjkdjksjd',2016,5);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Wesley','wesley@gmail.com','123456'),(3,'ss','wesley@gmail.coms','123456'),(6,'ss','wesley@gmail.comaa','123456'),(7,'Eduarda','eduarda@gmail.com','12345678'),(8,'Eduarda','eduarda1@gmail.com','12345678'),(9,'Eduardo','eduardo@gmail.com','12345678'),(10,'Eduardo','eduardo1@gmail.com','12345678'),(11,'Eduardo2','eduardo2@gmail.com','$2a$10$XYeM1zDrtEtrpnjOmTOB9.yNy0HOluOaOH5Umc1QgUDoAms8Plpzm');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-14 16:47:53
