const commonWords = [
    'Iceberg', 'Dieta', 'Vaso', 'Terraza', 'Sorpresa', 'Mono', 'Cleopatra', 'Ogro', 'Italiano', 'Leyenda',
    'Leyendo', 'Planchado', 'Violin', 'Comedia musical', 'Calcetin', 'Toy Story', 'Cuervo', 'Muñeco de nueve',
    'Cocodrilo', 'Salon', 'Perro', 'Animal', 'Jirafa', 'Muerte', 'Voto', 'Enfermedad', 'Montaña', 'Invierno',
    'Ratón', 'Colonia', 'Pirámide', 'Dinosaurio', 'Circuito', 'Universo', 'Teatro', 'Aventura', 'Catarata',
    'Misterio', 'Pintura', 'Reloj', 'Selva', 'Luz', 'Viaje', 'Sombra', 'Libro', 'Piano',
    'Cielo', 'Fuego', 'Mañana', 'Océano', 'Telescopio', 'Secreta', 'Islandia', 'Joya', 'Té', 'Espejo', 'Reina',
    'Camino', 'Cuchillo', 'Rana', 'Nube', 'Almohada', 'Bosque', 'Río', 'Casa', 'Cima', 'Zanahoria',
    'Ángel', 'Máquina', 'Guitarra', 'Vuelo', 'Estrella', 'Torre', 'Escalera', 'Nieve', 'Planeta', 'Fantasma',
    'Sueño', 'Jardín', 'Ojo', 'Llave', 'Caracol', 'Nido', 'Mariposa', 'Mundo', 'Cámara', 'Tigre', 'Fiesta', 'Tren',
    'Astronauta', 'Cuerda', 'Flecha', 'Tierra', 'Burbuja', 'Circulo', 'Sonrisa', 'Caballero', 'Marinero', 'Rueda',
    'Canción', 'Avión', 'Escudo', 'Abeja', 'Piedra', 'Diamante', 'Martillo', 'Relámpago', 'Rosa', 'Máscara', 'Helado',
    'Cuento', 'Trono', 'Desierto', 'Palabra', 'Estación', 'Ala', 'Cepillo', 'Zapato', 'Delfín', 'Globo', 'Robot',
    'Marioneta', 'Cosecha', 'Cruz', 'Manzana', 'Sonido', 'Rinoceronte', 'Coral', 'Lince', 'Esfera', 'Cuna', 'Trébol',
    'Amuleto', 'Dinero', 'Cascada', 'Tobillo', 'Árbol', 'Túnel', 'Vela', 'León', 'Libélula', 'Bolsa', 'Gato', 'Roca', 'Campo', 'Sol',
    'Oro', 'Puente', 'Taza', 'Silla', 'Rayo','Agua', 'Línea', 'Pluma', 'Héroe', 'Otoño', 'Papel', 'Barco', 'Círculo',
    'Arcoiris', 'Radio', 'Buceo'
  ];

    // Check if a word is more than once
    // const wordToUpperCase = commonWords.map(word => word.toLowerCase());
    // const filtrado = wordToUpperCase.filter((word, index) => { if (index !== wordToUpperCase.indexOf(word)) return word })
    // console.log("Repeated or not valid length ->",[...new Set(filtrado)])