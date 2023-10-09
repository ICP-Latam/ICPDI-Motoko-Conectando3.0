# conectando 3.0

Bienvenido a su nuevo proyecto conectando y a la comunidad de desarrollo informático en Internet. De forma predeterminada, al crear un nuevo proyecto se agrega este archivo README y algunos archivos de plantilla al directorio de su proyecto. Puede editar estos archivos de plantilla para personalizar su proyecto e incluir su propio código para acelerar el ciclo de desarrollo.

Para comenzar, es posible que desee explorar la estructura del directorio del proyecto y el archivo de configuración predeterminado. Trabajar con este proyecto en su entorno de desarrollo no afectará ninguna implementación de producción ni tokens de identidad.

Para obtener más información antes de comenzar a trabajar con conectando, consulte la siguiente documentación disponible en línea:

- [Inicio rápido](https://internetcomputer.org/docs/current/developer-docs/quickstart/hello10mins)
- [Herramientas de desarrollo SDK] (https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove)
- [Guía del lenguaje de programación Motoko](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Referencia rápida del lenguaje Motoko](https://internetcomputer.org/docs/current/references/motoko-ref/)
- [Referencia de la API de JavaScript](https://erxue-5aaaa-aaaab-qaagq-cai.raw.icp0.io)

Si desea comenzar a trabajar en su proyecto de inmediato, puede probar los siguientes comandos:

```bash
cd conectando/
dfx help
dfx canister --help
```

## Ejecutando el proyecto localmente

Si desea probar su proyecto localmente, puede utilizar los siguientes comandos:

```golpecito
# Inicia la réplica, ejecutándose en segundo plano.
inicio dfx --fondo

# Implementa tus contenedores en la réplica y genera tu interfaz sincera
implementar dfx
```

Una vez que se complete el trabajo, su aplicación estará disponible en `http://localhost:4943?canisterId={asset_canister_id}`.

Si ha realizado cambios en su contenedor backend, puede generar una nueva interfaz sincera con

```bash
npm run generate
```

en cualquier momento. Esto se recomienda antes de iniciar el servidor de desarrollo frontend y se ejecutará automáticamente cada vez que ejecute `dfx implementar`.

Si está realizando cambios en la interfaz, puede iniciar un servidor de desarrollo con

```bash
npm start
```

Lo que iniciará un servidor en `http://localhost:8080`, enviando solicitudes de API a la réplica en el puerto 4943.

### Nota sobre las variables de entorno del frontend

Si aloja código de interfaz en algún lugar sin utilizar DFX, es posible que deba realizar uno de los siguientes ajustes para garantizar que su proyecto no obtenga la clave raíz en producción:

- establezca `DFX_NETWORK` en `ic` si está utilizando Webpack
- utilice su propio método preferido para reemplazar `process.env.DFX_NETWORK` en las declaraciones generadas automáticamente
   - Configurar `contenedores -> {asset_canister_id} -> declaraciones -> env_override en una cadena` en `dfx.json` reemplazará `process.env.DFX_NETWORK` con la cadena en las declaraciones generadas automáticamente
- Escribe tu propio constructor `createActor`