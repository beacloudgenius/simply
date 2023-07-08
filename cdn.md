https://forum.ghost.org/t/rebuild-image-links-after-moving-from-subdomain-to-subdirectory/4696

https://stackoverflow.com/questions/4822638/find-and-replace-entire-mysql-database/4822691#4822691

sqldump to a text file, find/replace, re-import the sqldump.

Dump the database to a text file
mysqldump -u root -p[root_password] [database_name] > dumpfilename.sql

Restore the database after you have made changes to it.
mysql -u root -p[root_password] [database_name] < dumpfilename.sql

backup: #

mysqldump -u root -p[root_password] [database_name] > dumpfilename.sql

restore:#

mysql -u root -p[root_password] [database_name] < dumpfilename.sql

NOTE the direction of the >

there is no space between the -p and the password
