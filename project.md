# Project: Sistema de Gestión de Eventos Académicos

## 1. Visión General
Plataforma web responsive diseñada para la administración integral de eventos (cursos, charlas, congresos). Permite desde la creación por parte de organizadores hasta la inscripción y acreditación (check-in) de participantes en tiempo real.

## 2. Módulos del Sistema
* **Gestión de Usuarios (Auth/ABM):** Registro, login con JWT y manejo de roles (Admin, Organizador, Participante, Personal).
* **ABM de Eventos:** Ciclo de vida completo de los eventos con validaciones de ubicación y fechas.
* **Calendario y Visualización:** Interfaz cronológica para exploración de eventos con filtros por categoría.
* **Inscripciones:** Motor de registro con control de cupos y soporte para carga manual.
* **Notificaciones:** Sistema de alertas por email (24hs antes y el mismo día del evento).
* **Acreditación (Check-in):** Registro de asistencia en el recinto mediante búsqueda por DNI.

## 3. Stack Tecnológico
* **Backend:** Framework moderno con soporte para API REST y transacciones.
* **Frontend:** Web-app responsive (AJAX/Fetch) y librerías de calendario.
* **Seguridad:** Hashing de contraseñas (BCrypt/Argon2) y tokens JWT.
* **Notificaciones:** Servicio de correo integrado con tareas programadas (Cron jobs).

## 4. Roadmap de Tareas Críticas
1.  Implementar Base de Datos (Usuarios e Inscripciones).
2.  Desarrollar Auth y lógica de Roles.
3.  Implementar Core de Eventos (CRUD).
4.  Lógica de Inscripción Transaccional.
5.  Módulo de Check-in y Notificaciones.