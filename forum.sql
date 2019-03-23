DROP DATABASE IF EXISTS battle;
CREATE DATABASE battle;
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
    clicks INT,
);
INSERT INTO forum(NULL,1,'Tom','里弗斯战斗模式安装没选项','刷了一天的材料做出来战斗模式 ，召唤出来里弗斯安装后没有反应，选项里面没有变成战斗模式，什么情况？材料还都没',1551083634,1,1,3);
CREATE TABLE reply(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    fid INT,
    uname VARCHAR(12),
    contant VARCHAR(100),
    time INT,
    type BOOLEAN,
    lead VARCHAR(100),
);