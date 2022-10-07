-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema drlomito
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema drlomito
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `drlomito` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `drlomito` ;

-- -----------------------------------------------------
-- Table `drlomito`.`categoria_vet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `drlomito`.`categoria_vet` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `categoria_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoria_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `drlomito`.`tipo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `drlomito`.`tipo_usuario` (
  `tipo_usuario_id` INT NOT NULL AUTO_INCREMENT,
  `tipo_usuario_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`tipo_usuario_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `drlomito`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `drlomito`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_nombre` VARCHAR(50) NOT NULL,
  `usuario_correo` VARCHAR(60) NOT NULL,
  `usuario_contrasena` VARCHAR(15) NOT NULL,
  `veterinario_imagen` LONGBLOB NULL DEFAULT NULL,
  `tipo_usuario_tipo_usuario_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `tipo_usuario_tipo_usuario_id`),
  INDEX `fk_usuarios_tipo_usuario1_idx` (`tipo_usuario_tipo_usuario_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `drlomito`.`contacto_vet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `drlomito`.`contacto_vet` (
  `contacto_id` INT NOT NULL AUTO_INCREMENT,
  `veterinario_direccion` VARCHAR(100) NOT NULL,
  `veterinario_telefono1` VARCHAR(10) NOT NULL,
  `veterinario_telefono2` VARCHAR(10) NOT NULL,
  `veterinario_horario_inicio` INT NOT NULL,
  `veterinario_horario_cierre` INT NOT NULL,
  `veterinario_atencion_urgencias` TINYINT NOT NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`contacto_id`, `usuarios_usuario_id`),
  INDEX `fk_contacto_vet_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `drlomito`.`info_veterinario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `drlomito`.`info_veterinario` (
  `info_veterinario_id` INT NOT NULL AUTO_INCREMENT,
  `veterinario_especialidad` VARCHAR(100) NOT NULL,
  `veterinario_calificacion` INT NOT NULL,
  `veterinario_descripcion` VARCHAR(700) NOT NULL,
  `veterinario_costo_consulta` DECIMAL(8,2) NOT NULL,
  `veterinario_servicios` VARCHAR(300) NOT NULL,
  `categoria_vet_categoria_id` INT NOT NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`info_veterinario_id`, `categoria_vet_categoria_id`, `usuarios_usuario_id`),
  INDEX `fk_info_veterinario_categoria_vet_idx` (`categoria_vet_categoria_id` ASC) VISIBLE,
  INDEX `fk_info_veterinario_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `drlomito`.`opiniones_vet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `drlomito`.`opiniones_vet` (
  `opiniones_id` INT NOT NULL AUTO_INCREMENT,
  `opiniones_nombre_autor` VARCHAR(50) NOT NULL,
  `opiniones_calificacion` INT NOT NULL,
  `opiniones_comentario` VARCHAR(300) NOT NULL,
  `usuarios_usuario_id` INT NOT NULL,
  PRIMARY KEY (`opiniones_id`, `usuarios_usuario_id`),
  INDEX `fk_opiniones_vet_usuarios1_idx` (`usuarios_usuario_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
