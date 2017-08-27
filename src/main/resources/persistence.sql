create table BOOKS (
  id int not null auto_increment,
  title varchar(70) not null,
  author varchar(70) not null,
  primary key (id)
);

create table USERS (
  id int not null auto_increment,
  username varchar(20) not null,
  password varchar(100) not null,
  role varchar(20) not null,
  primary key (id)
);
