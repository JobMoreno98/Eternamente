create DATABASE if not exists taskDataBase;
use taskDataBase;
create table if not exists task(
    id int not null auto_increment,
    title varchar(255),
    description text;
    primary key (id)
);

insert into task (title,description) values('task 1','descripcion'),
('task 2','descripcion 2')