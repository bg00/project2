/*
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database
 or tables setup already.
*/


/* Create and use the runner_tracker db */


DROP DATABASE IF EXISTS `runner_tracker_db`;
CREATE DATABASE `runner_tracker_db`;
USE `runner_tracker_db`;

CREATE TABLE loginDB (
    `id` INT AUTO_INCREMENT NOT NULL ,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE register (
    `id` INT AUTO_INCREMENT NOT NULL,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `dob` DATE NOT NULL,
    `height` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,
    `age` INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE displayHome (
    `id` INT AUTO_INCREMENT NOT NULL, 
    `register_id` INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(register_id) REFERENCES register(id) ON DELETE CASCADE
);

CREATE TABLE progress(
    `id` INT AUTO_INCREMENT NOT NULL,
    `caloriesBurnt` INT NOT NULL,
    `milesRun` INT NOT NULL,
    `date` DATE,
    `register_id` INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(register_id) REFERENCES register(id) ON DELETE CASCADE
);

CREATE TABLE community(
    `id` INT AUTO_INCREMENT NOT NULL,
    `motivationMessage` VARCHAR(255) NOT NULL,
    `register_id` INTEGER NOT NULL,
    `progress_id` INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(register_id) REFERENCES register(id) ON DELETE CASCADE,
    FOREIGN KEY(progress_id) REFERENCES progress(id) ON DELETE CASCADE
);
