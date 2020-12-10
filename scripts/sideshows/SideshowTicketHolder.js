const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("sideshowTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".sideshow")
  userChoiceElement.innerHTML += event.detail.ticket
})