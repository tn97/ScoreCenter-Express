
CREATE DATABASE scorecenterdb;


USE scorecenterdb;

CREATE TABLE fanChat (
  id INTEGER NOT NULL AUTO_INCREMENT,
  userName varchar(25) NOT NULL,
  userMessage text (250) NOT NULL,
  userMessageTime varchar(100) NOT NULL,
  teams varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE teams (
    id int NOT NULL AUTO_INCREMENT,
 city varchar(255) NOT NULL,
 team_name varchar(255) NOT NULL,
 abbreviation varchar(255) NOT NULL,
    home_venue varchar(255) NOT NULL,
 wins int NOT NULL,
 losses int NOT NULL,
 ties int NOT NULL,
 record int NOT NULL,
 score int NOT NULL,
 division varchar(255) NOT NULL,
 ranking int NOT NULL,
    is_home BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE roster (
id INT NOT NULL AUTO_INCREMENT,
jerseyNumber INT NOT NULL,
playerName VARCHAR(100) NOT NULL,
team VARCHAR(100) NOT NULL,
position VARCHAR(50) NOT NULL,
height INT NOT NULL,
weight INT NOT NULL,
age INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE posts (
id INT NOT NULL AUTO_INCREMENT,
user VARCHAR(15) NOT NULL,
post_subject VARCHAR(100) NOT NULL,
post_message VARCHAR(500) NOT NULL,
post_submit_time VARCHAR(50) NOT NULL,
team VARCHAR(25) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE matchups (
id INTEGER NOT NULL AUTO_INCREMENT,
homeTeam varchar(30) NOT NULL,
awayTeam varchar(30) NOT NULL,
gameTimeDate varchar(70) NOT NULL,
week varchar(10) NOT NULL,
homeScore integer(5) NOT NULL,
awayScore integer(5) NOT NULL,
homeRecord integer(5) NOT NULL,
awayRecord integer(5) NOT NULL,
PRIMARY KEY (id)
);