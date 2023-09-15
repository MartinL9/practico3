# Juego de Piedra, Papel o Tijeras

Juego de Piedra, Papel o Tijeras hecho con React. Permite al usuario jugar contra la computadora y llevar un registro de la puntuación, las rondas jugadas y los resultados del juego.

## Cómo Jugar

1. Ingresa tu nombre para comenzar el juego.
2. Elige tu movimiento haciendo clic en uno de los botones (Piedra, Papel o Tijeras).
3. La computadora seleccionará aleatoriamente su movimiento.
4. Se mostrará el resultado de la ronda y se actualizarán las puntuaciones.
5. El primer jugador en alcanzar una puntuación de 3 gana el juego.
6. Puedes reiniciar el juego en cualquier momento.

## Tecnologías Utilizadas

- React
- JavaScript
- Styled Components

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `App.jsx`: El componente principal que gestiona el estado del juego y renderiza otros componentes.
- `Components/`: Directorio que contiene varios componentes utilizados en el juego.
  - `Titulo.jsx`: Muestra el título del juego y un botón de reinicio para comenzar un nuevo juego.
  - `UserInput.jsx`: Permite al jugador ingresar su nombre y comenzar el juego.
  - `Score.jsx`: Muestra las puntuaciones actuales del jugador y la computadora.
  - `BtnChoices.jsx`: Proporciona botones para que el jugador elija su movimiento.
  - `ResultMatch.jsx`: Muestra el resultado de cada ronda.
  - `TotalRounds.jsx`: Muestra el número de rondas jugadas.
  - `GameOutCome.jsx`: Muestra el resultado del juego y permite al jugador reiniciar el juego actual.
  - `MatchBoard.jsx`: Muestra las elecciones realizadas por el jugador y la computadora.
  - `HistoryGames.jsx`: Muestra el historial de juegos ganados por el jugador y la computadora.
  - `TotalGames.jsx`: Muestra el número total de juegos jugados por el jugador.
  - `WinnerPopup.jsx`: Muestra el Popup con el ganador.

## Problemas Conocidos

- `Animaciones`: Actualmente, las animaciones en el MatchBoard solo se ejecutan en el primer renderizado del componente y no se repiten en rondas posteriores.
- `Animaciones de Texto`: Las animaciones de texto en el MatchBoard nunca se ejecutan, lo que puede crear un desfase de elementos en la interfaz.