create database testes;
use testes;

drop table numeros;

create table numeros (
id int primary key auto_increment,
rng decimal(5,3),
dia char(10),
hora char(8)
);

select * from numeros;