function updateGridItem(item) {
    const states = [" ", "/", "X", "full"]; // Espaço em branco adicionado
    let currentStateIndex = states.indexOf(item.textContent); // Verifica o conteúdo de texto
    currentStateIndex = (currentStateIndex + 1) % states.length;
    item.textContent = states[currentStateIndex]; // Define o conteúdo de texto
    item.classList.remove("slash", "x", "full"); // Remove classes antigas
    if (states[currentStateIndex] === "/") item.classList.add("slash");
    else if (states[currentStateIndex] === "X") item.classList.add("x");
    else if (states[currentStateIndex] === "full") item.classList.add("full");
  }
  
  function updateFuriaItem(item) {
    const states = [" ", "/"]; // Espaço em branco adicionado
    let currentStateIndex = states.indexOf(item.textContent); // Verifica o conteúdo de texto
    currentStateIndex = (currentStateIndex + 1) % states.length;
    item.textContent = states[currentStateIndex]; // Define o conteúdo de texto
    item.classList.remove("slash"); // Remove classes antigas
    if (states[currentStateIndex] === "/") item.classList.add("slash");
  }
  
  function createGrid(containerId, numItems) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < numItems; i++) {
      const item = document.createElement('div');
      item.className = 'grid-item';
      item.addEventListener('click', () => updateGridItem(item));
      container.appendChild(item);
    }
  }
  
  function createFuriaGrid(containerId, numItems) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < numItems; i++) {
      const item = document.createElement('div');
      item.className = 'furia-item';
      item.addEventListener('click', () => updateFuriaItem(item));
      container.appendChild(item);
    }
  }
  
  createGrid("forcaVontadeDante", 10);
  createGrid("vitalidadeDante", 10);
  createFuriaGrid("furiaDante", 5);
  // Repita para os outros personagens...
  createGrid("forcaVontadeLeandro", 10);
  createGrid("vitalidadeLeandro", 10);
  createFuriaGrid("furiaLeandro", 5);
  createGrid("forcaVontadeTiuTe", 10);
  createGrid("vitalidadeTiuTe", 10);
  createFuriaGrid("furiaTiuTe", 5);
  createGrid("forcaVontadeAkila", 10);
  createGrid("vitalidadeAkila", 10);
  createFuriaGrid("furiaAkila", 5);
  createGrid("forcaVontadeRicardo", 10);
  createGrid("vitalidadeRicardo", 10);
  createFuriaGrid("furiaRicardo", 5);
  