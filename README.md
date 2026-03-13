# Mobile App Store - Documentación del Proyecto

## 📋 Descripción General

**Mobile App Store** es una plataforma web moderna y responsiva diseñada para exhibir y distribuir aplicaciones móviles desarrolladas por **David Sliren**. El proyecto funciona como un portafolio interactivo y una tienda de aplicaciones, permitiendo a los usuarios explorar, conocer detalles y descargar las últimas versiones de las apps disponibles.

La interfaz está construida con un enfoque en la experiencia de usuario (UX), utilizando transiciones fluidas, diseño minimalista y una estética oscura ("dark mode") con acentos en color esmeralda.

## 🚀 Tecnologías Principales

El proyecto utiliza un stack tecnológico moderno basado en el ecosistema de React:

*   **Core:** [React 19](https://react.dev/) - Biblioteca principal para la interfaz de usuario.
*   **Build Tool:** [Vite](https://vitejs.dev/) - Entorno de desarrollo rápido y optimizado.
*   **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/) - Framework de utilidades para diseño rápido y responsivo.
*   **Animaciones:** [Motion](https://motion.dev/) (anteriormente Framer Motion) - Para animaciones complejas y transiciones de página.
*   **Enrutamiento:** [React Router 7](https://reactrouter.com/) - Gestión de la navegación SPA (Single Page Application).
*   **Iconos:** [Lucide React](https://lucide.dev/) - Colección de iconos SVG ligeros y consistentes.
*   **Utilidades:** `react-qr-code` para generación de códigos QR de descarga.

## 📂 Estructura del Proyecto

El código fuente se organiza siguiendo una arquitectura modular y escalable:

```text
src/
├── assets/            # Recursos estáticos (imágenes, iconos globales)
├── components/        # Componentes reutilizables de la UI
│   ├── Application/   # Componentes específicos de las tarjetas de apps
│   ├── Buttons/       # Colección de botones (CallAction, IconButton, etc.)
│   ├── Description/   # Componentes de la página de detalles de la app
│   └── Home/          # Componentes exclusivos de la página de inicio
├── constants/         # Datos estáticos y configuraciones
│   ├── dataOfApps.js  # "Base de datos" local con la información de las apps
│   └── motion_variants.js # Configuraciones de animación reutilizables
├── page/              # Vistas principales (Páginas)
│   ├── Home.jsx       # Página de inicio / Landing
│   ├── Applications.jsx # Catálogo de aplicaciones
│   └── Description.jsx # Vista detallada de una aplicación específica
├── UI/                # Componentes estructurales y de layout
│   ├── Layout.jsx     # Layout principal (Header + Outlet + Footer)
│   ├── Navbar/        # Barra de navegación
│   └── Footer.jsx     # Pie de página
├── utils/             # Funciones de utilidad y helpers
├── App.jsx            # Configuración de rutas principal
└── main.jsx           # Punto de entrada de la aplicación
```

## 🛠️ Instalación y Configuración

Este proyecto utiliza **pnpm** como gestor de paquetes. Asegúrate de tener Node.js instalado.

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repositorio>
    cd mobile-app-store
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    pnpm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

4.  **Construir para producción:**
    ```bash
    pnpm run build
    ```

## 🧩 Arquitectura y Componentes Clave

### 1. Gestión de Datos (`dataOfApps.js`)
Actualmente, el proyecto no utiliza una base de datos externa. La información de las aplicaciones se gestiona en `src/constants/dataOfApps.js` mediante un objeto `Map` y un array `apps`.
*   **Estructura de datos:** Cada app contiene `name`, `slogan`, `description`, `version`, `download` (link), `video_presentation`, etc.
*   **Escalabilidad:** Este archivo está diseñado como un marcador de posición ("mock") para una futura integración con una API o base de datos real.

### 2. Sistema de Rutas (`App.jsx`)
El enrutamiento define dos estructuras principales:
*   **Rutas con Layout:** `/` (Home) y `/applications` comparten el mismo `Layout` (Header y Footer).
*   **Rutas Independientes:** `/applications/:app` (Description) renderiza una vista inmersiva sin el layout estándar, ideal para presentaciones detalladas de productos.

### 3. Componentes Destacados
*   **FeatureCard:** Tarjeta informativa usada en el Home para mostrar características (Versiones estables, beta, etc.).
*   **ApplicationCard:** Componente visual clave en el catálogo que muestra el título, descripción breve y video de presentación de cada app.
*   **Mockup:** Componente en la página de descripción que visualiza la aplicación dentro de un marco de dispositivo móvil.

## ✨ Personalización

### Agregar una nueva aplicación
Para listar una nueva aplicación en la tienda, no es necesario crear nuevos componentes. Simplemente añade un nuevo objeto al array `apps` en `src/constants/dataOfApps.js`:

```javascript
{
  name: "NombreApp",
  slogan: { normal: "Slogan principal", born: "Slogan secundario" },
  description: "Descripción completa...",
  description_Breve: "Resumen corto",
  vertion: "1.0.0",
  size: "XX MB",
  download: "URL_DE_DESCARGA",
  video_presentation: "URL_VIDEO",
  // ... otros campos requeridos
}
```

## 🎨 Estilo y Diseño
El proyecto utiliza **Tailwind CSS** con una configuración personalizada. Los colores principales giran en torno a una paleta oscura (`zinc-950`) con acentos vibrantes (`emerald-500`). Las animaciones de entrada y scroll están orquestadas por **Motion** usando variantes definidas en `motion_variants.js`.

## 📄 Licencia
Este proyecto está bajo la **Licencia Apache 2.0**.

**Nota sobre Marcas y Activos:** La Licencia Apache 2.0 permite el uso y modificación del código fuente, pero **no otorga permiso** para utilizar los nombres comerciales, marcas registradas, logotipos o iconos de **David Sliren** asociados al proyecto, tal como se especifica en la Sección 6 de la licencia.

---
*Documentación generada por Gemini CLI para David Sliren.*
