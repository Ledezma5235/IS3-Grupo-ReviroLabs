# Spec: Inscripción de Participantes

## 1. Objetivo y Contexto
El objetivo de este módulo es permitir que los usuarios se registren para asistir a eventos académicos disponibles en la plataforma. Debe soportar tanto la autogestión (el participante se inscribe a sí mismo desde la web) como la gestión manual por parte de un usuario con rol Organizador.

## 2. Historias de Usuario y Criterios de Aceptación
**HU-01: Autogestión de inscripción**
Como participante con cuenta activa, quiero inscribirme a un evento para asegurar mi asistencia.
*   **Criterio de Aceptación 1:** El sistema debe verificar que la fecha actual sea menor o igual a la fecha límite de inscripción del evento.
*   **Criterio de Aceptación 2:** El sistema debe rechazar la inscripción si se ha alcanzado el "cupo máximo" de asistentes.
*   **Criterio de Aceptación 3:** Un mismo usuario no puede inscribirse dos veces al mismo evento.

**HU-02: Inscripción manual por personal**
Como organizador, quiero inscribir a una persona manualmente en el sistema para gestionar casos excepcionales o inscripciones presenciales previas.
*   **Criterio de Aceptación 1:** El organizador debe poder ingresar el DNI, Nombre y Apellido del participante sin necesidad de que este tenga una cuenta creada previamente en la plataforma.
*   **Criterio de Aceptación 2:** Esta acción también debe descontar un lugar del cupo máximo del evento.

## 3. Requisitos Funcionales y Reglas de Negocio
*   El estado inicial de una inscripción exitosa es "Inscripto".
*   Si un evento no tiene definido un "cupo máximo", la capacidad se considera ilimitada.
*   Se debe notificar visualmente en la interfaz si el evento está "Agotado" o "Cerrado por fecha".

## 4. Restricciones técnicas específicas de este módulo
*   Las validaciones de cupo y fecha límite deben realizarse de manera estricta en el Backend (no solo ocultar el botón en el Frontend).
*   La operación de inscripción en la base de datos debe ser transaccional para evitar condiciones de carrera (ej: dos usuarios inscribiéndose al último cupo disponible exactamente al mismo tiempo).

## 5. Modelo de datos de este módulo
Se requiere interactuar con las siguientes entidades lógicas:
*   **Inscripcion:** `id`, `usuario_id` (nullable si es manual), `evento_id`, `dni_participante`, `nombre_participante`, `fecha_registro`, `estado` (Inscripto / Cancelado).
*   **Evento (Solo lectura para validación):** `id`, `cupo_maximo`, `fecha_limite_inscripcion`.

## 6. Plan de Tareas
1. Crear el modelo/tabla `Inscripcion` en la base de datos.
2. Implementar el endpoint del backend para la HU-01 con sus respectivas validaciones lógicas (fechas, cupos, duplicados).
3. Implementar el endpoint del backend para la HU-02 exclusivo para el rol Organizador.
4. Desarrollar el componente de Interfaz de Usuario (UI) con el botón "Inscribirme", manejando los estados deshabilitados (Sin cupo/Fuera de término).
5. Desarrollar el formulario en el panel de administración para la carga manual por parte del organizador.

## 7. Estrategia de Verificación
*   Intentar inscribir a un usuario cuando el cupo actual es igual al cupo máximo (debe fallar).
*   Intentar inscribir a un usuario 1 minuto después de la fecha límite (debe fallar).
*   Inscribir al mismo usuario dos veces de forma consecutiva (la segunda debe devolver un error 400 o similar).

## 8. Estado del Desarrollo
- [x] Análisis y especificación completada.
- [ ] Desarrollo del backend en curso . . .