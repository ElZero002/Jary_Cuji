# jary_cuji (Node.js)
Aplicación sencilla en Node.js (Express) para el examen práctico.

- Endpoint `/` devuelve JSON con mensaje de bienvenida.
- Tests: jest (unit) y supertest (integration).
- CI: GitHub Actions en `.github/workflows/ci.yml`, se ejecuta al hacer push a la rama `cuji`.
- Dockerfile personalizado: `Dockerfile_cuji` (no debe existir un `Dockerfile` simple).
