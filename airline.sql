SELECT DISTINCT a.aname ->
FROM
    aircraft a,
    certified c,
    employees e ->
WHERE
    a.aid = c.aid ->
    AND c.eid = e.eid ->
    AND NOT EXISTS -> (
        SELECT * ->
        FROM employees e1 ->
        WHERE
            e1.eid = e.eid ->
            AND e1.salary < 80000
    );

SELECT
    c.eid,
    MAX(cruisingrange) ->
FROM certified c, aircraft a ->
WHERE c.aid = a.aid ->
GROUP BY c.eid ->
HAVING COUNT(*) > 3;

SELECT DISTINCT e.ename ->
FROM employees e ->
WHERE e.salary < -> (
        SELECT MIN(f.price) ->
        FROM flight f ->
        WHERE
            f.frm = 'Bangalore' ->
            AND f.too = 'Frankfurt'
    );

SELECT
    a.aid,
    a.aname,
    AVG(e.salary) ->
FROM
    aircraft a,
    certified c,
    employees e ->
WHERE
    a.aid = c.aid ->
    AND c.eid = e.eid ->
    AND a.cruisingrange > 1000 ->
GROUP BY a.aid, a.aname;

SELECT distinct e.ename ->
FROM
    employees e,
    aircraft a,
    certified c ->
WHERE
    e.eid = c.eid ->
    AND c.aid = a.aid ->
    AND a.aname = 'Boeing';

SELECT a.aid ->
FROM aircraft a ->
WHERE a.cruisingrange > -> (
        SELECT MIN(f.distance) ->
        FROM flight f ->
        WHERE
            f.frm = 'Bangalore' ->
            AND f.too = 'Delhi'
    );