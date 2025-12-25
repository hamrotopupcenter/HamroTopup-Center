let currentGame = "";
let packages = {};

const gamePackages = {
  "Free Fire": [
    { name: "Weekly Membership", price: 190 },
    { name: "Monthly Membership", price: 799 }
  ],
  "Mobile Legends": [
    { name: "86 Diamonds", price: 220 },
    { name: "172 Diamonds", price: 430 }
  ],
  "PUBG": [
    { name: "60 UC", price: 120 },
    { name: "325 UC", price: 620 }
  ],
  "Unipin Voucher": [
    { name: "Rs 500 Voucher", price: 500 },
    { name: "Rs 1000 Voucher", price: 1000 }
  ],
  "Clash of Clans": [
    { name: "Gold Pass", price: 899 },
    { name: "500 Gems", price: 699 }
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
