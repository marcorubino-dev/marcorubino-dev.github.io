# Marco Rubino — WordPress Developer

Repositorio del sitio profesional [marcodeveloper.online](https://marcodeveloper.online/).

Este proyecto contiene la versión estática publicada del portfolio y sus recursos asociados. El sitio presenta servicios de desarrollo y soporte técnico WordPress, trabajos seleccionados y páginas de contacto para clientes directos y agencias.

## Contenido

- Sitio principal en español e inglés.
- Páginas de servicios y colaboración para agencias.
- Formularios y recursos de contacto.
- Casos de portfolio y recursos visuales.
- Recursos independientes, incluido el micrositio de Traslasierra Tango.

## Publicación

El sitio se publica mediante **GitHub Pages** desde la rama `main`, utilizando el dominio personalizado configurado en `CNAME`.

La mayor parte del HTML del portfolio proviene de una exportación estática de WordPress. Por eso, el sitio WordPress de origen es la fuente de verdad para el contenido y el diseño de esas páginas.

### Criterio para realizar cambios

1. Identificar si el archivo pertenece a la exportación de WordPress o a un recurso independiente.
2. Para cambios de contenido o diseño del sitio principal, modificar la fuente correspondiente en WordPress y volver a exportar.
3. Evitar editar directamente HTML generado cuando el cambio deba persistir en futuras exportaciones.
4. Mantener separados los recursos independientes y comprobar sus rutas antes de publicar.
5. Revisar navegación, enlaces, formularios y visualización responsive en español e inglés.

## Desarrollo

El contenido estático actual no requiere un proceso general de compilación ni dependencias de Node.js o PHP para publicarse.

Antes de integrar cambios, comprobar:

- Rutas relativas y enlaces internos.
- Recursos CSS, JavaScript e imágenes.
- Comportamiento de los formularios y sus servicios externos.
- Navegación entre idiomas.
- Visualización en escritorio y dispositivos móviles.

## Alcance del repositorio

Este repositorio contiene los archivos publicados, no el proyecto WordPress editable ni una instalación de WordPress completa. Las modificaciones realizadas aquí deben respetar la separación entre contenido exportado y recursos mantenidos directamente en el repositorio.

## Contacto

- **Portfolio:** [marcodeveloper.online](https://marcodeveloper.online/)
- **LinkedIn:** [Marco Rubino](https://www.linkedin.com/in/marco-rubino19/)
- **GitHub:** [marcorubino-dev](https://github.com/marcorubino-dev)

---

*WordPress que funciona. Problemas que se resuelven.*
