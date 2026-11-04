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

## Formulario

El formulario funciona únicamente como demostración en cliente: valida los campos y muestra un aviso, pero no envía ni almacena datos. La integración futura puede implementarse con una Server Action o Route Handler y Resend.
