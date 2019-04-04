SET NAMES UTF8;
DROP DATABASE IF EXISTS battle;
CREATE DATABASE battle CHARSET=UTF8;
USE battle;
CREATE TABLE forum(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    uname VARCHAR(12),
    title VARCHAR(20),
    contant VARCHAR(100),
    time INT,
    game INT,
    type INT,
    clicks INT
);
INSERT INTO forum VALUES(NULL,1,'Tom','里弗斯战斗模式安装没选项','刷了一天的材料做出来战斗模式 ，召唤出来里弗斯安装后没有反应，选项里面没有变成战斗模式，什么情况？材料还都没',1551083634,1,1,3);
CREATE TABLE reply(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    fid INT,
    uname VARCHAR(12),
    contant VARCHAR(100),
    time INT,
    lead INT
);
INSERT INTO reply VALUES(NULL,1,'JERRY','里弗斯模块：驾驶战斗模式无法在战斗中使用也无法在破碎群岛以外的地图中使用哦，还请留意',1551084500,NULL);
INSERT INTO reply VALUES(NULL,1,'JACK','这位代表说的很对',1551084990,1);