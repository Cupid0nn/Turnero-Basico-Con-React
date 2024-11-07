-- CREATE TABLE personas (
--     id SERIAL PRIMARY KEY,
--     apellido VARCHAR(255) NOT NULL,
--     nombre VARCHAR(255) UNIQUE,
--     rating INTEGER,
--     CONSTRAINT rating_check CHECK (rating >= 1 AND rating <= 10)
--     );


--SELECT * FROM ciudades;


-- SELECT * FROM personas;


-- INSERT INTO ciudades (id,nombre) VALUES (999,'spingfield');


-- INSERT INTO personas (id, nombre, apellido, rating) VALUES (999, 'Jorge', 'Gonzalez', 10);


-- UPDATE personas SET nombre = 'Jorge V2', apellido = 'Gonzalez', rating = 10 WHERE id = 999

ALTER TABLE personas ADD COLUMN ciudades_id VARCHAR(255) ADD CONSTRAINT fk_ciudades FOREIGN KEY (ciudades_id) REFERENCES ciudades(id)