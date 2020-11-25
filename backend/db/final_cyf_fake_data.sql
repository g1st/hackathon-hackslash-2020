drop table if exists cohort;
drop table if exists student;
drop table if exists module;
drop table if exists mentor;
drop table if exists score;
drop table if exists attendance;
drop table if exists users;

CREATE TABLE users (
id SERIAL PRIMARY KEY
name  VARCHAR(100) NOT NULL ,
email VARCHAR(100)NOT NULL,
password VARCHAR(200) NOT NULL
);

CREATE TABLE cohort (
name VARCHAR(50) PRIMARY KEY,
start_date  DATE NOT NULL,
end_date DATE NOT NULL
);


CREATE TABLE student(
  id  SERIAL PRIMARY KEY,
  name         VARCHAR(50),
  cohort_name     VARCHAR REFERENCES cohort(name),
  github        VARCHAR(50),
  email     VARCHAR(50)    
);

CREATE TABLE module (
  name    VARCHAR(40) PRIMARY KEY
);

CREATE TABLE mentor (
  id              SERIAL PRIMARY KEY,
  name    VARCHAR(50) ,
 email     VARCHAR(50),
 password  VARCHAR(200),
 subject  VARCHAR(40),
 cohort_name     VARCHAR REFERENCES cohort(name),
  module   VARCHAR REFERENCES module(name)
); 

CREATE TABLE score(
  score_id     SERIAL PRIMARY KEY,
  score int,
  comment      VARCHAR(1000) ,
  cohort_name     VARCHAR REFERENCES cohort(name),  
  student_id     INT REFERENCES student(id),
  module   VARCHAR REFERENCES module(name), 
  week   INT,
  date  DATE NOT NULL,
  mentor_id  INT REFERENCES mentor(id)
 );


CREATE TABLE attendance(
	id SERIAL PRIMARY KEY,
  status    VARCHAR(20),
  student_id     INT REFERENCES student(id),
cohort_name     VARCHAR REFERENCES cohort(name),
   week INT,
  module   VARCHAR REFERENCES module(name),
  mentor_id  INT REFERENCES mentor(id),
  date DATE NOT NULL
);

INSERT INTO cohort VALUES ('westmidlands1', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('westmidlands2', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('london1', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('london2', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('Scotland1', '2020-01-02', '2020-01-10');


INSERT INTO student (name, cohort_name, github, email) VALUES('Deniz','westmidlands1','Deniz','Deniz@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Gintaras','westmidlands1','Gintaras','Gintaras@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Davinder','westmidlands1','Davinder','Davinder@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Amanul','westmidlands1','cyfgithub','Amanul@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Hiba','westmidlands1','cyfgithub','Hiba@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Nouri','westmidlands1','cyfgithub','Nouri@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Hadiyah','westmidlands1','cyfgithub','Hadiyah@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Mursel','westmidlands1','cyfgithub','cyf@gmail.com');


INSERT INTO module VALUES('git and github');
INSERT INTO module VALUES('html-css');
INSERT INTO module VALUES('JavaScript core 1');
INSERT INTO module VALUES('JavaScript core 2');
INSERT INTO module VALUES('JavaScript core 3');
INSERT INTO module VALUES('React');
INSERT INTO module VALUES('Node');
INSERT INTO module VALUES('SQL');
INSERT INTO module VALUES('MongoDB');
INSERT INTO module VALUES('Final Projects');



INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark', 'mark@gmail.com', 'password', 'Technical skills','westmidlands1', 'git and github');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Jemil', 'jemil@gmail.com', 'password', 'Technical skills','westmidlands1', 'html-css');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nadir', 'nadir@gmail.com', 'password', 'Technical skills','westmidlands1', 'JavaScript core 1');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Wahab', 'wahab@gmail.com', 'password', 'Technical skills','westmidlands1', 'JavaScript core 2');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Emile', 'emile@gmail.com', 'password', 'Technical skills','westmidlands1', 'JavaScript core 3');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Martin', 'martin@gmail.com', 'password', 'Technical skills','westmidlands1', 'React');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nick', 'nick@gmail.com', 'password', 'Technical skills','westmidlands1', 'Node');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark.F', 'markf@gmail.com', 'password', 'Technical skills','westmidlands1', 'SQL');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Marcin', 'marcin@gmail.com', 'password', 'Technical skills','westmidlands1', 'MongoDB');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Claire', 'clair@gmail.com', 'password', 'Technical skills','westmidlands1', 'Final Projects');


INSERT INTO score (score,comment, cohort_name, student_id, module, week, date, mentor_id) VALUES (7,'Student did really well this week', 'westmidlands1', 1, 'html-css', 1, '2020-01-01', 1);
INSERT INTO score (score,comment, cohort_name, student_id, module, week, date, mentor_id) VALUES (2,'Student has low performance', 'westmidlands1', 2, 'React', 2, '2020-01-08', 2);
INSERT INTO score (score,comment, cohort_name, student_id, module, week, date, mentor_id) VALUES (9,'Student has missed some code', 'westmidlands1', 3, 'NodeJS', 3, '2020-01-15', 3);
INSERT INTO score (score,comment, cohort_name, student_id, module, week, date, mentor_id) VALUES (5,'Student did amazing this week', 'westmidlands1', 4, 'MongoDB', 1, '2020-02-01', 4);
INSERT INTO score (score,comment, cohort_name, student_id, module, week, date, mentor_id) VALUES (8,'Student did very well', 'westmidlands1', 5, 'Sql', 2, '2020-02-08', 5);
INSERT INTO score (score,comment, cohort_name, student_id, module, week, date, mentor_id) VALUES (9,'Student needs improves', 'westmidlands1', 6, 'JavaScript core 1', 3, '2020-02-15', 6);

INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',1,'html-css',1,'2020-01-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('no',2,'westmidlands1',2,'React',2,'2020-01-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('late',3,'westmidlands1',3,'React',3,'2020-01-15');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',4,'westmidlands1',1,'MongoDB',3,'2020-02-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('no',5,'westmidlands1',2,'Sql',4,'2020-02-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',6,'westmidlands1',3,'JavaScript core 1',5,'2020-02-15');



INSERT INTO users VALUES(1,'Hiba','hiba@yahoo.com',' $2b$10$dmm9x4XcBFPPqz5WqTGIUeu3DqzHEHRCU/MI01Ru0ihwuAvD99UGa')
INSERT INTO users VALUES(1,'Mursel','mursel@yahoo.com',' $2b$10$hFFPVUlRVXgLwsJ0RU8Tueg/awvz.MPD270QeecW.qCtNvX/aWat2')
INSERT INTO users VALUES(1,'Davinder','davinder@yahoo.com',' $2b$10$RAWB8u5qVkC2V2mD5Al1jOF9nQfMWIoY7Y1WRSZ53S.N7C0H/Fcpm')
INSERT INTO users VALUES(1,'Gintaras','gintaras@yahoo.com',' $2b$10$TKUAzbf516ou/yWRqNZFXephWMvj0..uP/3vJUGg2NG3GSMED80xa')
INSERT INTO users VALUES(1,'Hadiyah','hadiyah@yahoo.com',' $2b$10$6HBswsNlRkwOOfNOs0pBG.VxDKY8s4pjXbIsZhn2H01D6A7ReLEza')
INSERT INTO users VALUES(1,'Deniz','deniz@yahoo.com','$2b$10$Wa1UB5iKK.PBFRzZkTL8QuohTHDdvVlzCGs4o5jRf5buhmfHjWrqi')
INSERT INTO users VALUES(1,'Nouri','nouri@yahoo.com','$2b$10$JO0p0y0rozV/QotqSOpq.eKksVMc1xi9mmfWgceTzqDZEuobBTKE2')
INSERT INTO users VALUES(1,'Amanul','amanul@yahoo.com','$2b$10$zQqvR4YjGYfI75Q55Qx41eoDjQjmHoshgx9s59NDMsTA5SqLsVX36')











