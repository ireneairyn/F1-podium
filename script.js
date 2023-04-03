const drivers = {
  ALB: {name: "Alex", lastname: "Albon", color: "#37BEDD", team: "Williams"},
  ALO: {name: "Fernando", lastname: "Alonso", color: "#358C75", team: "Aston Martin"},
  BOT: {name: "Valtteri", lastname: "Bottas", color: "#C92D4B", team: "Alfa Romeo"},
  DEV: {name: "Nyck", lastname: "de Vries", color: "#5E8FAA", team: "AlphaTauri"},
  GAS: {name: "Pierre", lastname: "Gasly", color: "#2293D1", team: "Alpine"},
  HAM: {name: "Lewis", lastname: "Hamilton", color: "#6CD3BF", team: "Mercedes"},
  HUL: {name: "Nico", lastname: "Hulkenberg", color: "#B6BABD", team: "Haas"},
  LEC: {name: "Charles", lastname: "Leclerc", color: "#F91536", team: "Ferrari"},
  MAG: {name: "Kevin", lastname: "Magnussen", color: "#B6BABD", team: "Haas"},
  NOR: {name: "Lando", lastname: "Norris", color: "#F58020", team: "McLaren"},
  OCO: {name: "Esteban", lastname: "Ocon", color: "#2293D1", team: "Alpine"},
  PER: {name: "Sergio", lastname: "Perez", color: "#3671C6", team: "Red Bull Racing"},
  PIA: {name: "Oscar", lastname: "Piastri", color: "#F58020", team: "McLaren"},
  RUS: {name: "George", lastname: "Russell", color: "#6CD3BF", team: "Mercedes"},
  SAI: {name: "Carlos", lastname: "Sainz", color: "#F91536", team: "Ferrari"},
  SAR: {name: "Logan", lastname: "Sargeant", color: "#37BEDD", team: "Williams"},
  STR: {name: "Lance", lastname: "Stroll", color: "#358C75", team: "Aston Martin"},
  TSU: {name: "Yuki", lastname: "Tsunoda", color: "#5E8FAA", team: "AlphaTauri"},
  VER: {name: "Max", lastname: "Verstappen", color: "#3671C6", team: "Red Bull Racing"},
  ZHO: {name: "Zhou", lastname: "Guanyu", color: "#C92D4B", team: "Alfa Romeo"},
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

function formatDriverName(driver) {
  let lastname = driver.lastname;
  let name = driver.name;
  
  if (driver.lastname === "Guanyu" && driver.name === "Zhou") {
    return `<span style="font-weight:bold; color:${driver.color}; text-transform:uppercase;">ZHOE</span> <span style="font-weight:bold;">${driver.lastname}</span>`;
  }
  return `${driver.name} <span style="font-weight:bold; color:${driver.color}; text-transform:uppercase;">${driver.lastname}</span>`;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("generate");
  button.addEventListener("click", () => {
    const response1 = document.getElementById("response1");
    const response2 = document.getElementById("response2");
    const response3 = document.getElementById("response3");

    const [driver1, driver2, driver3] = generatePodium();
    response1.innerHTML = formatDriverName(drivers[driver1]);
    response2.innerHTML = formatDriverName(drivers[driver2]);
    response3.innerHTML = formatDriverName(drivers[driver3]);
  
    const hashtag = document.getElementById("hashtag");
    hashtag.innerText = `#${driver1}-${driver2}-${driver3}`;
  });
});
