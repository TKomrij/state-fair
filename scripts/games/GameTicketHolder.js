const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("gameTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".games")
  userChoiceElement.innerHTML += event.detail.ticket
})