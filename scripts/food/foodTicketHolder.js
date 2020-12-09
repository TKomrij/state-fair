const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("foodTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".food")
  userChoiceElement.innerHTML += event.detail.ticket
})

