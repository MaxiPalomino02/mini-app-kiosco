# Kiosco El Rápido — Reglas del proyecto

## Alcance
- App de un kiosco de barrio: catálogo, filtros, detalle de producto, carrito y simulación de pedido.
- Parte 1: frontend (catálogo, filtros, detalle, carrito y simulación de pedido).
- Parte 2: backend (API de productos y pedidos). No adelantar funcionalidades que no se pidan.

## Stack frontend
- Vite + React + TypeScript + react-router-dom.
- CSS simple (un archivo global o CSS Modules).
- Sin librerías de UI ni de estado.

## Código frontend
- TypeScript estricto, sin `any`.
- Componentes funcionales, un componente por archivo.
- Estructura de `src/`: `components/`, `context/`, `pages/`, `types/`, `data/`, `App.tsx`, `main.tsx`.
- Hooks esperados y bien usados: `useState`, `useEffect`, `useContext`, `useParams`, `useSearchParams`.

## Backend
- Carpeta `backend/`, hermana del frontend, con esta estructura:
  - `main.py`
  - `database.py`
  - `models.py`
  - `schemas.py`
  - `routers/products.py`
  - `routers/orders.py`
  - `requirements.txt`
- Stack: FastAPI + SQLAlchemy 2.x + SQLite + Pydantic v2 + uvicorn.
- Todos los endpoints bajo el prefijo `/api`.
- Validación con Pydantic; no con `if` manuales cuando Pydantic lo resuelve.
- Errores con `HTTPException` y un `detail` en texto claro, en español.
- CORS habilitado para el frontend de Vite: `http://localhost:5173` y `http://127.0.0.1:5173`.
- La documentación automática debe quedar disponible en `/docs`.
- No tocar el frontend en las tareas de backend.
- Sin autenticación, sin paginación y sin tests automatizados.

## Flujo de trabajo
- Después de cada tarea de frontend correr `npm run build` y arreglar los errores de TypeScript.
- Si algo del pedido es ambiguo, elegir la opción más simple e informar cuál se eligió.

## Restricciones
- No agregar funcionalidades que no se pidan.
- Sin paginación.
- Sin tests automatizados.
