# Pagina de Gestoria de turnos PI

## Mateo Acierno

- Tecnologias aplicadas
  - React, typescript.

## User Stories

- Como usuario invitado
  - Poder registrarse
  - Poder visualizar toda la pagina

- Como usuario Registrado
  - Poder cerrar sesion
  - Poder loguearme
  - poder sacar turno y visualizar los mismos
    - Elejir fechas y hora / solo dias habiles / maximo sacar turno para 7 dias
    - Limitar Horario de atencion: 6 a 19 hs, turno cada 15 min.
    - Cancelar turnos / hasta un dia antes.

- Consideraciones
  -Stock ilimitado

- XTRA CREDITS
  - El Usuario logueado podra ponerse foto de perfil y cambiar la misma
  - Tener un Usuario Administrador
  - Que llegue un Mail una vez registrado

## UX/UI

- Footer con info gral.

- Navbar
  - Info del usuario logueado/Perfil
  - Visualizar turno: Fecha, Hora y Status
  - Formulario de Turno
    - Validaciones en tiempo real (REACT)
    - Mantener Datos
    - Habilitar el boton una vez los campos esten validados
    - Restringir oferta de fechas y horas

- home
  - Mostrar informacion del lugar o pagina

## Diagrama Entidad / Relacion

<img src="./front/assets/Flowcharts.png"/>
