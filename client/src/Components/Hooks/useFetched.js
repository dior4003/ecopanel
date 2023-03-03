let name = "";
let number = "";
let message = "";

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
function myFunctionName(val) {
  name = val;
}

function myFunctionTextarea(val) {
  message = val;
}

function handleSubmit() {
  const telegramUrl =
    "https://api.telegram.org/bot5154103913:AAEumEHqLbgPeprmQ3fqLTxs3I9tzr78MxQ/sendMessage?" +
    "chat_id=-1001553202935&parse_mode=HTML&text=";
  const param = `<b>Name:</b>${name} %0A<b>Phone:</b>${number}%0A<b>Message:</b>${message}%0A;`;

  postData(`${telegramUrl}${param}`);

  name = "";
  number = "";
  message = "";

  return false;
}
