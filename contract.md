# API Contract - Event Management System

## Base URL: `/api/v1`

### 1. Autenticación y Usuarios
* `POST /auth/register`: Registro de nuevos participantes.
* `POST /auth/login`: Retorna JWT y datos del usuario.
* `PATCH /users/:id/role`: (Solo Admin) Cambio de roles.

### 2. Eventos
* `GET /events/calendar`: Lista eventos publicados filtrados por mes/año.
* `POST /events`: (Admin/Organizador) Crear nuevo evento.
* `GET /events/:id`: Detalles completos del evento.
* `PUT/PATCH /events/:id`: Editar información o cambiar estado.

### 3. Inscripciones
* `POST /inscriptions/self`: Autoinscripción del usuario logueado.
* `POST /inscriptions/manual`: (Organizador) Inscripción de terceros mediante DNI.
* `GET /inscriptions/event/:eventId`: (Personal) Lista de inscriptos para check-in.

### 4. Acreditación (Check-in)
* `PATCH /inscriptions/:id/checkin`: Cambia estado a "Acreditado" y registra fecha/hora.

### 5. Notificaciones
* `PATCH /users/preferences/notifications`: Configurar recepción de correos.