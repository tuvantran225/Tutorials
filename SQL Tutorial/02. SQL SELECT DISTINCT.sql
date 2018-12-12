SELECT Country FROM Customers;

SELECT DISTINCT Country FROM Customers;

SELECT COUNT(DISTINCT Country) FROM Customers;

SELECT COUNT(Country) AS DistinctCountries FROM (SELECT DISTINCT Country FROM Customers) temp;