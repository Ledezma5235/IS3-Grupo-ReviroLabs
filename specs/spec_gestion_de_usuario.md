Spec: Gestión de Usuarios (ABM)
1. Objetivo y Contexto

Este módulo tiene como finalidad administrar el ciclo de vida de los usuarios dentro de la plataforma de eventos académicos. Debe permitir el registro, la identificación y la asignación de roles para garantizar que cada persona (organizador, participante) acceda a las funcionalidades que le corresponden. Es la base de seguridad y personalización de todo el sistema

2. Historias de Usuario y Criterios de aceptacion

    HU4: Registro de nuevo usuario

        Como visitante, quiero crear una cuenta con mi correo y contraseña para poder inscribirme en los eventos

        Criterio de aceptacion: El sistema debe validar que el correo no esté registrado previamente y que la contraseña cumpla con requisitos de seguridad

    HU5: Gestión de roles por el administrador

        Como administrador, quiero asignar o cambiar el rol de un usuario (por ejemplo de participante) para que tenga los permisos adecuados en un evento

        Criterio de aceptacion: Solo usuarios con rol "Admin" o "Organizador" pueden modificar roles de terceros

3. Requisitos Funcionales y Reglas de Negocio

    El sistema debe permitir el CRUD (Alta, Baja, Modificación y Lectura) de usuarios.

    Implementar "Baja Lógica": los usuarios no se borran de la base de datos, se marcan como "inactivos" para mantener la integridad de los registros históricos de eventos.

    Regla de Negocio: El correo electrónico es la clave única de identificación (no puede haber dos cuentas con el mismo mail).

    Regla de Negocio: Todo usuario recién registrado tiene por defecto el rol de "Participante".

4. Restricciones Técnicas

    Las contraseñas deben ser almacenadas utilizando un algoritmo de hashing seguro (ej: Argon2 o BCrypt).

    La comunicación entre el frontend y el backend debe realizarse mediante tokens JWT (JSON Web Tokens) para mantener la sesión activa.

    La validación de formatos (email, longitud de nombre) debe hacerse tanto en el cliente como en el servidor.

5. Modelo de Datos

    Entidad User:

        id: UUID (Primary Key), full_name: String, email: String (Unique, Indexed), password_hash: String, role: Enum (ADMIN, ORGANIZADOR, PARTICIPANTE), status: Boolean (Active/Inactive), created_at: Timestamp

6. Plan de Tareas

    1. Diseñar e implementar el esquema de la tabla de usuarios en la base de datos.
    2. Desarrollar los endpoints de la API para el registro (POST /auth/register) y login (POST /auth/login).
    3. Crear los servicios de validación de identidad y generación de tokens.
    4. Implementar la interfaz de usuario para el perfil y la edición de datos.
    5. Desarrollar la vista de administración para la gestión de roles.

7. Estrategia de Verificación

    Prueba Unitaria: Verificar que el sistema rechace correos electrónicos con formato inválido.

    Prueba de Integración: Asegurar que, tras un registro exitoso, el usuario pueda hacer login y recibir un token válido.

    Prueba de Seguridad: Intentar acceder a la ruta de "Gestión de Roles" con un usuario de nivel "Participante" y verificar que el sistema devuelva un error 403 (Forbidden).