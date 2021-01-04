const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("fullPackageTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".sideshow")
  userChoiceElement.innerHTML += event.detail.ticket
})

eventHub.addEventListener("fullPackageTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".games")
  userChoiceElement.innerHTML += event.detail.ticket
})

eventHub.addEventListener("fullPackageTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".food")
  userChoiceElement.innerHTML += event.detail.ticket
})

eventHub.addEventListener("fullPackageTicketPurchased", (event) => {
  const userChoiceElement = document.querySelector(".rides")
  userChoiceElement.innerHTML += event.detail.ticket
})