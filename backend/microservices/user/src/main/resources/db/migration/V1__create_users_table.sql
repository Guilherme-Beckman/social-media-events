CREATE TABLE users(
	user_id UUID PRIMARY KEY UNIQUE,
	name VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	phone VARCHAR(30) NOT NULL,
	date_of_birth date NOT NULL,
	cpf VARCHAR(14) UNIQUE,
	gender VARCHAR(50),
	url_profile_picture TEXT,
	role varchar(50) NOT NULL,
	created_at TIMESTAMP NOT NULL
	
)