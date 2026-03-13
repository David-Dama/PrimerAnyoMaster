-- 1. Escribe una consulta que recupere los Vuelos (flights) y su identificador que figuren con status On Time.
SELECT flight_id, flight_no
  FROM flights
  WHERE status = 'On Time';
-- 2. Escribe una consulta que extraiga todas las columnas de la tabla bookings y refleje todas las reservas que han
-- supuesto una cantidad total mayor a 1.000.000 (Unidades monetarias).
SELECT *
  FROM bookings
  WHERE total_amount > 1000000;
-- 3. Escribe una consulta que extraiga todas las columnas de los datos de los modelos de aviones disponibles
-- (aircraft_data). Puede que os aparezca en alguna actualización como "aircrafts_data", revisad las tablas y
-- elegid la que corresponda.
SELECT *
  FROM aircrafts_data;
-- 4. Con el resultado anterior visualizado previamente, escribe una consulta que extraiga los identificadores
-- de vuelo que han volado con un Boeing 737. (Código Modelo Avión = 733)
SELECT *
  FROM aircrafts_data
  WHERE aircraft_code = '773';
-- 5. Escribe una consulta que te muestre la información detallada de los tickets que han comprado las personas
-- que se llaman Irina.
SELECT *
  FROM tickets
  WHERE passenger_name LIKE 'IRINA %';
-- 6. Mostrar las ciudades con más de un aeropuerto.
SELECT city
  FROM airports_data
  GROUP BY city
  HAVING 1 < count(*);
-- 7. Mostrar el número de vuelos por modelo de avión.
SELECT ad.aircraft_code AS model, count(*) AS numVuelos
  FROM flights f
       INNER JOIN aircrafts_data ad ON ad.aircraft_code = f.aircraft_code
  GROUP BY ad.aircraft_code;
-- 8. Reservas con más de un billete (varios pasajeros).
SELECT book_ref AS billete, count(*)
  FROM tickets
  GROUP BY book_ref
  HAVING count(*) > 1;
-- 9. Vuelos con retraso de salida superior a una hora.
SELECT flight_id
  FROM flights
  WHERE (actual_departure - scheduled_departure) > INTERVAL '1 hour';