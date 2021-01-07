create table "user" (
id  			bigserial 		not null
				constraint user_pkey
				primary key, 
address 		varchar(255), 
city 			varchar(255), 
company 		varchar(255), 
country 		varchar(255), 
created_at 		timestamp, 
created_by 		int8, 
date_of_birth 	varchar(255), 
email 			varchar(255), 
first_name 		varchar(255), 
last_name 		varchar(255), 
mobile 			varchar(255), 
password_hash 	varchar(255), 
role 			varchar(255), 
state		 	varchar(255), 
updated_at 		timestamp, 
updated_by 		int8, 
zip_code 		varchar(255) 
);