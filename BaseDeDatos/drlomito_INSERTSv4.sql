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
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Ganader??a');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Ortopedista');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Cirujano');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Onc??logo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Oftalm??logo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Fisioterapeuta');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Dermat??logo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Veterinario Odont??logo');
INSERT INTO `drlomito`.`categoria_vet` (`categoria_id`, `categoria_nombre`) VALUES (0, 'Otros');


-- SELECT * FROM drlomito.usuarios;
-- INSERTAR LOS 8 USUARIOS DEL EQUIPO DR. LOMITO
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Josu?? Ch??vez Lomel??', 'josue.chavezlomeli@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Jos?? Luis L??pez Toledo', 'jltoledo@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pablo Herrera Rosas', 'pablo_herrera@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Christian Iv??n Mendoza D??az', 'mendochristiandiaz@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Stephanie D??az Chamorro', 'fannycha1996@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Akari Yessenia Guti??rrez Esquivel', 'akari@ciencias.unam.mx', 'Batman33!', NULL, '1');
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Juan Carlos Rojas S??nchez', 'rojcar754@gmail.com', 'Batman33!', NULL, 1);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Xochitl Rub?? Baltazar', 'rubi@gmail.com', 'Batman33!', NULL, 1);
-- AHORA INSERTAMOS 
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pedro Lopez Zamarripa', 'pedro@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Antonio Torres Leal', 'antonio@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pablo Verd??a', 'juanperez@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Sof??a Brizuela', 'sof??amvz@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Viridiana Dom??nguez L??pez', 'ada_hack313@hackademy.mx', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Luis Hern??ndez Drue', 'vet_luis_hrz@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Juan Matus', 'matus.vet@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Octavio David', 'dr.octopus@gmail.com', 'Ara??a33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Leonardo Rodr??guez Tab??res', 'leonardo.vet@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Romero L??pez Altamirano', 'romero.vet@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Victor Sandoval Torres', 'victor@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Jaime Contreras Guzm??n', 'jaime@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Pablo Herrera Rosas', 'pablo_herrera@gmail.com', 'Batman33!', NULL, 2);
INSERT INTO `drlomito`.`usuarios` VALUES (0, 'Diana Karen Ramos Vitar', 'dkr_v@gmail.com', 'Batman33!', NULL, 2);

-- AHORA INSERTAMOS SU INFO DE CONTACTO

-- SELECT * FROM contacto_vet;
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Patria 888, Jardines de Guadalupe, 45030 Guadalajara, Jal.', '3313253748', '3344567892', 7, 20, true, 9);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Acueducto 6050, Lomas del Bosque, Chedraui, 45110 Guadalajara, Jal.', '3367849340', '5567849231', 7, 21, false, 10);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Calle Federaci??n 1861-B, San Juan Bosco, 44730 Guadalajara, Jal.', '3314407374','3321086688',7,20,true,11);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av Guadalupe 5010-4, Jardines de Guadalupe, 45030 Zapopan, Jal.', '3318567656','3316579765',9,21,true,12);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Mariano Matamoros 293, La Joya, Tlalpan, 14090 Ciudad de M??xico, CDMX', '5537120759', '5513269001', 8, 18, true, 13);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Rafael Quezada Ram??rez Manzana 343-Lote 15, Granjas Independencia A, 55290 Ecatepec de Morelos, M??x.', '5538421709', '5515249401', 8, 19, true, 14);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Ave. M No. 59 Esq. Calle, 2da, 83600 Caborca, Son.', '6378963123','6783247544', 9, 18, true, 15);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Col. los Mangos, 70902 Zipolite, Oax.', '5574343411','5587390001', 9, 17, false, 16);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Sur 114 12-A, Cove, ??lvaro Obreg??n, 01120 Ciudad de M??xico, CDMX', '5522771178', '5560395670', 9, 18, true, 17);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Gral. Benjam??n Hill 123, Hip??dromo Condesa, Cuauht??moc, 06170 Ciudad de M??xico, CDMX', '5511436799', '5560395670', 10, 18, true, 18);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'C. 10 1763, Ferrocarril, 44440 Guadalajara, Jal.', '3373859690', '5578694657', 7, 21, true, 19);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Ramon Corona 212, 45600 Santa Anita, Jal.', '3376845678', '3315263789', 7, 21, false, 20);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Av. Iztacalco 22, Agr??cola Pantitl??n, Iztacalco, 08100 Ciudad de M??xico, CDMX', '5585794256', '5576894258', 09, 21, true, 21);
INSERT INTO `drlomito`.`contacto_vet` VALUES (0, 'Ote. 253 169, Agr??cola Oriental, Iztacalco, 08500 Ciudad de M??xico, CDMX', '5598756412', '5588775964', 07, 20, true, 22);

-- SE INSERTA LA INFO DE LOS VETERINARIOS
-- SELECT * FROM info_veterinario;
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Odont??logo Felinos Grandes', 0, 'Soy un profesional de la salud apasionado por el cuidado bucal de los tigres y leones en cautiverio', 800.00, 'Profilaxis completa y remoci??n de sarro $2500 MXN', 11, 9);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en hipop??tamos', 0, 'Soy un profesional de la salud apasionado por los hipop??tamos en cautiverio', 5000.00, 'Limpieza de colmillos $7500 MXN', 12, 10);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Veterinario Onc??logo', 0,'La Oncolog??a veterinaria es mi pasi??n', 500.00, 'Imagenolog??a $250 mxn', 7,11);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Veterinario Oftalm??logo', 0,'Ver por su mascota es lo que hacemos. Cl??nica oftalmol??gica veterinaria', 600.00,'Cirug??a corneal $2000 mxn', 8,12);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Experta en ansiedad canina', 0, 'M??dico Veterinario Zootecnista por parte de la UNAM al cuidado de tus mascotas', 360.00, 'Pensi??n $800.00 MXN', 1, 13);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en aves tropicales', 0, 'M??dico Veterinario Zootecnista con especialidad en fisioterap??a av??ar y entrenamiento de vuelo', 600.00, 'Entrenamiento de vuelo $1000.00 MXN', 2, 14);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Onc??logo Veterinario', 0, 'Veterinario especializado en oncolog??a de perros', 2300.00, 'Tratamiento oncol??gico $8000.00 MXN', 7, 15);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en visi??n de fauna marina', 0, 'Veterinario especializado en el cuidado de los ojos', 1500.00, 'Tratamiento de cataratas en perros $5000.00 MXN', 8, 16);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en Fisioterapia Canina', 0, 'Soy un profesional en el cuidado y prevenci??n de las lesiones' , 500.00, 'Sesi??n fisioterapia $800.00', 9, 17);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en Dermatolog??a Canina', 0, 'Soy un profesional apasionado por patolog??as y enfermedades de la piel y pelo de nuestros animalitos', 900.00, 'Remoci??n de lesiones cut??neas $1000 mxn', 10, 18);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en serpientes venenosas', 0, 'Soy un profesional de la salud apasionado por los reptiles en cautiverio', 1000.00, 'Sesi??n de muda para serpientes $2500 MXN', 3, 19);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialista en ganado vacuno', 0, 'Soy un profesional de la salud apasionado por los animales de granja', 900.00, 'Vacunaci??n Ganado $1000 MXN', 4, 20);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Especialidad Cirug??a Zoot??cnica', 0, 'M??dico veterinario de la facultad en m??dico veterinario de la UNAM. Especialista en cirug??as de tejido blando, amante y protector de los animales.', 499.99, 'Cirug??a en animales de tejidos blandos', 6, 21);
INSERT INTO `drlomito`.`info_veterinario` VALUES (0, 'Veterinario Ortop??dico', '0', 'M??dico Veterinario egresado de la Universidad Nacional de La Plata, Bs. As., Argentina. Especialidad en Medicina y Cirug??a de Perros y Gatos en el Hospital Veterinario de Especialidades de la UNAM.', 3000.00, 'Traumatologia', 5, 22);

-- AQUI SE INSERTAN LAS OPINIONES
-- SELECT * FROM opiniones_vet;
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Josu?? Ch??vez Lomel??', 4, 'Me sent?? muy a gusto con su profesionalismo, sin duda volver??a a llevar a mi tigre a una limpieza dental', 9);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Josu?? Ch??vez Lomel??', 5, 'Mi hipop??tamo mejor?? much??simo con la medicina que le receto, sin duda un especialista con mucha experiencia en estos animales tan ex??ticos.', 10);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Christian Iv??n Mendoza D??az', 5,'No pens?? que tendr??a a mi mascota por muchos a??os m??s, aument?? considerablemente su esperanza de vida',11 );
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Christian Iv??n Mendoza D??az', 4,'Su personal deja que desear en cuanto a atenci??n pero en l??neas generales es una atenci??n de calidad',12 );
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Akari Yessenia Guti??rrez Esquivel', 4, 'Me fu?? de vacaciones dos semanas y dej?? a mi peque??a chihuahua en la pensi??n de la Doctora fue un servicio excelente, me infomaba c??mo se encontraba mi peque??a e incluso me enviaba fotos de ella.', 13);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Akari Yessenia Guti??rrez Esquivel', 4, 'Excelente servicio, mi perico no volaba a pesar de que estaba completamente sano, ahora me sigue a todos lados', 14);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Jos?? Luis L??pez Toledo', 4, 'Gran servicio y tacto por parte del Dr. Matus', 15);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Jos?? Luis L??pez Toledo', 1 , 'P??simo servicio, mi perro se qued?? ciego totalmente con el tratamiento que el doctor recomend??. Nos hab??a garantizado que recuperar??a la vista totalmente y sucedi?? todo lo contrario, ir?? hasta las ??ltimas instancias para obtener justicia y evitar que alguien m??s experimente sus malas pr??cticas', 16);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Stephanie D??az Chamorro', 5, 'Me encant?? el servicio, los ojitos de mi peludo han tenido mejor??a lo recomiendo al 100%', 17);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Stephanie D??az Chamorro', 4, 'Excelente servicio la piel de mi gatita mejor?? en d??as y ya no tiene hongo en sus patitas', 18);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Mario Eduardo L??pez Z??rate', 5,'Super recomiendo a victor. Llev?? a mi cocodrilo albino a un ba??o y limada de u??as. Ya se estaba poniendo verde y volvi?? a brillar con su color blanco. Excelente servicio.',19);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Mario Eduardo L??pez Z??rate', 5,'En mi rancho tengo alungas vacas y estaba sufriendo para encontrar un veterinario que me ayudara a curarlas. Pnes?? que era un brote de vacas locas, pero s??lo necesitaban mejorar su dieta balanceada ',20);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Juan Carlos', 4, 'Mi perrita necesitaba una operaci??n y recib?? un excelente servicio hacia mi perrita', 21);
INSERT INTO `drlomito`.`opiniones_vet` VALUES (0, 'Juan Carlos', 5, 'Fue muy atento con mi perrito en su recuperaci??n', 22);