# Hermanos Bartos — landing

Landing de reformas construida con Next.js y App Router.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run start
```

La ruta principal usa `dynamic = "force-dynamic"`, por lo que se renderiza en el servidor en cada solicitud.

## Docker y Coolify

La imagen usa la salida `standalone` de Next.js y ejecuta el servidor como usuario no-root.

Prueba local:

```bash
docker build -t hermanos-bartos .
docker run --rm -p 3000:3000 hermanos-bartos
```

En Coolify:

1. Crea una aplicación desde el repositorio y selecciona **Dockerfile** como método de construcción.
2. Usa `/Dockerfile` como ubicación del Dockerfile.
3. Configura **Ports Exposes** con `3000`.
4. Asigna el dominio y despliega. El contenedor incluye un healthcheck contra `/health`.

No es necesario configurar almacenamiento persistente. Las futuras credenciales de Resend deben añadirse como variables de entorno en Coolify, nunca dentro del Dockerfile.

## Formulario

El formulario funciona únicamente como demostración en cliente: valida los campos y muestra un aviso, pero no envía ni almacena datos. La integración futura puede implementarse con una Server Action o Route Handler y Resend.
