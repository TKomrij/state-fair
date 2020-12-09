const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("rideTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".rides")
  userChoiceElement.innerHTML += event.detail.ticket
})

