---
draft: false
lang: "es"
title: "Crear un directorio de usuarios con búsqueda por código postal en WordPress"
seoTitle: "Crear un directorio de usuarios con búsqueda por código postal en WordPress"
timeNeeded: "5 minutos"
description: ""
snippet: "En este artículo, exploraremos cómo crear un sistema de membresía en WordPress que permita a los usuarios registrarse con un código postal y luego buscar otros miembros dentro de un rango de códigos postales específico."
publishDate: "2024-07-13 12:30"
author: "daniel-maestre"
tags: [wordpress]
---

En este artículo, exploraremos cómo crear un sistema de membresía en WordPress que permita a los usuarios registrarse con un código postal y luego buscar otros miembros dentro de un rango de códigos postales específico. Este tipo de funcionalidad es ideal para comunidades online, negocios locales o cualquier sitio web que busque conectar a personas dentro de una ubicación geográfica determinada.

Para lograr esto, utilizaremos una combinación de plugins y código personalizado. El proceso se divide en varios pasos:

<figure>
<img class="mx-auto" src="/blogImages/directorio-usuarios-codigo-postal.png" title="Directorio de usuarios por código postal en Wordpress" alt="Directorio de usuarios por código postal en Wordpress" loading="lazy"/>
<figcaption class="text-center">Directorio de usuarios por código postal en Wordpress<figcaption>
</figure>

## Crear un directorio de usuarios con búsqueda por código postal en WordPress

### 1. Instalación de Plugins Esenciales

* **Ultimate Member:**  Este plugin es fundamental para gestionar el registro de usuarios, sus perfiles y las funciones de membresía.
* **Advanced Custom Fields (ACF):** ACF nos permite agregar campos personalizados a los perfiles de los usuarios, incluyendo el campo para el código postal.
* **FacetWP:**  Este plugin se encarga de crear facetas de búsqueda, permitiendo a los usuarios filtrar los resultados por el código postal introducido.

### 2. Configuración del Registro de Usuarios con Código Postal

1. **Ultimate Member:**
    *  Instala y activa el plugin.
    *  Navega a Ultimate Member > Forms y crea un formulario de registro.
    *  Dentro del formulario, agrega un campo personalizado para el código postal.

2. **ACF:**
    *  Instala y activa el plugin.
    *  Ve a Custom Fields > Add New.
    *  Crea un nuevo grupo de campos y agrega un campo con los siguientes ajustes:
        *  **Field Label:**  Código Postal
        *  **Field Name:**  postcode (o un nombre similar)
        *  **Field Type:**  Text
        *  **Field Group:**  Asigna el grupo de campos al formulario de usuario de Ultimate Member.

### 3. Creación del Directorio de Usuarios

1. **FacetWP:**
    *  Instala y activa el plugin.
    *  Ve a FacetWP > Facets y agrega una nueva faceta con los siguientes ajustes:
        *  **Name:**  Búsqueda por Código Postal
        *  **Type:**  Text
        *  **Data Source:**  ACF (Código Postal)

2. **Plantilla de Página Personalizada:**
    *  Crea una plantilla de página personalizada para mostrar el directorio de usuarios. Puedes crear una plantilla de página personalizada propia que se ajuste a tu diseño.

### 4. Añadir la Funcionalidad de Búsqueda

1. **Shortcode de FacetWP:**
    *  Añade el siguiente shortcode a la página de inicio o cualquier otra página donde desees la función de búsqueda:

    ```php
    <?php echo do_shortcode('[facetwp facet="postcode_search"]'); ?>
    ```

2. **Configuración de FacetWP:**
    *  En la configuración de FacetWP, configura la faceta de "Búsqueda por Código Postal" para que filtre la consulta de usuarios.

### 5. Estilos y Personalización

1. **CSS:**
    *  Personaliza la apariencia del directorio de usuarios agregando CSS a tu archivo `style.css` del tema.

### 6. Prueba la Configuración

1.  Registra algunos usuarios con diferentes códigos postales.
2.  Utiliza la función de búsqueda para asegurar que filtra correctamente los usuarios por código postal.

### Alternativas y Consideraciones

* **GeoDirectory:**  Este plugin ofrece opciones para crear directorios con mapas y búsqueda por ubicación.
* **Personalización:**  Puedes ajustar el rango de búsqueda de código postal para que sea más amplio o restringido, según tus necesidades.
* **Seguridad:**  Implementa medidas de seguridad para proteger los datos de los usuarios, especialmente sus códigos postales.

Recuerda que este es un tutorial básico para crear un directorio de usuarios con búsqueda por código postal. Puedes agregar más funcionalidades, como un mapa interactivo, opciones de filtrado adicionales, y una interfaz más personalizada, según las necesidades de tu proyecto. Si tienes alguna duda o necesitas ayuda adicional, puedes consultar la documentación de los plugins o buscar en foros de WordPress. 
