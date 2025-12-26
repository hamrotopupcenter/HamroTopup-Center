let currentGame = "";
let packages = {};

const gamePackages = {
  "Free Fire": [
   { name: "25💎", price: 35 },
    { name: "50💎", price: 60 },
    { name: "115💎", price: 95 },
    { name: "240💎", price: 190 },
    { name: "355💎", price: 280 },
    { name: "480💎", price: 380 },
    { name: "530💎", price: 440 },
    { name: "610💎", price: 480 },
    { name: "1090💎", price: 880 },
    { name: "1240💎", price: 960 },
    { name: "2530💎", price: 1870 },
    { name: "5060💎", price: 3725 },
    { name: "10120💎", price: 7400 },
    { name: "Weekly Memberhip🎟", price: 190 },
    { name: "Monthly Membershio🎟", price: 930 },
    { name: "Levelup pass🎟", price: 530 },
  ],
  "Mobile Legends": [
   { name: "55 Diamonds", price: 160 },
    { name: "110 Diamonds", price: 270 },
    { name: "165 Diamonds", price: 355 },
    { name: "257 Diamonds", price: 540 },
     { name: "312 Diamonds", price: 670 },
    { name: "447 Diamonds", price: 930 }, 
    { name: "514 Diamonds", price: 1070 },
    { name: "706 Diamonds", price: 1450 },
    { name: "1050 Diamonds", price: 2140 }, 
    { name: "2195 Diamonds", price: 4260 },
    { name: "3688 Diamonds", price: 7000 },
    { name: "5532 Diamonds", price: 10460 }, 
    { name: "Weekly 🎟", price: 250 },
    { name: "Twilight 🎟", price: 1220 },
  ],
  "PUBG": [
    { name: "60 UC", price: 120 },
    { name: "325 UC", price: 620 }
  ],
  "Unipin Voucher": [
   { name: "Voucher 1 pcs", price: 2230 },
    { name: "Voucher2 pcs", price: 4430 },
    { name: "Voucher 3 pcs", price: 6650 },
    { name: "Voucher 5 pcs", price: 11100 },
    { name: "Voucher 10 pcs", price: 22200 },
  ],
  "Clash of Clans": [
   { name: "comming soon", price: 0 },
    { name: "comming soon", price: 0 },
  ]
};

function openPopup(game) {
  currentGame = game;
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("gameTitle").innerText = game + " Topup";
  document.getElementById("payment").classList.add("hidden");

  loadPackages(game);
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function loadPackages(game) {
  const select = document.getElementById("package");
  select.innerHTML = '<option value="">Select Package</option>';

  gamePackages[game].forEach(p => {
    const option = document.createElement("option");
    option.value = `${p.name}|${p.price}`;
    option.textContent = `${p.name} – Rs ${p.price}`;
    select.appendChild(option);
  });
}

function generateOrderId() {
  return Math.floor(100 + Math.random() * 900);
}
function getSequenceNumber() {
  let seq = localStorage.getItem("orderSequence");

  if (!seq) {
    seq = 1;
  } else {
    seq = parseInt(seq) + 1;
  }

  localStorage.setItem("orderSequence", seq);
  return seq;
}

function proceed() {
  const packValue = document.getElementById("package").value;
  const name = document.getElementById("name").value.trim();
  const uid = document.getElementById("uid").value.trim();

  if (!packValue || !name || !uid) {
    alert("Please fill all details");
    return;
  }

  const [packName, price] = packValue.split("|");
  const orderId = getSequenceNumber(); // 🔥 SEQUENCE NUMBER
  const date = new Date().toLocaleString();

  const message = `
#${orderId}

1x ${currentGame}
🔥 ${packName}
-------------------------
User ID: ${uid}

Item total: Rs ${price}
Total: Rs ${price}

Customer: ${name}
Payment: eSewa (Confirming)

Date: ${date}

Please find my payment screenshot below.
`;

  const phone = "9812837791"; // YOUR NUMBER
  const whatsappURL =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

  document.getElementById("whatsapp").href = whatsappURL;
  document.getElementById("payment").classList.remove("hidden");
}

