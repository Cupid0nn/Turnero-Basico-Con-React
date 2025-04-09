# Página de Gestoría de Turnos PI

## Mateo Acierno

### Tecnologías aplicadas
- JavaScript, HTML, CSS, React, TypeScript.

## User Stories

- **Como usuario invitado**
  - Poder registrarse.
  - Poder visualizar toda la página.

- **Como usuario registrado**
  - Poder cerrar sesión.
  - Poder loguearme.
  - Poder sacar turno y visualizar los mismos:
    - Elegir fechas y hora / solo días hábiles / máximo sacar turno para 7 días.
    - Limitar horario de atención: 6 a 19 hs, turno cada 15 min.
    - Cancelar turnos / hasta un día antes.

### Consideraciones
- Stock ilimitado.

### XTRA CREDITS
- El usuario logueado podrá ponerse foto de perfil y cambiar la misma.
- Tener un usuario administrador.
- Que llegue un mail una vez registrado.

## UX/UI

- **Footer** con información general.

- **Navbar**
  - Información del usuario logueado / perfil.
  - Visualizar turno: fecha, hora y estado.
  - Formulario de turno:
    - Validaciones en tiempo real (React).
    - Mantener datos.
    - Habilitar el botón una vez los campos estén validados.
    - Restringir oferta de fechas y horas.

- **Home**
  - Mostrar información del lugar o página.

## Diagrama Entidad / Relación

![Diagrama ER](./front/assets/Flowcharts.png)
