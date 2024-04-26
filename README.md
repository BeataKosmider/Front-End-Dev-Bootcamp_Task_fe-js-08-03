# Task performed during Front-End Developer Bootcamp
## 8.3

Nasza klasa Fruit oraz Apple ma za zadanie tworzyć pewien szablon, zebrać "do kupy" wspólne cechy pewnych elementów. Co jednak się stanie jeżeli podczas wywoływania konstruktorów Apple lub Fruit nie podamy wszystkich niezbędnych parametrów?

Powinniśmy zadbać o parę rzeczy:

- Jeżeli nie podasz nazwy jabłka/owoca, ustaw ją na "Unknown fruit"
- Jeżeli ktoś nie poda koloru, ustaw wartość na "Unknown color"
- Jeżeli ktoś nie poda poziomu słodkości, ustaw ją na 5
- Jeżeli ktoś poda poziom słodkości większy niż 10, ustaw go i tak na 10
- Jeżeli ktoś poda poziom słodkości mniejszy niż 0, ustaw go i tak na 0
- Jeżeli parametry goodForCider lub goodForJuice nie zostaną przekazane, ustaw je obie na false.
