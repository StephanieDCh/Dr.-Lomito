-- insertar opinion
-- INSERT INTO `drlomito`.`opiniones_vet` (`opiniones_id`, `opiniones_nombre_autor`, `opiniones_calificacion`, `opiniones_comentario`, `usuarios_usuario_id`) VALUES (NULL, NULL, NULL, NULL, NULL);
-- insertar usuario
-- INSERT INTO `drlomito`.`usuarios` (`usuario_id`, `usuario_nombre`, `usuario_correo`, `usuario_contrasena`, `veterinario_urlimagen`, `tipo_usuario_tipo_usuario_id`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL);
-- insert categoria veterinario
-- INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (NULL, NULL);
-- insert contacto_vet
-- INSERT INTO `drlomito`.`contacto_vet` (`contacto_id`, `veterinario_direccion`, `veterinario_telefono1`, `veterinario_telefono2`, `veterinario_horario_inicio`, `veterinario_horario_cierre`, `veterinario_atencion_urgencias`, `usuarios_usuario_id`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
-- insert tipo usuario
-- INSERT INTO `drlomito`.`tipo_usuario` (`tipo_usuario_id`, `tipo_usuario_nombre`) VALUES (NULL, NULL);
-- insert info veterinario
-- INSERT INTO `drlomito`.`info_veterinario` (`info_veterinario_id`, `veterinario_especialidad`, `veterinario_calificacion`, `veterinario_descripcion`, `veterinario_costo_consulta`, `veterinario_servicios`, `categoria_vet_categoria_id`, `usuarios_usuario_id`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- SELECT * FROM tipo_usuario;
INSERT INTO `drlomito`.`tipo_usuario` (`tipo_usuario_nombre`) VALUES ('Usuario Paciente');
INSERT INTO `drlomito`.`tipo_usuario` (`tipo_usuario_nombre`) VALUES ('Usuario Veterinario');

-- SELECT * FROM drlomito.categoria_vet;

INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario General');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Aviar');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Reptiles');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Ganadería');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Ortopedista');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Cirujano');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Oncólogo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Oftalmólogo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Fisioterapeuta');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Dermatólogo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Odontólogo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Otros');


-- SELECT * FROM drlomito.usuarios;
-- INSERTAR LOS 8 USUARIOS DEL EQUIPO DR. LOMITO
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Josué Chávez Lomelí', 'josue.chavezlomeli@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'José Luis López Toledo', 'jltoledo@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pablo Herrera Rosas', 'pablo_herrera@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Christian Iván Mendoza Díaz', 'mendochristiandiaz@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Stephanie Díaz Chamorro', 'fannycha1996@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Akari Yessenia Gutiérrez Esquivel', 'akari@ciencias.unam.mx', 'Batman33!', NULL, '1');
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Juan Carlos Rojas Sánchez', 'rojcar754@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Xochitl Rubí Baltazar', 'rubi@gmail.com', 'Batman33!', NULL, 1);
-- AHORA INSERTAMOS 
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pedro Lopez Zamarripa', 'pedro@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Antonio Torres Leal', 'antonio@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pablo Verdía', 'juanperez@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Sofía Brizuela', 'sofíamvz@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Viridiana Domínguez López', 'ada_hack313@hackademy.mx', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Luis Hernández Drue', 'vet_luis_hrz@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Juan Matus', 'matus.vet@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Octavio David', 'dr.octopus@gmail.com', 'Araña33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Leonardo Rodríguez Tabáres', 'leonardo.vet@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Romero López Altamirano', 'romero.vet@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Victor Sandoval Torres', 'victor@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Jaime Contreras Guzmán', 'jaime@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pablo Herrera Rosas', 'pablo_herrera@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Diana Karen Ramos Vitar', 'dkr_v@gmail.com', 'Batman33!', NULL, 2);

-- AHORA INSERTAMOS SU INFO DE CONTACTO

-- SELECT * FROM contacto_vet;
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Patria 888, Jardines de Guadalupe, 45030 Guadalajara, Jal.', '3313253748', '3344567892', 7, 20, true, 9);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Acueducto 6050, Lomas del Bosque, Chedraui, 45110 Guadalajara, Jal.', '3367849340', '5567849231', 7, 21, false, 10);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Calle Federación 1861-B, San Juan Bosco, 44730 Guadalajara, Jal.', '3314407374','3321086688',7,20,true,11);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av Guadalupe 5010-4, Jardines de Guadalupe, 45030 Zapopan, Jal.', '3318567656','3316579765',9,21,true,12);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Mariano Matamoros 293, La Joya, Tlalpan, 14090 Ciudad de México, CDMX', '5537120759', '5513269001', 8, 18, true, 13);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Rafael Quezada Ramírez Manzana 343-Lote 15, Granjas Independencia A, 55290 Ecatepec de Morelos, Méx.', '5538421709', '5515249401', 8, 19, true, 14);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Ave. M No. 59 Esq. Calle, 2da, 83600 Caborca, Son.', '6378963123','6783247544', 9, 18, true, 15);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Col. los Mangos, 70902 Zipolite, Oax.', '5574343411','5587390001', 9, 17, false, 16);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Sur 114 12-A, Cove, Álvaro Obregón, 01120 Ciudad de México, CDMX', '5522771178', '5560395670', 9, 18, true, 17);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Gral. Benjamín Hill 123, Hipódromo Condesa, Cuauhtémoc, 06170 Ciudad de México, CDMX', '5511436799', '5560395670', 10, 18, true, 18);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'C. 10 1763, Ferrocarril, 44440 Guadalajara, Jal.', '3373859690', '5578694657', 7, 21, true, 19);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Ramon Corona 212, 45600 Santa Anita, Jal.', '3376845678', '3315263789', 7, 21, false, 20);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Iztacalco 22, Agrícola Pantitlán, Iztacalco, 08100 Ciudad de México, CDMX', '5585794256', '5576894258', 09, 21, true, 21);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Ote. 253 169, Agrícola Oriental, Iztacalco, 08500 Ciudad de México, CDMX', '5598756412', '5588775964', 07, 20, true, 22);

-- SE INSERTA LA INFO DE LOS VETERINARIOS
-- SELECT * FROM info_veterinario;
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Odontólogo Felinos Grandes', 0, 'Soy un profesional de la salud apasionado por el cuidado bucal de los tigres y leones en cautiverio', 800.00, 'Profilaxis completa y remoción de sarro $2500 MXN', 11, 9);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en hipopótamos', 0, 'Soy un profesional de la salud apasionado por los hipopótamos en cautiverio', 5000.00, 'Limpieza de colmillos $7500 MXN', 12, 10);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Veterinario Oncólogo', 0,'La Oncología veterinaria es mi pasión', 500.00, 'Imagenología $250 mxn', 7,11);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Veterinario Oftalmólogo', 0,'Ver por su mascota es lo que hacemos. Clínica oftalmológica veterinaria', 600.00,'Cirugía corneal $2000 mxn', 8,12);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Experta en ansiedad canina', 0, 'Médico Veterinario Zootecnista por parte de la UNAM al cuidado de tus mascotas', 360.00, 'Pensión $800.00 MXN', 1, 13);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en aves tropicales', 0, 'Médico Veterinario Zootecnista con especialidad en fisioterapía avíar y entrenamiento de vuelo', 600.00, 'Entrenamiento de vuelo $1000.00 MXN', 2, 14);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Oncólogo Veterinario', 0, 'Veterinario especializado en oncología de perros', 2300.00, 'Tratamiento oncológico $8000.00 MXN', 7, 15);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en visión de fauna marina', 0, 'Veterinario especializado en el cuidado de los ojos', 1500.00, 'Tratamiento de cataratas en perros $5000.00 MXN', 8, 16);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en Fisioterapia Canina', 0, 'Soy un profesional en el cuidado y prevención de las lesiones' , 500.00, 'Sesión fisioterapia $800.00', 9, 17);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en Dermatología Canina', 0, 'Soy un profesional apasionado por patologías y enfermedades de la piel y pelo de nuestros animalitos', 900.00, 'Remoción de lesiones cutáneas $1000 mxn', 10, 18);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en serpientes venenosas', 0, 'Soy un profesional de la salud apasionado por los reptiles en cautiverio', 1000.00, 'Sesión de muda para serpientes $2500 MXN', 3, 19);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en ganado vacuno', 0, 'Soy un profesional de la salud apasionado por los animales de granja', 900.00, 'Vacunación Ganado $1000 MXN', 4, 20);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialidad Cirugía Zootécnica', 0, 'Médico veterinario de la facultad en médico veterinario de la UNAM. Especialista en cirugías de tejido blando, amante y protector de los animales.', 499.99, 'Cirugía en animales de tejidos blandos', 6, 21);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Veterinario Ortopédico', '0', 'Médico Veterinario egresado de la Universidad Nacional de La Plata, Bs. As., Argentina. Especialidad en Medicina y Cirugía de Perros y Gatos en el Hospital Veterinario de Especialidades de la UNAM.', 3000.00, 'Traumatologia', 5, 22);

-- AQUI SE INSERTAN LAS OPINIONES
-- SELECT * FROM opiniones_vet;
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Josué Chávez Lomelí', 4, 'Me sentí muy a gusto con su profesionalismo, sin duda volvería a llevar a mi tigre a una limpieza dental', 9);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Josué Chávez Lomelí', 5, 'Mi hipopótamo mejoró muchísimo con la medicina que le receto, sin duda un especialista con mucha experiencia en estos animales tan exóticos.', 10);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Christian Iván Mendoza Díaz', 5,'No pensé que tendría a mi mascota por muchos años más, aumentó considerablemente su esperanza de vida',11 );
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Christian Iván Mendoza Díaz', 4,'Su personal deja que desear en cuanto a atención pero en líneas generales es una atención de calidad',12 );
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Akari Yessenia Gutiérrez Esquivel', 4, 'Me fuí de vacaciones dos semanas y dejé a mi pequeña chihuahua en la pensión de la Doctora fue un servicio excelente, me infomaba cómo se encontraba mi pequeña e incluso me enviaba fotos de ella.', 13);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Akari Yessenia Gutiérrez Esquivel', 4, 'Excelente servicio, mi perico no volaba a pesar de que estaba completamente sano, ahora me sigue a todos lados', 14);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'José Luis López Toledo', 4, 'Gran servicio y tacto por parte del Dr. Matus', 15);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'José Luis López Toledo', 1 , 'Pésimo servicio, mi perro se quedó ciego totalmente con el tratamiento que el doctor recomendó. Nos había garantizado que recuperaría la vista totalmente y sucedió todo lo contrario, iré hasta las últimas instancias para obtener justicia y evitar que alguien más experimente sus malas prácticas', 16);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Stephanie Díaz Chamorro', 5, 'Me encantó el servicio, los ojitos de mi peludo han tenido mejoría lo recomiendo al 100%', 17);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Stephanie Díaz Chamorro', 4, 'Excelente servicio la piel de mi gatita mejoró en días y ya no tiene hongo en sus patitas', 18);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Mario Eduardo López Zárate', 5,'Super recomiendo a victor. Llevé a mi cocodrilo albino a un baño y limada de uñas. Ya se estaba poniendo verde y volvió a brillar con su color blanco. Excelente servicio.',19);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Mario Eduardo López Zárate', 5,'En mi rancho tengo alungas vacas y estaba sufriendo para encontrar un veterinario que me ayudara a curarlas. Pnesé que era un brote de vacas locas, pero sólo necesitaban mejorar su dieta balanceada ',20);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Juan Carlos', 4, 'Mi perrita necesitaba una operación y recibí un excelente servicio hacia mi perrita', 21);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Juan Carlos', 5, 'Fue muy atento con mi perrito en su recuperación', 22);