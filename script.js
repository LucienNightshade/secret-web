const output = document.getElementById('output');
const lines = [
  "Loading modules...",
  "Accessing encrypted logs...",
  "Analyzing network traffic...",
  "Compiling data...",
  "Parsing log_2038.sys",
  "Completed."
];

let i = 0;

function typeLine() {
  if (i < lines.length) {
    const line = document.createElement("div");
    line.textContent = lines[i++];
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    setTimeout(typeLine, 800);
  } else {
    const inputDiv = document.createElement("div");
    inputDiv.className = "input-line";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type command...";
    input.style.background = "black";
    input.style.color = "#0f0";
    input.style.border = "none";
    input.style.outline = "none";
    input.style.width = "100%";

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const cmd = input.value.trim();
        output.appendChild(document.createTextNode(`$ ${cmd}`));
        input.disabled = true;
        if (cmd === "enter_base") {
          output.appendChild(document.createElement("br"));
          output.appendChild(document.createTextNode("Redirecting..."));
          setTimeout(() => {
            window.location.href = "https://bbsproxy.mcsk.dev/"; // ←変更可能
          }, 1000);
       } else if (cmd === "analyze_logs") {
  const fakeLogs = [
    "[✓] Connecting to log server...",
    "[✓] Decrypting log archive...",
    "[✓] Parsing memory segment...",
    "[✓] Anomaly detected in sector 7G",
    "[✓] Extraction complete.",
    ">> Logs saved to /tmp/cache/"
  ];

  let j = 0;
  function showFakeLog() {
    if (j < fakeLogs.length) {
      const logLine = document.createElement("div");
      logLine.textContent = fakeLogs[j++];
      output.appendChild(logLine);
      output.scrollTop = output.scrollHeight;
      setTimeout(showFakeLog, 600);
    } else {
      const inputDiv = document.createElement("div");
      inputDiv.className = "input-line";
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type command...";
      input.style.background = "black";
      input.style.color = "#0f0";
      input.style.border = "none";
      input.style.outline = "none";
      input.style.width = "100%";

      input.addEventListener("keydown", arguments.callee);
      inputDiv.appendChild(input);
      output.appendChild(inputDiv);
      input.focus();
    }
  }

  setTimeout(showFakeLog, 500);
} else {
  output.appendChild(document.createElement("br"));
  output.appendChild(document.createTextNode("Command not found"));
}

      }
    });

    inputDiv.appendChild(input);
    output.appendChild(inputDiv);
    input.focus();
  }
}

// 背景エフェクト
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binaryRain = [];
for (let i = 0; i < canvas.width; i += 20) {
  binaryRain.push({ x: i, y: Math.random() * canvas.height });
}

function drawRain() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = "16px monospace";

  for (let i = 0; i < binaryRain.length; i++) {
    const char = Math.random() > 0.5 ? "1" : "0";
    ctx.fillText(char, binaryRain[i].x, binaryRain[i].y);
    binaryRain[i].y += 20;
    if (binaryRain[i].y > canvas.height) {
      binaryRain[i].y = 0;
    }
  }
  requestAnimationFrame(drawRain);
}

window.onload = () => {
  typeLine();
  drawRain();
};
