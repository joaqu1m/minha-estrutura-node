drop database if exists testes;
create database testes;
use testes;

create table numeros (
id int primary key auto_increment,
rng decimal(5,3),
dia char(10),
hora char(8)
);

insert into numeros (rng, dia, hora) values (23.123, '2019-01-01', '24:00:00');

select * from numeros;
