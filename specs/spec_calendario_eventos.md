Spec: Calendario y Visualización de Eventos
1. Objetivo y Contexto

El objetivo de este módulo es proporcionar una interfaz visual y cronológica de todos los eventos académicos disponibles. Debe permitir a los usuarios (tanto registrados como visitantes) explorar la oferta de cursos, charlas y congresos de manera intuitiva, facilitando la búsqueda por fechas y categorías para fomentar la inscripción.

2. Historias de Usuario y Criterios de Aceptación

    HU6: Visualización de eventos futuros.

        Como usuario, quiero ver un calendario con los eventos próximos para planificar mi asistencia.

        Criterio de Aceptación: El calendario debe cargar por defecto el mes actual y resaltar los días que tienen al menos un evento programado.

    HU7: Filtrado por tipo de evento.

        Como usuario, quiero filtrar el calendario por categorías (ej: "Congreso", "Curso", "Charla") para ver solo lo que me interesa.

        Criterio de Aceptación: Al aplicar un filtro, la vista del calendario debe actualizarse instantáneamente ocultando los eventos que no coincidan con la categoría seleccionada.

    HU8: Consulta de eventos pasados.

        Como organizador, quiero navegar hacia meses anteriores para consultar el histórico de eventos realizados.

        Criterio de Aceptación: El sistema debe permitir la navegación histórica, pero los eventos pasados deben mostrarse con un estilo visual distinto (ej: escala de grises) y deshabilitar el botón de inscripción.

3. Requisitos Funcionales y Reglas de Negocio 

    El sistema debe ofrecer vistas por mes, semana y lista (agenda).
    Al hacer clic en un evento del calendario, se debe abrir un modal o redireccionar a la vista de "Detalles del Evento". V

    Regla de Negocio: Los eventos con "cupo lleno" deben mostrar una etiqueta de "Agotado" en la vista del calendario. V
     
    Regla de Negocio: La visibilidad de los eventos en el calendario depende de su estado (solo se muestran eventos en estado "Publicado"). V

4. Restricciones Técnicas

    Se debe utilizar una librería de calendario documentada (ej: FullCalendar, React-Calendar o similar) para asegurar la compatibilidad con dispositivos móviles.

    La carga de eventos debe ser eficiente (lazy loading): solo se deben traer de la base de datos los eventos correspondientes al mes que se está visualizando.

    El diseño debe ser totalmente responsive, adaptando la vista de "mes" a "lista" en pantallas pequeñas.

5. Modelo de Datos

    Entidad Event (Campos relevantes para esta Spec):

        id: UUID, title: String, description: Text, start_date: DateTime, end_date: DateTime, type: Enum (CURSO, CONGRESO, JORNADA, CHARLA), capacity_status: Enum (DISPONIBLE, AGOTADO), is_published: Boolean

6. Plan de Tareas

    1. Integrar la librería de calendario en el frontend.
    2. Crear el endpoint GET /events/calendar que reciba parámetros de mes y año para filtrar la búsqueda.
    3. Implementar la lógica de colores y etiquetas según el tipo de evento y estado de cupo.
    4. Desarrollar el panel de filtros laterales o superiores.
    5. Configurar la navegación entre meses (Siguiente/Anterior).

7. Estrategia de Verificación

    Prueba Funcional: Verificar que un evento creado para el 15 de mayo aparezca correctamente posicionado en la celda correspondiente del calendario.

    Prueba de Interfaz: Comprobar que en dispositivos móviles la vista cambie automáticamente a formato "Lista" para mejorar la lectura.

    Prueba de Regla de Negocio: Asegurar que un evento marcado como is_published: false no sea visible para usuarios con rol "Participante" o visitantes.
