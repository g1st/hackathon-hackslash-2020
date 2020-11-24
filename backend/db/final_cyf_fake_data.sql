drop table if exists users;
drop table if exists cohort;
drop table if exists student;
drop table if exists module;
drop table if exists mentor;
drop table if exists score;
drop table if exists attendance;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name  VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password  VARCHAR(200) NOT NULL
);

CREATE TABLE cohort (
name              VARCHAR(50) PRIMARY KEY,
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
  week  INT,
  module   VARCHAR REFERENCES module(name),
  mentor_id  INT REFERENCES mentor(id),
  date DATE NOT NULL
);

INSERT INTO cohort VALUES ('westmidlands1', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('westmidlands2', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('london1', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('london2', '2020-01-02', '2020-01-10');
INSERT INTO cohort VALUES ('Scotland1', '2020-01-02', '2020-01-10');


INSERT INTO student (name, cohort_name, github, email) VALUES('Deniz','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Gintaras','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Davinder','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Amanul','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Hiba','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Nouri','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Hadiyah','westmidlands1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Mursel','westmidlands1','cyfgithub','cyf@gmail.com');


INSERT INTO student (name, cohort_name, github, email) VALUES('Atanas','westmidlands2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Aaishah','westmidlands2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Claire','westmidlands2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Shukri','westmidlands2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('EMile','westmidlands2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Nick','westmidlands2','cyfgithub','cyf@gmail.com');

INSERT INTO student (name, cohort_name, github, email) VALUES('Adebola','london1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Berhane','london1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Leroy','london1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Denis','london1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Wahab','london1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Mark','london1','cyfgithub','cyf@gmail.com');

INSERT INTO student (name, cohort_name, github, email) VALUES('Ali','london2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Ben','london2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Daniel','london2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Ebenezer','london2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Edgar','london2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Ekip','london2','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Ellie','london2','cyfgithub','cyf@gmail.com');

INSERT INTO student (name, cohort_name, github, email) VALUES('Gabriel','Scotland1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Gennady','Scotland1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Hussain','Scotland1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Jacques','Scotland1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Lola','Scotland1','cyfgithub','cyf@gmail.com');
INSERT INTO student (name, cohort_name, github, email) VALUES('Martin','Scotland1','cyfingithub','cyf@gmail.com');





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






INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark', 'cyf@gmail.com', 'password', 'Personal Development','westmidlands1', 'git and github');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Jemil', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'html-css');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nadir', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'JavaScript core 1');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Wahab', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'JavaScript core 2');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Emile', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'JavaScript core 3');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Martin', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'React');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nick', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'Node');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark.F', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'SQL');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Marcin', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'MongoDB');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Claire', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands1', 'Final Projects');




INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark', 'cyf@gmail.com', 'password', 'Personal Development','westmidlands2', 'git and github');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Jemil', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'html-css');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nadir', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'JavaScript core 1');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Wahab', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'JavaScript core 2');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Emile', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'JavaScript core 3');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Martin', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'React');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nick', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'Node');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark.F', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'SQL');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Marcin', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'MongoDB');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Claire', 'cyf@gmail.com', 'password', 'Technical skills','westmidlands2', 'Final Projects');






INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark', 'cyf@gmail.com', 'password', 'Personal Development','london1', 'git and github');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Jemil', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'html-css');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nadir', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'JavaScript core 1');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Wahab', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'JavaScript core 2');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Emile', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'JavaScript core 3');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Martin', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'React');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nick', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'Node');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark.F', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'SQL');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Marcin', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'MongoDB');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Claire', 'cyf@gmail.com', 'password', 'Technical skills','london1', 'Final Projects');





INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark', 'cyf@gmail.com', 'password', 'Personal Development','london2', 'git and github');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Jemil', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'html-css');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nadir', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'JavaScript core 1');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Wahab', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'JavaScript core 2');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Emile', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'JavaScript core 3');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Martin', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'React');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nick', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'Node');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark.F', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'SQL');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Marcin', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'MongoDB');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Claire', 'cyf@gmail.com', 'password', 'Technical skills','london2', 'Final Projects');




INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark', 'cyf@gmail.com', 'password', 'Personal Development','Scotland1', 'git and github');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Jemil', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'html-css');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nadir', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'JavaScript core 1');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Wahab', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'JavaScript core 2');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Emile', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'JavaScript core 3');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Martin', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'React');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Nick', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'Node');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Mark.F', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'SQL');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Marcin', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'MongoDB');
INSERT INTO mentor (name, email, password, subject, cohort_name, module) VALUES ('Claire', 'cyf@gmail.com', 'password', 'Technical skills','Scotland1', 'Final Projects');





INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 1, 'html-css', 1, '2020-01-01', 2);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 1, 'html-css', 2, '2020-01-08', 2);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 1, 'html-css', 3, '2020-01-15', 2);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 1, 'JavaScript core 1', 1, '2020-02-01', 3);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 1, 'JavaScript core 1', 2, '2020-02-08', 3);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 1, 'JavaScript core 1', 3, '2020-02-15', 3);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 1, 'React', 1, '2020-03-01', 6);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 1, 'React', 2, '2020-03-08', 6);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 1, 'React', 3, '2020-03-15', 6);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 1, 'SQL', 1, '2020-04-01', 8);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 1, 'SQL', 2, '2020-04-08', 8);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 1, 'SQL', 3, '2020-04-15', 8);

















INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 2, 'html-css', 1, '2020-01-01', 2);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 2, 'html-css', 2, '2020-01-08', 2);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 2, 'html-css', 3, '2020-01-15', 2);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 2, 'JavaScript core 1', 1, '2020-02-01', 3);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 2, 'JavaScript core 1', 2, '2020-02-08', 3);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 2, 'JavaScript core 1', 3, '2020-02-15', 3);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 2, 'React', 1, '2020-03-01', 6);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 2, 'React', 2, '2020-03-08', 6);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 2, 'React', 3, '2020-03-15', 6);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 2, 'SQL', 1, '2020-04-01', 8);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 2, 'SQL', 2, '2020-04-08', 8);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 2, 'SQL', 3, '2020-04-15', 8);
























INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 3, 'html-css', 1, '2020-01-01', 2);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 3, 'html-css', 2, '2020-01-08', 2);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did really well this week', 'westmidlands1', 3, 'html-css', 3, '2020-01-15', 2);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 3, 'JavaScript core 1', 1, '2020-02-01', 3);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 3, 'JavaScript core 1', 2, '2020-02-08', 3);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Student did amazing this week', 'westmidlands1', 3, 'JavaScript core 1', 3, '2020-02-15', 3);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 3, 'React', 1, '2020-03-01', 6);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 3, 'React', 2, '2020-03-08', 6);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Impressed with this week work', 'westmidlands1', 3, 'React', 3, '2020-03-15', 6);


INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 3, 'SQL', 1, '2020-04-01', 8);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 3, 'SQL', 2, '2020-04-08', 8);
INSERT INTO score (comment, cohort_name, student_id, module, week, date, mentor_id) VALUES ('Hard Worker', 'westmidlands1', 3, 'SQL', 3, '2020-04-15', 8);












INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',1,'html-css',2,'2020-01-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',2,'html-css',2,'2020-01-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',3,'html-css',2,'2020-01-15');



INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',1,'JavaScript core 1',3,'2020-02-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',2,'JavaScript core 1',3,'2020-02-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',3,'JavaScript core 1',3,'2020-02-15');



INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',1,'React',6,'2020-03-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',2,'React',6,'2020-03-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',3,'React',6,'2020-03-15');


INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',1,'SQL',8,'2020-04-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',2,'SQL',8,'2020-04-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',1,'westmidlands1',3,'SQL',8,'2020-04-15');










INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',1,'html-css',2,'2020-01-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',2,'html-css',2,'2020-01-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',3,'html-css',2,'2020-01-15');



INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',1,'JavaScript core 1',3,'2020-02-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',2,'JavaScript core 1',3,'2020-02-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',3,'JavaScript core 1',3,'2020-02-15');



INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',1,'React',6,'2020-03-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',2,'React',6,'2020-03-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',3,'React',6,'2020-03-15');


INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',1,'SQL',8,'2020-04-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',2,'SQL',8,'2020-04-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',2,'westmidlands1',3,'SQL',8,'2020-04-15');











INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',1,'html-css',2,'2020-01-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',2,'html-css',2,'2020-01-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',3,'html-css',2,'2020-01-15');



INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',1,'JavaScript core 1',3,'2020-02-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',2,'JavaScript core 1',3,'2020-02-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',3,'JavaScript core 1',3,'2020-02-15');



INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',1,'React',6,'2020-03-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',2,'React',6,'2020-03-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',3,'React',6,'2020-03-15');


INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',1,'SQL',8,'2020-04-01');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',2,'SQL',8,'2020-04-08');
INSERT INTO attendance (status, student_id,cohort_name ,week, module, mentor_id, date) VALUES ('yes',3,'westmidlands1',3,'SQL',8,'2020-04-15');




















