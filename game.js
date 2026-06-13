const WORDS = [
  "AHOGADO",
  "AJEDREZ",
  "ALEKHINE",
  "ALFIL",
  "AMENAZA",
  "ANAND",
  "ANASTASIA",
  "APERTURA",
  "ATAQUE",
  "ATRACCION",
  "AVANCE",
  "BATERIA",
  "BENONI",
  "BERLINESA",
  "BIRD",
  "BLITZ",
  "BLANCAS",
  "BLOQUEO",
  "BLUNDER",
  "BODEN",
  "BOTVINNIK",
  "BRILLANTE",
  "CABALLO",
  "CALCULO",
  "CALIDAD",
  "CAPABLANCA",
  "CARLSEN",
  "CAROKANN",
  "CANDIDATA",
  "CASILLA",
  "CATALANA",
  "CAPTURA",
  "CELADA",
  "CENTRO",
  "CLAVADA",
  "CLUB",
  "COLUMNA",
  "COMBINACION",
  "COMPENSACION",
  "CORONACION",
  "COPA",
  "DAMIANO",
  "DAMA",
  "DEBILIDAD",
  "DEFENSA",
  "DEMOLICION",
  "DESARROLLO",
  "DESCUBIERTA",
  "DESVIACION",
  "DIAGONAL",
  "DOBLECOLUMNA",
  "DRAGON",
  "ENROQUE",
  "ENTREGA",
  "ERROR",
  "ESCANDINAVA",
  "ESCOCESA",
  "ESLAVA",
  "ESPANOLA",
  "ESTRATEGIA",
  "ESTRUCTURA",
  "FASE",
  "FIDE",
  "FIANCHETTO",
  "FILA",
  "FINAL",
  "FISCHER",
  "FLANCO",
  "FRANCESA",
  "GAMBITO",
  "GAME",
  "GOBLIN",
  "GRUNFELD",
  "HIPOPOTAMO",
  "HOLANDESA",
  "HORQUILLA",
  "INDIA",
  "INGLESA",
  "INICIATIVA",
  "INTERMEDIA",
  "ITALIANA",
  "IDEA",
  "JAQUE",
  "KARPOV",
  "KASPAROV",
  "LASKER",
  "LEGAL",
  "LINEA",
  "LIGA",
  "LONDRES",
  "LUCENA",
  "MANIOBRA",
  "MARSHALL",
  "MATE",
  "MATERIAL",
  "MORPHY",
  "NAJDORF",
  "OWEN",
  "NEGRAS",
  "NIMZOINDIA",
  "OCTAVA",
  "OPOSICION",
  "PASILLO",
  "PEON",
  "PEONES",
  "PERPETUO",
  "PETROV",
  "PHILIDOR",
  "PIEZA",
  "PIRC",
  "PLAY",
  "PLAN",
  "POLGAR",
  "PONZIANI",
  "PRECISION",
  "PROMOCION",
  "RETI",
  "RETROCESO",
  "RUBINSTEIN",
  "RUPTURA",
  "SACRIFICIO",
  "SCHEVENINGEN",
  "SEMIESLAVA",
  "SEPTIMA",
  "SICILIANA",
  "SOBRECARGA",
  "SPEEDRUN",
  "TABLAS",
  "TACTICA",
  "TARRASCH",
  "TORRE",
  "TRAMPA",
  "TRIANGULACION",
  "VARIANTE",
  "VENTAJA",
  "VIENESA",
  "VISION",
  "ABRIR",
  "CALMA",
  "CAZAR",
  "CEDER",
  "COLOR",
  "COMER",
  "DAMAS",
  "FALLO",
  "GANAR",
  "JUEGA",
  "JUGAR",
  "MATES",
  "MEDIO",
  "MIRAR",
  "MOVER",
  "MUEVE",
  "ORDEN",
  "PUNTO",
  "RAPID",
  "REINA",
  "RELOJ",
  "REYES",
  "RONDA",
  "SALTA",
  "SALTO",
  "TAPAR",
  "TOMAR",
  "TURNO",
  "VALOR",
  "ZUGZWANG"
];

const BOARD_SIZE = 8;
const MAX_LIVES = 3;
const ROUND_SECONDS = 60;
const WORD_TIME_BONUS = 10;
const WORD_SCORE_BONUS = 0;
const PERFECT_TIME_BONUS = 2;
const PERFECT_SCORE_BONUS = 150;
const FAST_BONUS = 20;
const SPEED_BONUS = 40;
const SPEED_CHAIN_BONUS = 75;
const LETTERS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const KNIGHT_STEPS = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2]
];
const DEFEAT_MESSAGES = [
  "¡Enhorabuena! Tu goblin ha entrenado visión de tablero.",
  "¡Buen trabajo! El goblin vuelve más listo en cada partida.",
  "¡Genial! Has sumado experiencia para el reino goblin.",
  "¡Muy bien! Tu goblin piensa cada vez mejor.",
  "¡Bravo! Has entrenado cálculo, atención y reflejos.",
  "¡Enhorabuena! El tablero goblin te ha hecho mejorar.",
  "¡Gran partida! Tu goblin ha aprendido nuevas ideas.",
  "¡Fantástico! Cada punto fortalece tu ajedrez.",
  "¡Buen intento! El goblin nunca deja de entrenar.",
  "¡Muy bien! Has ganado experiencia ajedrecística.",
  "¡Enhorabuena! Tu goblin ve mejor el tablero.",
  "¡Bravo! Has entrenado como un verdadero goblin del ajedrez.",
  "¡Genial! Cada partida te acerca al siguiente nivel.",
  "¡Buen trabajo! El goblin está más concentrado.",
  "¡Muy bien! Has mejorado tu lectura del tablero.",
  "¡Enhorabuena! Has completado un buen reto goblin.",
  "¡Gran esfuerzo! Cada jugada cuenta.",
  "¡Excelente! Tu mente ajedrecística sigue creciendo.",
  "¡Bravo! El goblin aprende jugando.",
  "¡Buen entrenamiento! Sigue mejorando partida a partida.",
  "¡Enhorabuena! Has sumado poder goblin al tablero.",
  "¡Muy buena partida! Has ganado experiencia.",
  "¡Genial! El goblin ya calcula más rápido.",
  "¡Bravo! Has entrenado atención y rapidez mental.",
  "¡Buen intento! La próxima será aún mejor.",
  "¡Fantástico! Tu goblin luchó hasta el final.",
  "¡Muy bien! Cada error se convierte en progreso.",
  "¡Enhorabuena! Hoy has entrenado visión táctica.",
  "¡Gran trabajo! Tu cálculo está mejorando.",
  "¡Bravo! Tu goblin sube de nivel.",
  "¡Enhorabuena! El reino del tablero te espera.",
  "¡Buen trabajo! Tu goblin está aprendiendo grandes jugadas.",
  "¡Genial! Has descubierto nuevas rutas.",
  "¡Muy bien! Cada partida suma.",
  "¡Bravo! Tu concentración ha trabajado duro.",
  "¡Excelente esfuerzo! Has entrenado hasta el final.",
  "¡Enhorabuena! Tu intuición ajedrecística mejora.",
  "¡Buen entrenamiento! El goblin está preparado para volver.",
  "¡Fantástico! Cada punto demuestra tu progreso.",
  "¡Muy bien! Estás más cerca del siguiente nivel.",
  "¡Enhorabuena! Tu goblin domina mejor el tablero.",
  "¡Bravo! Has ganado experiencia sobre las 64 casillas.",
  "¡Genial! La práctica te está haciendo más fuerte.",
  "¡Buen trabajo! Has entrenado calma y cálculo.",
  "¡Muy bien! Hoy has progresado.",
  "¡Excelente! Has pensado como ajedrecista.",
  "¡Enhorabuena! Cada intento te hace más preciso.",
  "¡Gran partida! Tu goblin ha demostrado esfuerzo.",
  "¡Bravo! Tu atención al tablero va mejorando.",
  "¡Fantástico! Has sumado aprendizaje.",
  "¡Enhorabuena! El goblin vuelve con más estrategia.",
  "¡Buen trabajo! Cada ronda te hace más fuerte.",
  "¡Genial! Tu mente calcula mejor cada vez.",
  "¡Muy bien! Has avanzado en tu entrenamiento.",
  "¡Bravo! La constancia también gana partidas.",
  "¡Excelente esfuerzo! Has practicado concentración.",
  "¡Enhorabuena! Tu juego sigue creciendo.",
  "¡Buen intento! Has ganado experiencia importante.",
  "¡Fantástico! El goblin aprendió una nueva lección.",
  "¡Muy bien! Has entrenado tu mirada ajedrecística.",
  "¡Enhorabuena! Tu visión táctica ha mejorado.",
  "¡Bravo! Has jugado, aprendido y progresado.",
  "¡Genial! Tu entrenamiento goblin va por buen camino.",
  "¡Buen trabajo! Cada punto es progreso.",
  "¡Muy bien! El tablero ya se entiende mejor.",
  "¡Excelente! Has practicado con actitud de campeón.",
  "¡Enhorabuena! Has subido tu nivel de atención.",
  "¡Gran esfuerzo! El goblin no se rinde.",
  "¡Bravo! Has mejorado tu lectura de posiciones.",
  "¡Fantástico! Has ganado práctica real.",
  "¡Enhorabuena! Tu ajedrez goblin está creciendo.",
  "¡Buen trabajo! Has entrenado memoria visual.",
  "¡Genial! Cada intento te hace más rápido.",
  "¡Muy bien! Has trabajado cálculo y precisión.",
  "¡Bravo! Estás construyendo buenos reflejos.",
  "¡Excelente entrenamiento! Sigue adelante.",
  "¡Enhorabuena! Has completado una buena ronda.",
  "¡Buen intento! La mejora ya está en marcha.",
  "¡Fantástico! El goblin aprende sobre el tablero.",
  "¡Muy bien! Cada jugada cuenta.",
  "¡Enhorabuena! Has entrenado como un verdadero jugador.",
  "¡Bravo! Tu visión de juego está más afinada.",
  "¡Genial! Has sumado práctica de calidad.",
  "¡Buen trabajo! El goblin está más atento.",
  "¡Muy bien! Sigue pensando como ajedrecista.",
  "¡Excelente! Tu progreso se nota.",
  "¡Enhorabuena! Has ganado experiencia táctica.",
  "¡Gran esfuerzo! Cada partida te fortalece.",
  "¡Bravo! El goblin aprendió jugando.",
  "¡Fantástico! Tu entrenamiento continúa.",
  "¡Enhorabuena! Has mejorado tu control del tablero.",
  "¡Buen trabajo! Has dado un paso más.",
  "¡Genial! Cada ronda te prepara mejor.",
  "¡Muy bien! Tu concentración sigue subiendo.",
  "¡Bravo! Has entrenado visión, cálculo y calma.",
  "¡Excelente partida! Has sumado aprendizaje.",
  "¡Enhorabuena! Tu nivel goblin está creciendo.",
  "¡Buen intento! Vuelve más fuerte.",
  "¡Fantástico! Has practicado ajedrez de verdad.",
  "¡Muy bien! Fin de la partida, comienzo de la mejora goblin."
];

const boardEl = document.querySelector("#board");
const pathLayer = document.querySelector("#pathLayer");
const targetWordEl = document.querySelector("#targetWord");
const scoreEl = document.querySelector("#score");
const livesEl = document.querySelector("#lives");
const timeEl = document.querySelector("#time");
const streakEl = document.querySelector("#streak");
const movesEl = document.querySelector("#moves");
const bestEl = document.querySelector("#best");
const messageEl = document.querySelector("#message");
const statusPanel = document.querySelector(".status-panel");
const boardWrap = document.querySelector(".board-wrap");
const streakPill = document.querySelector("#streakPill");
const streakText = document.querySelector("#streakText");
const streakLabel = document.querySelector("#streakLabel");
const streakBar = document.querySelector("#streakBar");
const timeBar = document.querySelector("#timeBar");
const timeBonusEl = document.querySelector("#timeBonus");
const rewardToastEl = document.querySelector("#rewardToast");
const levelToastEl = document.querySelector("#levelToast");
const restartButton = document.querySelector("#restartButton");
const startButton = document.querySelector("#startButton");
const startOverlay = document.querySelector("#startOverlay");
const endDialog = document.querySelector("#endDialog");
const dialogBadge = document.querySelector("#dialogBadge");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const nextButton = document.querySelector("#nextButton");

let state = {};
let timerId = null;
let audioCtx = null;
let lastTickSecond = -1;
let gameStarted = false;

function ensureAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }
    audioCtx = new AudioContextClass();
    const master = audioCtx.createGain();
    master.gain.value = 0.36;
    master.connect(audioCtx.destination);
    audioCtx.master = master;
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playTone(freq, duration, type = "sine", volume = 0.06) {
  if (!audioCtx) {
    return;
  }

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(audioCtx.master || audioCtx.destination);
  osc.start(now);
  osc.stop(now + duration);
}

function playNoise(duration, volume = 0.08, filterFreq = 4000) {
  if (!audioCtx) {
    return;
  }

  const now = audioCtx.currentTime;
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * duration, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }

  const source = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  source.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(filterFreq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.master || audioCtx.destination);
  source.start(now);
  source.stop(now + duration);
}

function playHitSound(streak) {
  const base = 480 + Math.min(streak, 15) * 25;
  playNoise(0.06, 0.10, 6000);
  playTone(base, 0.10, "sine", 0.07);
  setTimeout(() => playTone(base * 1.33, 0.08, "sine", 0.05), 50);
  setTimeout(() => playTone(base * 1.78, 0.06, "triangle", 0.035), 100);
  if (streak >= 4) {
    setTimeout(() => playTone(base * 2.2, 0.10, "sine", 0.03), 115);
  }
}

function playFailSound() {
  playNoise(0.14, 0.13, 1800);
  playTone(320, 0.12, "sawtooth", 0.07);
  setTimeout(() => playTone(120, 0.12, "sawtooth", 0.05), 80);
}

function playWinSound() {
  [523, 659, 784, 1046].forEach((freq, index) => {
    setTimeout(() => playTone(freq, 0.13, "triangle", 0.07), index * 85);
  });
}

function playTimeBonusSound() {
  playTone(740, 0.08, "triangle", 0.055);
  setTimeout(() => playTone(990, 0.10, "sine", 0.06), 70);
  setTimeout(() => playTone(1320, 0.12, "triangle", 0.045), 150);
  setTimeout(() => playNoise(0.06, 0.08, 6200), 60);
}

function playNewLevelSound() {
  playTone(392, 0.07, "triangle", 0.045);
  setTimeout(() => playTone(523, 0.07, "triangle", 0.05), 70);
  setTimeout(() => playTone(659, 0.10, "sine", 0.055), 140);
}

function playRewardSound() {
  playTone(880, 0.06, "triangle", 0.04);
  setTimeout(() => playTone(1175, 0.08, "sine", 0.04), 65);
}

function playGameOverSound() {
  playTone(360, 0.18, "sawtooth", 0.06);
  setTimeout(() => playTone(160, 0.22, "square", 0.05), 130);
  playNoise(0.35, 0.055, 2600);
}

function playTickSound() {
  playTone(880, 0.03, "square", 0.015);
}

function newState() {
  const word = pickWordForLevel();
  const path = createKnightPath(word);
  const board = createLetterBoard(word, path);
  const savedTime = Number(localStorage.getItem("goblinSaltarin:lastTime") || ROUND_SECONDS);
  const level = Number(localStorage.getItem("goblinSaltarin:level") || 1);

  return {
    word,
    level,
    path,
    playerPath: [path[0]],
    board,
    progress: 1,
    score: Number(localStorage.getItem("goblinSaltarin:lastScore") || 0),
    lives: MAX_LIVES,
    time: Math.max(1, savedTime),
    streak: 0,
    moves: 0,
    wordMistakes: 0,
    lastEatAt: performance.now(),
    speedChain: 0,
    best: Number(localStorage.getItem("goblinSaltarin:best") || 0),
    ended: false
  };
}

function pickWord() {
  const last = localStorage.getItem("goblinSaltarin:lastWord");
  const pool = WORDS.filter((word) => word !== last);
  const word = pool[Math.floor(Math.random() * pool.length)] || WORDS[0];
  localStorage.setItem("goblinSaltarin:lastWord", word);
  return word;
}

function pickWordForLevel() {
  const level = Number(localStorage.getItem("goblinSaltarin:level") || 1);
  const usedWords = loadUsedWords();
  const targetLength = targetWordLengthForLevel(level);
  let available = WORDS.filter((word) => !usedWords.has(word));
  if (!available.length) {
    usedWords.clear();
    available = [...WORDS];
  }
  const exactPool = available.filter((word) => word.length === targetLength);
  const easyPool = available.filter((word) => word.length <= targetLength);
  const candidates = exactPool.length ? exactPool : easyPool.length ? easyPool : available;
  const word = candidates[Math.floor(Math.random() * candidates.length)] || WORDS[0];
  usedWords.add(word);
  saveUsedWords(usedWords);
  return word;
}

function loadUsedWords() {
  try {
    return new Set(JSON.parse(localStorage.getItem("goblinSaltarin:usedWords") || "[]"));
  } catch {
    return new Set();
  }
}

function saveUsedWords(usedWords) {
  localStorage.setItem("goblinSaltarin:usedWords", JSON.stringify([...usedWords]));
}

function targetWordLengthForLevel(level) {
  if (level <= 4) {
    return 4;
  }
  if (level <= 8) {
    return 5;
  }
  if (level <= 13) {
    return 6;
  }
  if (level <= 19) {
    return 7;
  }
  if (level <= 27) {
    return 8;
  }
  if (level <= 37) {
    return 9;
  }
  if (level <= 49) {
    return 10;
  }
  return 14;
}

function createKnightPath(word) {
  for (let attempt = 0; attempt < 10000; attempt += 1) {
    const start = {
      row: randomInt(BOARD_SIZE),
      col: randomInt(BOARD_SIZE)
    };
    const path = [start];
    const used = new Set([cellKey(start)]);

    if (extendPath(path, used, word.length)) {
      return path;
    }
  }

  throw new Error("No se pudo crear una ruta de caballo para la palabra.");
}

function extendPath(path, used, targetLength) {
  if (path.length === targetLength) {
    return true;
  }

  const current = path[path.length - 1];
  const moves = shuffle(validKnightMoves(current).filter((cell) => !used.has(cellKey(cell))));

  for (const move of moves) {
    path.push(move);
    used.add(cellKey(move));

    if (extendPath(path, used, targetLength)) {
      return true;
    }

    path.pop();
    used.delete(cellKey(move));
  }

  return false;
}

function createLetterBoard(word, path) {
  const board = Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => randomLetter())
  );

  path.forEach((cell, index) => {
    board[cell.row][cell.col] = word[index];
  });

  return board;
}

function render() {
  scoreEl.textContent = state.score;
  livesEl.textContent = "♥".repeat(state.lives) + "♡".repeat(Math.max(0, MAX_LIVES - state.lives));
  timeEl.textContent = Math.max(0, Math.ceil(state.time));
  streakEl.textContent = state.streak;
  movesEl.textContent = state.moves;
  bestEl.textContent = state.best;
  updateStreakPill();
  updateTimeBar();
  updateTimerPulse();

  renderTargetWord();
  renderBoard();
  renderPathLayer();
}

function renderTargetWord() {
  targetWordEl.innerHTML = "";

  [...state.word].forEach((letter, index) => {
    const chip = document.createElement("span");
    chip.className = "letter-chip";
    chip.textContent = letter;

    if (index < state.progress) {
      chip.classList.add("done");
    } else if (index === state.progress) {
      chip.classList.add("current");
    }

    targetWordEl.append(chip);
  });
}

function renderBoard() {
  boardEl.innerHTML = "";

  for (let row = 0; row < BOARD_SIZE; row += 1) {
    for (let col = 0; col < BOARD_SIZE; col += 1) {
      const button = document.createElement("button");
      const cell = { row, col };
      const pathIndex = state.path.findIndex((pathCell) => sameCell(pathCell, cell));

      button.type = "button";
      button.className = "cell";
      button.setAttribute("aria-label", `Letra ${state.board[row][col]}`);
      button.dataset.row = row;
      button.dataset.col = col;

      const letter = document.createElement("span");
      letter.className = "cell-letter";
      letter.textContent = state.board[row][col];
      button.append(letter);

      if (pathIndex === 0) {
        button.classList.add("start");
      }

      if (state.playerPath.some((pathCell) => sameCell(pathCell, cell))) {
        button.classList.add("visited");
      }

      const playerPathIndex = state.playerPath.findIndex((pathCell) => sameCell(pathCell, cell));
      if (playerPathIndex > -1 && !sameCell(cell, currentCell())) {
        const stepBadge = document.createElement("span");
        stepBadge.className = "step-badge";
        stepBadge.textContent = String(playerPathIndex + 1);
        stepBadge.setAttribute("aria-hidden", "true");
        button.append(stepBadge);
      }

      if (sameCell(cell, currentCell())) {
        button.classList.add("current");
        const piece = document.createElement("img");
        piece.className = "goblin-piece";
        piece.src = "assets/goblin-piece.png";
        piece.alt = "";
        piece.setAttribute("aria-hidden", "true");
        button.append(piece);

        const lastEaten = document.createElement("span");
        lastEaten.className = "last-eaten";
        lastEaten.textContent = state.board[row][col];
        lastEaten.setAttribute("aria-hidden", "true");
        button.append(lastEaten);
      }

      if (isPlayableNextCell(cell)) {
        button.classList.add("hint");
      }

      if (row === BOARD_SIZE - 1) {
        const fileLabel = document.createElement("span");
        fileLabel.className = "coord file";
        fileLabel.textContent = "abcdefgh"[col];
        fileLabel.setAttribute("aria-hidden", "true");
        button.append(fileLabel);
      }

      if (col === BOARD_SIZE - 1) {
        const rankLabel = document.createElement("span");
        rankLabel.className = "coord rank";
        rankLabel.textContent = String(BOARD_SIZE - row);
        rankLabel.setAttribute("aria-hidden", "true");
        button.append(rankLabel);
      }

      button.addEventListener("click", () => handleCellClick(cell, button));
      boardEl.append(button);
    }
  }
}

function renderPathLayer() {
  pathLayer.innerHTML = "";

  if (!state.playerPath || state.playerPath.length < 2) {
    return;
  }

  const points = state.playerPath.map((cell) => `${cell.col + 0.5},${cell.row + 0.5}`).join(" ");
  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", points);
  polyline.setAttribute("class", "path-line");
  pathLayer.append(polyline);

  state.playerPath.forEach((cell, index) => {
    if (index === state.playerPath.length - 1) {
      return;
    }

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", String(cell.col + 0.5));
    circle.setAttribute("cy", String(cell.row + 0.5));
    circle.setAttribute("r", "0.12");
    circle.setAttribute("class", "path-dot");
    pathLayer.append(circle);
  });
}

function handleCellClick(cell, button) {
  ensureAudio();

  if (!gameStarted || state.ended) {
    return;
  }

  if (sameCell(cell, currentCell())) {
    showMessage("Esa es tu casilla actual. Busca el siguiente salto.", "error");
    pulse(button, "bad");
    return;
  }

  if (state.playerPath.some((pathCell) => sameCell(pathCell, cell))) {
    showMessage("Esa casilla ya esta recorrida. Sigue hacia delante.", "error");
    pulse(button, "bad");
    return;
  }

  const expectedLetter = state.word[state.progress];
  const clickedLetter = state.board[cell.row][cell.col];
  const legal = isKnightMove(currentCell(), cell);
  const correct = legal && clickedLetter === expectedLetter && canCompleteFrom(cell);

  if (correct) {
    handleCorrect(button, expectedLetter);
    return;
  }

  if (!legal) {
    handleMistake(button, "Ese salto no es de caballo.");
  } else if (clickedLetter !== expectedLetter) {
    handleMistake(button, `Necesitas la letra ${expectedLetter}.`);
  } else {
    handleMistake(button, "Esa letra no deja completar la palabra.");
  }
}

function isPlayableNextCell(cell) {
  if (!gameStarted || state.ended || state.progress >= state.word.length) {
    return false;
  }

  if (state.playerPath.some((pathCell) => sameCell(pathCell, cell))) {
    return false;
  }

  return isKnightMove(currentCell(), cell) &&
    state.board[cell.row][cell.col] === state.word[state.progress] &&
    canCompleteFrom(cell);
}

function handleCorrect(button, letter) {
  const now = performance.now();
  const elapsed = now - state.lastEatAt;
  const cell = {
    row: Number(button.dataset.row),
    col: Number(button.dataset.col)
  };
  state.playerPath.push(cell);
  state.progress += 1;
  state.streak += 1;
  state.moves += 1;
  state.score += 100 * getComboMultiplier() + state.streak * 15;
  applySpeedBonus(elapsed);
  showStreakMilestone();
  state.lastEatAt = now;
  saveBest();
  pulse(button, "good");
  spawnBurst(button, state.streak);
  bounce(scoreEl);
  playHitSound(state.streak);
  showMessage(getPraiseMessage(letter), "success");
  render();

  if (state.progress >= state.word.length) {
    finishRound(true);
  }
}

function handleMistake(button, text) {
  state.lives -= 1;
  state.streak = 0;
  state.speedChain = 0;
  state.wordMistakes += 1;
  pulse(button, "bad");
  playFailSound();
  shakeBoard();
  showMessage(`${text} Pierdes una vida.`, "error");
  render();

  if (state.lives <= 0) {
    finishRound(false, "Te quedaste sin vidas.");
  }
}

function finishRound(won, reason = "") {
  state.ended = true;
  gameStarted = false;
  clearInterval(timerId);
  if (won) {
    const perfect = state.wordMistakes === 0;
    state.time += WORD_TIME_BONUS;
    state.score += WORD_SCORE_BONUS;
    if (perfect) {
      state.time += PERFECT_TIME_BONUS;
      state.score += PERFECT_SCORE_BONUS;
      showRewardToast(`💎 Perfecto +${PERFECT_SCORE_BONUS} · +${PERFECT_TIME_BONUS}s`);
      playRewardSound();
    }
    localStorage.setItem("goblinSaltarin:level", String(state.level + 1));
    scoreEl.textContent = state.score;
    timeEl.textContent = Math.ceil(state.time);
    updateTimeBar();
    updateTimerPulse();
    showTimeBonus();
    playTimeBonusSound();
  }
  saveBest();
  localStorage.setItem("goblinSaltarin:lastScore", won ? String(state.score) : "0");
  localStorage.setItem("goblinSaltarin:lastTime", won ? String(state.time) : String(ROUND_SECONDS));
  timeEl.parentElement.classList.remove("warning", "danger");
  timeBar.classList.remove("danger");
  if (won) {
    playWinSound();
  } else {
    playGameOverSound();
  }

  const showDialog = () => {
    dialogBadge.textContent = "Entrenamiento";
    dialogTitle.textContent = won ? "🎉 Palabra completada" : "💪 Fin de partida";
    dialogText.textContent = won
      ? `Bonus aplicado. Puntos: ${state.score}.`
      : `${randomDefeatMessage()} Puntos conseguidos: ${state.score}.`;
    nextButton.textContent = won ? "Siguiente palabra" : "🔁 Intentar de nuevo";
    endDialog.hidden = false;
  };

  if (won) {
    setTimeout(() => startGame(false), 900);
  } else {
    showDialog();
  }
}

function startGame(resetScore = false) {
  clearInterval(timerId);
  ensureAudio();
  if (resetScore) {
    localStorage.setItem("goblinSaltarin:lastScore", "0");
    localStorage.setItem("goblinSaltarin:lastTime", String(ROUND_SECONDS));
    localStorage.setItem("goblinSaltarin:level", "1");
    localStorage.setItem("goblinSaltarin:usedWords", "[]");
  }
  state = newState();
  gameStarted = true;
  lastTickSecond = -1;
  endDialog.hidden = true;
  startOverlay.classList.add("hidden");
  restartButton.hidden = false;
  timeEl.parentElement.classList.remove("warning", "danger");
  timeEl.parentElement.style.borderColor = "";
  showMessage("", "");
  render();
  showLevelToast();
  playNewLevelSound();
  playTone(440, 0.08, "triangle", 0.05);
  setTimeout(() => playTone(659, 0.08, "triangle", 0.05), 90);
  timerId = setInterval(tick, 100);
}

function showIntro() {
  clearInterval(timerId);
  localStorage.setItem("goblinSaltarin:lastScore", "0");
  localStorage.setItem("goblinSaltarin:lastTime", String(ROUND_SECONDS));
  localStorage.setItem("goblinSaltarin:level", "1");
  localStorage.setItem("goblinSaltarin:usedWords", "[]");
  state = newState();
  state.ended = true;
  state.score = 0;
  state.streak = 0;
  state.moves = 0;
  gameStarted = false;
  endDialog.hidden = true;
  startOverlay.classList.remove("hidden");
  restartButton.hidden = true;
  timeEl.parentElement.classList.remove("warning", "danger");
  timeBar.classList.remove("danger");
  showMessage("", "");
  render();
}

function tick() {
  if (state.ended) {
    return;
  }

  state.time = Math.max(0, state.time - 0.1);
  const displaySecond = Math.ceil(state.time);
  timeEl.textContent = displaySecond;
  updateTimeBar();
  updateTimerPulse();

  if (displaySecond <= 10 && displaySecond !== lastTickSecond && displaySecond > 0) {
    lastTickSecond = displaySecond;
    playTickSound();
  }

  if (state.time <= 0) {
    state.time = 0;
    render();
    finishRound(false, "Se acabo el tiempo.");
  }
}

function currentCell() {
  return state.playerPath[state.playerPath.length - 1];
}

function validKnightMoves(cell) {
  return KNIGHT_STEPS.map(([rowStep, colStep]) => ({
    row: cell.row + rowStep,
    col: cell.col + colStep
  })).filter((next) => isInside(next));
}

function canCompleteFrom(candidateCell) {
  const used = new Set(state.playerPath.map(cellKey));
  used.add(cellKey(candidateCell));
  return canSpellFrom(candidateCell, state.progress + 1, used);
}

function canSpellFrom(cell, nextIndex, used) {
  if (nextIndex >= state.word.length) {
    return true;
  }

  const nextLetter = state.word[nextIndex];
  const candidates = validKnightMoves(cell).filter((next) =>
    !used.has(cellKey(next)) && state.board[next.row][next.col] === nextLetter
  );

  for (const next of candidates) {
    used.add(cellKey(next));
    if (canSpellFrom(next, nextIndex + 1, used)) {
      used.delete(cellKey(next));
      return true;
    }
    used.delete(cellKey(next));
  }

  return false;
}

function isKnightMove(from, to) {
  const rowDistance = Math.abs(from.row - to.row);
  const colDistance = Math.abs(from.col - to.col);
  return (rowDistance === 2 && colDistance === 1) || (rowDistance === 1 && colDistance === 2);
}

function isInside(cell) {
  return cell.row >= 0 && cell.row < BOARD_SIZE && cell.col >= 0 && cell.col < BOARD_SIZE;
}

function sameCell(a, b) {
  return a.row === b.row && a.col === b.col;
}

function cellKey(cell) {
  return `${cell.row}:${cell.col}`;
}

function randomLetter(forbidden = new Set()) {
  const allowed = [...LETTERS].filter((letter) => !forbidden.has(letter));
  return allowed[randomInt(allowed.length || LETTERS.length)];
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function saveBest() {
  if (state.score > state.best) {
    state.best = state.score;
    localStorage.setItem("goblinSaltarin:best", String(state.best));
  }
}

function getComboMultiplier() {
  if (state.streak >= 10) {
    return 3;
  }
  if (state.streak >= 5) {
    return 2;
  }
  if (state.streak >= 3) {
    return 1.5;
  }
  return 1;
}

function applySpeedBonus(elapsed) {
  if (elapsed < 1000) {
    state.score += SPEED_BONUS;
    state.speedChain += 1;
    showRewardToast(`🚀 Speed +${SPEED_BONUS}`);
  } else if (elapsed < 2000) {
    state.score += FAST_BONUS;
    state.speedChain += 1;
    showRewardToast(`⚡ Rápido +${FAST_BONUS}`);
  } else {
    state.speedChain = 0;
  }

  if (state.speedChain > 0 && state.speedChain % 3 === 0) {
    state.score += SPEED_CHAIN_BONUS;
    showRewardToast(`⚡ Combo velocidad +${SPEED_CHAIN_BONUS}`);
    playRewardSound();
  }
}

function showStreakMilestone() {
  if (state.streak === 3) {
    showRewardToast("🔥 x3 Racha");
  } else if (state.streak === 5) {
    showRewardToast("🔥 x5 Imparable");
  } else if (state.streak === 10) {
    showRewardToast("👑 x10 Goblin Maestro");
  }
}

function getPraiseMessage(letter) {
  if (state.streak >= 6) {
    return `Racha leyenda: ${letter}.`;
  }
  if (state.streak >= 4) {
    return `Imparable: ${letter}.`;
  }
  if (state.streak >= 2) {
    return `Racha goblin: ${letter}.`;
  }
  return `Correcto: ${letter}. Sigue saltando.`;
}

function updateStreakPill() {
  const active = state.streak > 0;
  streakPill.classList.toggle("active", active);
  streakText.textContent = active ? `x${state.streak}` : "x0";
  streakLabel.textContent = active ? `${state.streak} aciertos` : "Racha";
  streakBar.style.transform = active ? "scaleX(1)" : "scaleX(0)";
}

function updateTimeBar() {
  const percent = Math.max(0, state.time / ROUND_SECONDS);
  timeBar.style.transform = `scaleX(${percent})`;
  timeBar.classList.toggle("danger", percent <= 0.166);
}

function updateTimerPulse() {
  const seconds = Math.ceil(state.time);
  timeEl.parentElement.classList.remove("warning", "danger");
  if (seconds <= 5) {
    timeEl.parentElement.classList.add("danger");
  } else if (seconds <= 10) {
    timeEl.parentElement.classList.add("warning");
  }
}

function showTimeBonus() {
  timeBonusEl.textContent = `✨ +${WORD_TIME_BONUS} SEGUNDOS`;
  timeBonusEl.classList.remove("show");
  void timeBonusEl.offsetWidth;
  timeBonusEl.classList.add("show");
  setTimeout(() => timeBonusEl.classList.remove("show"), 1050);
}

function showLevelToast() {
  levelToastEl.textContent = "🆕 Nueva palabra";
  levelToastEl.classList.remove("show");
  void levelToastEl.offsetWidth;
  levelToastEl.classList.add("show");
  setTimeout(() => levelToastEl.classList.remove("show"), 820);
}

function showRewardToast(text) {
  rewardToastEl.textContent = text;
  rewardToastEl.classList.remove("show");
  void rewardToastEl.offsetWidth;
  rewardToastEl.classList.add("show");
  setTimeout(() => rewardToastEl.classList.remove("show"), 880);
}

function randomDefeatMessage() {
  return DEFEAT_MESSAGES[randomInt(DEFEAT_MESSAGES.length)];
}

function bounce(element) {
  element.classList.remove("bounce");
  void element.offsetWidth;
  element.classList.add("bounce");
}

function shakeBoard() {
  boardWrap.classList.remove("shake");
  void boardWrap.offsetWidth;
  boardWrap.classList.add("shake");
  setTimeout(() => boardWrap.classList.remove("shake"), 220);
}

function spawnBurst(button, streak) {
  const ring = document.createElement("span");
  ring.className = "burst-ring";
  button.append(ring);
  setTimeout(() => ring.remove(), 560);

  const count = 6 + Math.min(streak, 8) * 2;
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 22 + Math.random() * 34;
    particle.className = "burst-particle";
    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    button.append(particle);
    setTimeout(() => particle.remove(), 560);
  }
}

function showMessage(text, type) {
  messageEl.textContent = text;
  statusPanel.classList.remove("success", "error");

  if (type) {
    statusPanel.classList.add(type);
  }
}

function pulse(button, className) {
  button.classList.remove("good", "bad");
  void button.offsetWidth;
  button.classList.add(className);
}

restartButton.addEventListener("click", () => startGame(true));
startButton.addEventListener("click", () => startGame(true));
nextButton.addEventListener("click", () => startGame(false));

showIntro();
