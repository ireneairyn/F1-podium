const drivers = {
  ALB: "Alexander Albon",
  ALO: "Fernando Alonso",
  BOT: "Valtteri Bottas",
  DEV: "Nyck de Vries",
  GAS: "Pierre Gasly",
  HAM: "Lewis Hamilton",
  HUL: "Nico Hulkenberg",
  LEC: "Charles Leclerc",
  MAG: "Kevin Magnussen",
  NOR: "Lando Norris",
  OCO: "Esteban Ocon",
  PER: "Sergio Perez",
  PIA: "Oscar Piastri",
  RUS: "George Russell",
  SAI: "Carlos Sainz",
  SAR: "Alexander Albon",
  STR: "Lance Stroll",
  TSU: "Yuki Tsunoda",
  VER: "Max Verstappen",
  ZHO: "Zhou Guanyu",
};

function generatePodium() {
  const tempDrivers = { ...drivers };

  let podium = [];

  // select random driver for first place
  let randomFirst =
    Object.keys(tempDrivers)[
      Math.floor(Math.random() * Object.keys(tempDrivers).length)
    ];
  podium.push(randomFirst);
  delete tempDrivers[randomFirst];

  // select random driver for second place
  let randomSecond =
    Object.keys(tempDrivers)[
      Math.floor(Math.random() * Object.keys(tempDrivers).length)
    ];
  podium.push(randomSecond);
  delete tempDrivers[randomSecond];

  // select random driver for third place
  let randomThird =
    Object.keys(tempDrivers)[
      Math.floor(Math.random() * Object.keys(tempDrivers).length)
    ];
  podium.push(randomThird);
  console.log(podium);
  return podium;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("generate");
  button.addEventListener("click", () => {
    const response1 = document.getElementById("response1");
    const response2 = document.getElementById("response2");
    const response3 = document.getElementById("response3");

    const [driver1, driver2, driver3] = generatePodium();
    response1.innerText = drivers[driver1];
    response2.innerText = drivers[driver2];
    response3.innerText = drivers[driver3];
  
    const hashtag = document.getElementById("hashtag");
    hashtag.innerText = `#${driver1}-${driver2}-${driver3}`;
  });
});
