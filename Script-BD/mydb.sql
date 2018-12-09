-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-12-2018 a las 08:14:24
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE IF NOT EXISTS `cita` (
`id_cita_pk` int(11) NOT NULL,
  `id_tutor_fk` int(11) NOT NULL,
  `id_estudiante_fk` int(11) NOT NULL,
  `datetime_hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE IF NOT EXISTS `clases` (
`id_clases_pk` int(11) NOT NULL,
  `nombre_clase` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases_x_user`
--

CREATE TABLE IF NOT EXISTS `clases_x_user` (
`id_clases_x_user_pk` int(11) NOT NULL,
  `id_clases_fk` int(11) NOT NULL,
  `id_usuario_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE IF NOT EXISTS `contactos` (
`id_contacto_pk` int(11) NOT NULL,
  `id_usuario_fk` int(11) NOT NULL,
  `id_contacto_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE IF NOT EXISTS `mensajes` (
`id_mensajes_pk` int(11) NOT NULL,
  `id_usuario_emisor_fk` int(11) NOT NULL,
  `id_usuario_receptor_fk` int(11) NOT NULL,
  `txt_mensaje` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE IF NOT EXISTS `pago` (
`id_pago_pk` int(11) NOT NULL,
  `usuario_id_usuario_fk` int(11) NOT NULL,
  `int_num_citas` int(11) NOT NULL,
  `int_monto` int(11) NOT NULL,
  `bool_confirmacion_pago` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE IF NOT EXISTS `tipo_usuario` (
`id_tipo_usuario_pk` int(11) NOT NULL,
  `nombre_tipo_usuario` varchar(45) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id_tipo_usuario_pk`, `nombre_tipo_usuario`) VALUES
(1, 'Tutor'),
(2, 'Estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
`id_usuario_pk` int(11) NOT NULL,
  `id_tipo_usuario_fk` int(11) NOT NULL,
  `txt_nombre` varchar(45) NOT NULL,
  `txt_nombre_usuario` varchar(45) NOT NULL,
  `txt_contrasena` varchar(45) NOT NULL,
  `txt_identidad` varchar(45) NOT NULL,
  `txt_num_cuenta` varchar(45) NOT NULL,
  `txt_direccion` varchar(45) NOT NULL,
  `txt_carrera` varchar(45) NOT NULL,
  `int_edad` int(2) NOT NULL,
  `txt_genero` varchar(1) NOT NULL,
  `txt_foto` varchar(100) DEFAULT NULL,
  `txt_correo` varchar(45) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario_pk`, `id_tipo_usuario_fk`, `txt_nombre`, `txt_nombre_usuario`, `txt_contrasena`, `txt_identidad`, `txt_num_cuenta`, `txt_direccion`, `txt_carrera`, `int_edad`, `txt_genero`, `txt_foto`, `txt_correo`) VALUES
(1, 1, 'Ana Raquel Andino', 'anar85', 'asd.456', '0801199514499', '20141003960', 'El Reparto', 'Ingeniería en Sistemas', 23, 'F', NULL, 'arandino@unah.hn');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
 ADD PRIMARY KEY (`id_cita_pk`,`id_tutor_fk`,`id_estudiante_fk`), ADD KEY `fk_cita_usuario1_idx` (`id_tutor_fk`), ADD KEY `fk_cita_usuario2_idx` (`id_estudiante_fk`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
 ADD PRIMARY KEY (`id_clases_pk`);

--
-- Indices de la tabla `clases_x_user`
--
ALTER TABLE `clases_x_user`
 ADD PRIMARY KEY (`id_clases_x_user_pk`), ADD KEY `fk_clases_x_user_clases1_idx` (`id_clases_fk`), ADD KEY `fk_clases_x_user_usuario1_idx` (`id_usuario_fk`);

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
 ADD PRIMARY KEY (`id_contacto_pk`,`id_usuario_fk`,`id_contacto_fk`), ADD KEY `fk_contactos_usuario1_idx` (`id_usuario_fk`), ADD KEY `fk_contactos_usuario2_idx` (`id_contacto_fk`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
 ADD PRIMARY KEY (`id_mensajes_pk`,`id_usuario_emisor_fk`,`id_usuario_receptor_fk`), ADD KEY `fk_mensajes_usuario1_idx` (`id_usuario_emisor_fk`), ADD KEY `fk_mensajes_usuario2_idx` (`id_usuario_receptor_fk`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
 ADD PRIMARY KEY (`id_pago_pk`,`usuario_id_usuario_fk`), ADD KEY `fk_Pago_usuario1_idx` (`usuario_id_usuario_fk`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
 ADD PRIMARY KEY (`id_tipo_usuario_pk`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
 ADD PRIMARY KEY (`id_usuario_pk`), ADD UNIQUE KEY `txt_correo_UNIQUE` (`txt_correo`), ADD UNIQUE KEY `txt_nombre_usuario_UNIQUE` (`txt_nombre_usuario`), ADD KEY `fk_usuario_tipo_usuario_idx` (`id_tipo_usuario_fk`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
MODIFY `id_cita_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
MODIFY `id_clases_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `clases_x_user`
--
ALTER TABLE `clases_x_user`
MODIFY `id_clases_x_user_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
MODIFY `id_contacto_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
MODIFY `id_mensajes_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
MODIFY `id_pago_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
MODIFY `id_tipo_usuario_pk` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
MODIFY `id_usuario_pk` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
ADD CONSTRAINT `fk_cita_usuario1` FOREIGN KEY (`id_tutor_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_cita_usuario2` FOREIGN KEY (`id_estudiante_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `clases_x_user`
--
ALTER TABLE `clases_x_user`
ADD CONSTRAINT `fk_clases_x_user_clases1` FOREIGN KEY (`id_clases_fk`) REFERENCES `clases` (`id_clases_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_clases_x_user_usuario1` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `contactos`
--
ALTER TABLE `contactos`
ADD CONSTRAINT `fk_contactos_usuario1` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_contactos_usuario2` FOREIGN KEY (`id_contacto_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
ADD CONSTRAINT `fk_mensajes_usuario1` FOREIGN KEY (`id_usuario_emisor_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_mensajes_usuario2` FOREIGN KEY (`id_usuario_receptor_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pago`
--
ALTER TABLE `pago`
ADD CONSTRAINT `fk_Pago_usuario1` FOREIGN KEY (`usuario_id_usuario_fk`) REFERENCES `usuario` (`id_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
ADD CONSTRAINT `fk_usuario_tipo_usuario` FOREIGN KEY (`id_tipo_usuario_fk`) REFERENCES `tipo_usuario` (`id_tipo_usuario_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
