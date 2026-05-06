# Spec: Acreditación de Participantes (Check-in)

## 1. Objetivo y Contexto
Este módulo permite al personal del evento registrar la asistencia real de las personas en el momento que ingresan al recinto el día de la realización. Es el paso previo y obligatorio para que, a futuro, el sistema pueda generar los certificados de asistencia.

## 2. Historias de Usuario y Criterios de Aceptación
**HU-03: Acreditación ágil**
Como personal del evento (organizador), quiero buscar a un inscripto por su número de documento (DNI) y marcarlo como "Presente", para tener el control de asistencia en tiempo real.
*   **Criterio de Aceptación 1:** El sistema solo debe permitir buscar dentro de los usuarios que tengan una `Inscripcion` con estado "Inscripto" para ese evento en particular.
*   **Criterio de Aceptación 2:** Al confirmar la asistencia, el estado de la inscripción debe cambiar a "Acreditado".
*   **Criterio de Aceptación 3:** Si se busca un DNI que no está en la lista de inscriptos, el sistema debe mostrar una alerta roja clara indicando "Participante no inscripto".

## 3. Requisitos Funcionales y Reglas de Negocio
*   Solo los usuarios con rol "Organizador" o "Personal" pueden acceder a esta funcionalidad.
*   La interfaz debe estar optimizada para la velocidad, permitiendo escanear o tipear DNIs de forma continua sin tener que recargar la página completa.

## 4. Restricciones técnicas específicas de este módulo
*   El frontend debe utilizar técnicas de actualización asíncrona (AJAX/Fetch) para realizar las búsquedas de inscriptos rápidamente.
*   Prohibido utilizar paginación pesada en la vista de búsqueda; usar filtrado en tiempo real sobre el campo DNI o Apellido.

## 5. Modelo de datos de este módulo
*   Se actualiza la entidad **Inscripcion** creada en el módulo anterior.
*   Se modifica el campo `estado` (cambia de "Inscripto" a "Acreditado").
*   Se añade un campo de auditoría `fecha_hora_acreditacion` para registrar el momento exacto del check-in.

## 6. Plan de Tareas
1. Crear el endpoint de búsqueda de participantes inscriptos para un evento específico.
2. Crear el endpoint de actualización (PATCH/PUT) para cambiar el estado a "Acreditado" y registrar la hora.
3. Desarrollar la vista de Recepción en el frontend (un buscador prominente por DNI/Nombre).
4. Implementar feedback visual inmediato (Ej: Notificación toast verde para éxito, alerta roja para no encontrado).

## 7. Estrategia de Verificación
*   Confirmar la acreditación de un usuario con estado "Inscripto" (debe ser exitoso y cambiar estado).
*   Intentar acreditar un DNI inexistente en la base de inscriptos (debe rechazar con alerta).
*   Intentar acreditar dos veces al mismo usuario (debe notificar que el usuario ya ingresó).